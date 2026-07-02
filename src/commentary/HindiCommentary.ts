import { Commentary } from "./Commentary.js";
import { Player } from "../player/index.js";
import { Team } from "../team/Team.js";

export class HindiCommentary implements Commentary {
    won(team: Team): void {
        console.log(`${team.getTeamName()} ne badhiya pradarshan karke jeet li he match or mardi he bazzi.aur ${team.getTotalGoals()} goals score kardiye he.`);
    }
    goodShoot(player: Player): void {
        console.log(`${player.getName()} ne badhiya shoot kiya he.`);
    }
    badShoot(player: Player): void {
        console.log(`${player.getName()} ne Galat shoot.kiya he`);
    }
    goodSave(player: Player): void {
        console.log(`${player.getName()} ne badhiya save kiya he.`);
    }
    badSave(player: Player): void {
        console.log(`${player.getName()} ne Galat save kiya he.`);
    }
    goodPass(player: Player): void {
        console.log(`${player.getName()} ne badhiya pass kiya he.`);
    }
    badPass(player: Player): void {
        console.log(`${player.getName()} ne Galat pass kiya he.`);
    }
    Goal(player: Player): void {
        console.log(`${player.getName()} ne shandar goal kiya he.`);
    }
}
