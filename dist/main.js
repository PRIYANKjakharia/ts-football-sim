import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { Player, Striker, MidFielder, Defender, GoalKeeper } from "./player/index.js";
import { Team } from "./team/Team.js";
import { Match } from "./match/Match.js";
import { Commentary } from "./commentary/Commentary.js";
import { EnglishCommentary } from "./commentary/EnglishCommentary.js";
import { HindiCommentary } from "./commentary/HindiCommentary.js";
const rl = createInterface({ input, output });
async function ask(question) {
    return (await rl.question(question)).trim();
}
async function createPlayer(playerNo) {
    const name = await ask(`Enter Player ${playerNo} Name: `);
    console.log("\nChoose Position");
    console.log("1. Striker");
    console.log("2. MidFielder");
    console.log("3. Defender");
    console.log("4. GoalKeeper");
    const choice = await ask("Enter Choice: ");
    switch (choice) {
        case "1":
            return new Striker(name);
        case "2":
            return new MidFielder(name);
        case "3":
            return new Defender(name);
        case "4":
            return new GoalKeeper(name);
        default:
            console.log("Invalid Choice. Striker selected by default.");
            return new Striker(name);
    }
}
async function createTeam(teamNumber) {
    const teamName = await ask(`\nEnter Team ${teamNumber} Name: `);
    const count = Number(await ask("Number of Players: "));
    const players = [];
    for (let i = 1; i <= count; i++) {
        console.log(`\n------ Player ${i} ------`);
        const player = await createPlayer(i);
        players.push(player);
    }
    return new Team(teamName, players);
}
async function chooseCommentary() {
    console.log("\nChoose Commentary");
    console.log("1. English");
    console.log("2. Hindi");
    const choice = await ask("Enter Choice: ");
    switch (choice) {
        case "1":
            return new EnglishCommentary();
        case "2":
            return new HindiCommentary();
        default:
            console.log("Invalid Choice. English Commentary Selected.");
            return new EnglishCommentary();
    }
}
// function choosePlayer(team: Team): Player {
//     console.log(`\nPlayers of ${team.getTeamName()}`);
//     const players = team.getPlayerList();
//     for (let i = 0; i < players.length; i++) {
//         console.log(`${i + 1}. ${players[i]!.getName()} (${players[i]!.getType()})`);
//     }
//     return players[0]!;
// }
async function chooseTeam(match) {
    console.log("\nChoose Team");
    console.log(`1. ${match.teamA.getTeamName()}`);
    console.log(`2. ${match.teamB.getTeamName()}`);
    const choice = await ask("Choice : ");
    return choice === "1" ? match.teamA : match.teamB;
}
function showScore(match) {
    console.log("\n========================");
    console.log("       SCOREBOARD");
    console.log("========================");
    console.log(`${match.teamA.getTeamName()} : ${match.score.getTeamAGoals()}`);
    console.log(`${match.teamB.getTeamName()} : ${match.score.getTeamBGoals()}`);
    console.log("========================\n");
}
async function passBall(match) {
    console.log("\nChoose Team");
    console.log(`1. ${match.teamA.getTeamName()}`);
    console.log(`2. ${match.teamB.getTeamName()}`);
    const teamChoice = await ask("Choice: ");
    const team = teamChoice === "1" ? match.teamA : match.teamB;
    const players = team.getPlayerList();
    players.forEach((p, i) => {
        console.log(`${i + 1}. ${p.getName()}`);
    });
    const playerChoice = Number(await ask("Choose Player: "));
    const player = players[playerChoice - 1];
    console.log("\nPass Result");
    console.log("1. Good Pass");
    console.log("2. Bad Pass");
    const result = await ask("Choice: ");
    player.specialAbility();
    if (result === "1")
        match.commentary.goodPass(player);
    else
        match.commentary.badPass(player);
}
async function tackle(match) {
    const team = await chooseTeam(match);
    const defenders = team.getPlayerList()
        .filter(p => p.getType() === "Defender");
    if (defenders.length === 0) {
        console.log("No Defenders available. Tackle failed.");
        return;
    }
    console.log("\nChoose Defender");
    defenders.forEach((p, i) => console.log(`${i + 1}. ${p.getName()}`));
    const choice = Number(await ask("Choice : "));
    const defender = defenders[choice - 1];
    if (!defender)
        return;
    defender.specialAbility();
}
async function longPass(match) {
    const team = await chooseTeam(match);
    const mids = team.getPlayerList()
        .filter(p => p.getType() === "MidFielder");
    if (mids.length === 0) {
        console.log("No MidFielders available.");
        return;
    }
    console.log("\nChoose Midfielder");
    mids.forEach((p, i) => console.log(`${i + 1}. ${p.getName()}`));
    const choice = Number(await ask("Choice : "));
    const mid = mids[choice - 1];
    if (!mid)
        return;
    mid.specialAbility();
}
async function shootBall(match) {
    console.log("\nChoose Team");
    console.log(`1. ${match.teamA.getTeamName()}`);
    console.log(`2. ${match.teamB.getTeamName()}`);
    const teamChoice = await ask("Choice: ");
    const team = teamChoice === "1" ? match.teamA : match.teamB;
    const players = team.getPlayerList().filter(p => p.getType() === "Striker");
    if (players.length === 0) {
        console.log("No Strikers available");
        return;
    }
    players.forEach((p, i) => {
        console.log(`${i + 1}. ${p.getName()}`);
    });
    const playerChoice = Number(await ask("Choose Player: "));
    const player = players[playerChoice - 1];
    console.log("\nShot Result");
    console.log("1. Goal");
    console.log("2. Miss");
    const result = await ask("Choice: ");
    player.specialAbility();
    if (result === "1") {
        match.commentary.goodShoot(player);
        match.commentary.Goal(player);
        if (team === match.teamA)
            match.score.addTeamAGoals(player, team);
        else
            match.score.addTeamBGoals(player, team);
    }
    else {
        match.commentary.badShoot(player);
    }
    showScore(match);
}
async function saveBall(match) {
    console.log("\nChoose Goalkeeper Team");
    console.log(`1. ${match.teamA.getTeamName()}`);
    console.log(`2. ${match.teamB.getTeamName()}`);
    const choice = await ask("Choice: ");
    const keeper = choice === "1" ? match.teamA.getGoalKeeper() : match.teamB.getGoalKeeper();
    if (!keeper) {
        console.log("No GoalKeeper Found");
        return;
    }
    console.log("\nSave Result");
    console.log("1. Good Save");
    console.log("2. Bad Save");
    const result = await ask("Choice: ");
    keeper.specialAbility();
    if (result === "1") {
        keeper.setSaves(1);
        match.commentary.goodSave(keeper);
    }
    else {
        match.commentary.badSave(keeper);
    }
}
async function run(match) {
    const team = await chooseTeam(match);
    const players = team.getPlayerList();
    players.forEach((p, i) => console.log(`${i + 1}. ${p.getName()}`));
    const choice = Number(await ask("Choice : "));
    const player = players[choice - 1];
    if (!player)
        return;
    player.run();
}
async function celebrate(match) {
    const team = await chooseTeam(match);
    const players = team.getPlayerList();
    players.forEach((p, i) => console.log(`${i + 1}. ${p.getName()}`));
    const choice = Number(await ask("Choice : "));
    const player = players[choice - 1];
    if (!player)
        return;
    player.celebrate();
}
async function main() {
    console.log("=================================");
    console.log("  FOOTBALL MATCH SIMULATOR");
    console.log("=================================\n");
    const teamA = await createTeam(1);
    const teamB = await createTeam(2);
    const commentary = await chooseCommentary();
    const match = new Match(teamA, teamB, commentary);
    while (true) {
        console.log("\n========== MENU ==========");
        console.log("1. Pass");
        console.log("2. Shoot");
        console.log("3. Save");
        console.log("4. Tackle");
        console.log("5. Long Pass");
        console.log("6. Run");
        console.log("7. Celebrate");
        console.log("8. Show Score");
        console.log("9. End Match");
        const choice = await ask("Enter Choice: ");
        switch (choice) {
            case "1":
                await passBall(match);
                break;
            case "2":
                await shootBall(match);
                break;
            case "3":
                await saveBall(match);
                break;
            case "4":
                await tackle(match);
                break;
            case "5":
                await longPass(match);
                break;
            case "6":
                await run(match);
                break;
            case "7":
                await celebrate(match);
                break;
            case "8":
                showScore(match);
                break;
            case "9":
                console.log("\n========== RESULT ==========");
                match.getResult();
                let mom = null;
                let maxGoals = -1;
                const allPlayers = [
                    ...match.teamA.getPlayerList(),
                    ...match.teamB.getPlayerList(),
                ];
                for (const player of allPlayers) {
                    if (player.getGoals() > maxGoals) {
                        maxGoals = player.getGoals();
                        mom = player;
                    }
                }
                if (mom != null) {
                    match.setManOfTheMatch(mom);
                    console.log(`Man of the Match : ${mom.getName()} (${mom.getGoals()} Goals)`);
                }
                rl.close();
                return;
            default:
                console.log("X---- Invalid Choice ----X");
        }
    }
}
main();
//# sourceMappingURL=main.js.map