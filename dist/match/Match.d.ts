import { Team } from "../team/Team.js";
import { Player } from "../player/index.js";
import { Score } from "./Score.js";
import { Commentary } from "../commentary/Commentary.js";
export declare class Match {
    teamA: Team;
    teamB: Team;
    winner: Team | null;
    manOfTheMatch: Player | null;
    score: Score;
    commentary: Commentary;
    constructor(teamA: Team, teamB: Team, commentary: Commentary);
    setWinner(team: Team): void;
    getWinner(): Team | null;
    setManOfTheMatch(mom: Player): void;
    getManOfTheMatch(): Player | null;
    getResult(): void;
}
//# sourceMappingURL=Match.d.ts.map