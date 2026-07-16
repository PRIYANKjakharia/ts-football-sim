import { Commentary } from "./Commentary.js";
import { Player } from "../player/index.js";
import { Team } from "../team/Team.js";

export class EnglishCommentary implements Commentary {
    won(team: Team): void {
        console.log(`✨✨✨✨✨ ${team.getTeamName()} has won with great performance and scored ${team.getTotalGoals()}.`);
    }
    goodShoot(player: Player): void {
        console.log(`✨✨✨✨✨ ${player.getName()} has played good shoot.`);
    }
    badShoot(player: Player): void {
        console.log(`✨✨✨✨✨ ${player.getName()} has played bad shoot.`);
    }
    goodSave(player: Player): void {
        console.log(`✨✨✨✨✨ ${player.getName()} has saved good.`);
    }
    badSave(player: Player): void {
        console.log(`✨✨✨✨✨ ${player.getName()} has saved bad.`);
    }
    goodPass(player: Player): void {
        console.log(`✨✨✨✨✨ ${player.getName()} has passed good.`);
    }
    badPass(player: Player): void {
        console.log(`✨✨✨✨✨ ${player.getName()} has passed bad`);
    }
    Goal(player: Player): void {
        console.log(`✨✨✨✨✨ ${player.getName()} has scored great goal.`);
    }
}
