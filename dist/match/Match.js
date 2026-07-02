import { Team } from "../team/Team.js";
import { Player } from "../player/index.js";
import { Score } from "./Score.js";
import { Commentary } from "../commentary/Commentary.js";
export class Match {
    teamA;
    teamB;
    winner = null;
    manOfTheMatch = null;
    score;
    commentary;
    constructor(teamA, teamB, commentary) {
        this.teamA = teamA;
        this.teamB = teamB;
        this.score = new Score();
        this.commentary = commentary;
    }
    setWinner(team) { this.winner = team; }
    getWinner() { return this.winner; }
    setManOfTheMatch(mom) { this.manOfTheMatch = mom; }
    getManOfTheMatch() { return this.manOfTheMatch; }
    getResult() {
        // FIXED: Changed teamA/teamB reference to this.teamA/this.teamB
        if (this.teamA.getTotalGoals() >= this.teamB.getTotalGoals()) {
            this.commentary.won(this.teamA);
        }
        else {
            this.commentary.won(this.teamB);
        }
    }
}
//# sourceMappingURL=Match.js.map