import { Team } from "../team/Team.js";
export class Player {
    name;
    type;
    team = null;
    goals = 0;
    saves = 0;
    redCards = 0;
    yellowCards = 0;
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    run() {
        console.log(`${this.name} is running !`);
    }
    pass() {
        console.log(`${this.name} passed the ball !`);
    }
    celebrate() {
        console.log(`${this.name} is celebrating !`);
    }
    getType() {
        return this.type;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getTeam() {
        return this.team;
    }
    setTeam(team) {
        this.team = team;
    }
    getGoals() {
        return this.goals;
    }
    setGoals(goals) {
        this.goals += goals;
    }
    getSaves() {
        return this.saves;
    }
    setSaves(saves) {
        this.saves += saves;
    }
    getRedCards() {
        return this.redCards;
    }
    setRedCards(redCards) {
        this.redCards += redCards;
    }
    getYellowCards() {
        return this.yellowCards;
    }
    setYellowCards(yellowCards) {
        this.yellowCards += yellowCards;
    }
}
//# sourceMappingURL=Player.js.map