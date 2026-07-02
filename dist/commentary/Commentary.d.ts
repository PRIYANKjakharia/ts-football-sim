import { Player } from "../player/index.js";
import { Team } from "../team/Team.js";
export declare abstract class Commentary {
    abstract goodShoot(player: Player): void;
    abstract badShoot(player: Player): void;
    abstract goodSave(player: Player): void;
    abstract badSave(player: Player): void;
    abstract goodPass(player: Player): void;
    abstract badPass(player: Player): void;
    abstract Goal(player: Player): void;
    abstract won(team: Team): void;
}
//# sourceMappingURL=Commentary.d.ts.map