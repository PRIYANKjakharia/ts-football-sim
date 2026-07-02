import { Player } from "../player/index.js";
import { Team } from "../team/Team.js";

export class Score {
    teamAGoals: number = 0;
    teamBGoals: number = 0;

    addTeamAGoals(p: Player, t: Team) {
        this.teamAGoals++;
        p.setGoals(1);
        t.setTotalGoals(t.getTotalGoals() + 1);
    }

    addTeamBGoals(p: Player, t: Team) {
        this.teamBGoals++;
        p.setGoals(1);
        t.setTotalGoals(t.getTotalGoals() + 1);
    }

    getTeamAGoals(): number { return this.teamAGoals; }
    getTeamBGoals(): number { return this.teamBGoals; }
}
