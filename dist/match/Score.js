import { Player } from "../player/index.js";
import { Team } from "../team/Team.js";
export class Score {
    teamAGoals = 0;
    teamBGoals = 0;
    addTeamAGoals(p, t) {
        this.teamAGoals++;
        p.setGoals(1);
        t.setTotalGoals(t.getTotalGoals() + 1);
    }
    addTeamBGoals(p, t) {
        this.teamBGoals++;
        p.setGoals(1);
        t.setTotalGoals(t.getTotalGoals() + 1);
    }
    getTeamAGoals() { return this.teamAGoals; }
    getTeamBGoals() { return this.teamBGoals; }
}
//# sourceMappingURL=Score.js.map