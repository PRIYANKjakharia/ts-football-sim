import { Commentary } from "./Commentary.js";
import { Player } from "../player/index.js";
import { Team } from "../team/Team.js";
export class HindiCommentary {
    won(team) {
        console.log(`${team.getTeamName()} ne badhiya pradarshan karke jeet li he match or mardi he bazzi.aur ${team.getTotalGoals()} goals score kardiye he.`);
    }
    goodShoot(player) {
        console.log(`${player.getName()} ne badhiya shoot kiya he.`);
    }
    badShoot(player) {
        console.log(`${player.getName()} ne Galat shoot.kiya he`);
    }
    goodSave(player) {
        console.log(`${player.getName()} ne badhiya save kiya he.`);
    }
    badSave(player) {
        console.log(`${player.getName()} ne Galat save kiya he.`);
    }
    goodPass(player) {
        console.log(`${player.getName()} ne badhiya pass kiya he.`);
    }
    badPass(player) {
        console.log(`${player.getName()} ne Galat pass kiya he.`);
    }
    Goal(player) {
        console.log(`${player.getName()} ne shandar goal kiya he.`);
    }
}
//# sourceMappingURL=HindiCommentary.js.map