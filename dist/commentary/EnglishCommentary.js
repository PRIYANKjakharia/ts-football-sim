import { Commentary } from "./Commentary.js";
import { Player } from "../player/index.js";
import { Team } from "../team/Team.js";
export class EnglishCommentary {
    won(team) {
        console.log(`✨✨✨✨✨ ${team.getTeamName()} has won with great performance and scored ${team.getTotalGoals()}.`);
    }
    goodShoot(player) {
        console.log(`✨✨✨✨✨ ${player.getName()} has played good shoot.`);
    }
    badShoot(player) {
        console.log(`✨✨✨✨✨ ${player.getName()} has played bad shoot.`);
    }
    goodSave(player) {
        console.log(`✨✨✨✨✨ ${player.getName()} has saved good.`);
    }
    badSave(player) {
        console.log(`✨✨✨✨✨ ${player.getName()} has saved bad.`);
    }
    goodPass(player) {
        console.log(`✨✨✨✨✨ ${player.getName()} has passed good.`);
    }
    badPass(player) {
        console.log(`✨✨✨✨✨ ${player.getName()} has passed bad`);
    }
    Goal(player) {
        console.log(`✨✨✨✨✨ ${player.getName()} has scored great goal.`);
    }
}
//# sourceMappingURL=EnglishCommentary.js.map