import { Commentary } from "./Commentary.js";
import { Player } from "../player/index.js";
import { Team } from "../team/Team.js";
export declare class EnglishCommentary implements Commentary {
    won(team: Team): void;
    goodShoot(player: Player): void;
    badShoot(player: Player): void;
    goodSave(player: Player): void;
    badSave(player: Player): void;
    goodPass(player: Player): void;
    badPass(player: Player): void;
    Goal(player: Player): void;
}
//# sourceMappingURL=EnglishCommentary.d.ts.map