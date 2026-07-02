import { Team } from "../team/Team.js";
import { Player } from "../player/index.js";
import { Score } from "./Score.js";
import { Commentary } from "../commentary/Commentary.js";

export class Match {
    teamA: Team;
    teamB: Team;
    winner: Team | null = null;
    manOfTheMatch: Player | null = null;
    score: Score;
    commentary: Commentary;

    constructor(teamA: Team, teamB: Team, commentary: Commentary) {
        this.teamA = teamA;
        this.teamB = teamB;
        this.score = new Score();
        this.commentary = commentary;
    }

    setWinner(team: Team): void { this.winner = team; }
    getWinner(): Team | null { return this.winner; }
    setManOfTheMatch(mom: Player): void { this.manOfTheMatch = mom; }
    getManOfTheMatch(): Player | null { return this.manOfTheMatch; }

    getResult(): void {
        // FIXED: Changed teamA/teamB reference to this.teamA/this.teamB
        if (this.teamA.getTotalGoals() >= this.teamB.getTotalGoals()) {
            this.commentary.won(this.teamA);
        } else {
            this.commentary.won(this.teamB);
        }
    }
}
