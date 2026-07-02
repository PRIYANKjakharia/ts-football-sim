import { Player } from "../player/index.js";

export class Team {
    teamName: string;
    playerList: Player[];
    matchesPlayed: number;
    matchesWon: number;
    totalGoals: number;
    totalSaves: number;
    goalKeeper: Player | undefined;

    constructor(teamName: string, playerList: Player[]) {
        this.teamName = teamName;
        this.playerList = playerList;
        this.matchesPlayed = 0;
        this.matchesWon = 0;
        this.totalGoals = 0;
        this.totalSaves = 0;
        for (const player of playerList) {
            this.totalGoals += player.getGoals();
            this.totalSaves += player.getSaves();
            if (player.getType() === "GoalKeeper") this.goalKeeper = player;
        }
    }

    getTeamName(): string { return this.teamName; }
    setTeamName(value: string): void { this.teamName = value; }
    getPlayerList(): Player[] { return this.playerList; }
    getMatchesPlayed(): number { return this.matchesPlayed; }
    setMatchesPlayed(value: number): void { this.matchesPlayed = value; }
    getMatchesWon(): number { return this.matchesWon; }
    setMatchesWon(value: number): void { this.matchesWon = value; }
    getTotalGoals(): number { return this.totalGoals; }
    setTotalGoals(value: number): void { this.totalGoals = value; }
    getTotalSaves(): number { return this.totalSaves; }
    setTotalSaves(value: number): void { this.totalSaves = value; }
    getGoalKeeper() { return this.goalKeeper; }
    setGoalKeeper(value: Player): void { this.goalKeeper = value; }
}
