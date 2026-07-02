import { Player } from "../player/index.js";
export class Team {
    teamName;
    playerList;
    matchesPlayed;
    matchesWon;
    totalGoals;
    totalSaves;
    goalKeeper;
    constructor(teamName, playerList) {
        this.teamName = teamName;
        this.playerList = playerList;
        this.matchesPlayed = 0;
        this.matchesWon = 0;
        this.totalGoals = 0;
        this.totalSaves = 0;
        for (const player of playerList) {
            this.totalGoals += player.getGoals();
            this.totalSaves += player.getSaves();
            if (player.getType() === "GoalKeeper")
                this.goalKeeper = player;
        }
    }
    getTeamName() { return this.teamName; }
    setTeamName(value) { this.teamName = value; }
    getPlayerList() { return this.playerList; }
    getMatchesPlayed() { return this.matchesPlayed; }
    setMatchesPlayed(value) { this.matchesPlayed = value; }
    getMatchesWon() { return this.matchesWon; }
    setMatchesWon(value) { this.matchesWon = value; }
    getTotalGoals() { return this.totalGoals; }
    setTotalGoals(value) { this.totalGoals = value; }
    getTotalSaves() { return this.totalSaves; }
    setTotalSaves(value) { this.totalSaves = value; }
    getGoalKeeper() { return this.goalKeeper; }
    setGoalKeeper(value) { this.goalKeeper = value; }
}
//# sourceMappingURL=Team.js.map