import { Player } from "../player/index.js";
export declare class Team {
    teamName: string;
    playerList: Player[];
    matchesPlayed: number;
    matchesWon: number;
    totalGoals: number;
    totalSaves: number;
    goalKeeper: Player | undefined;
    constructor(teamName: string, playerList: Player[]);
    getTeamName(): string;
    setTeamName(value: string): void;
    getPlayerList(): Player[];
    getMatchesPlayed(): number;
    setMatchesPlayed(value: number): void;
    getMatchesWon(): number;
    setMatchesWon(value: number): void;
    getTotalGoals(): number;
    setTotalGoals(value: number): void;
    getTotalSaves(): number;
    setTotalSaves(value: number): void;
    getGoalKeeper(): Player | undefined;
    setGoalKeeper(value: Player): void;
}
//# sourceMappingURL=Team.d.ts.map