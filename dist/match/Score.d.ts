import { Player } from "../player/index.js";
import { Team } from "../team/Team.js";
export declare class Score {
    teamAGoals: number;
    teamBGoals: number;
    addTeamAGoals(p: Player, t: Team): void;
    addTeamBGoals(p: Player, t: Team): void;
    getTeamAGoals(): number;
    getTeamBGoals(): number;
}
//# sourceMappingURL=Score.d.ts.map