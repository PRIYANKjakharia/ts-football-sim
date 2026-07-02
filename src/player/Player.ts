import { Team } from "../team/Team.js";

export abstract class Player {
    private name: string;
    private type: string;
    private team: Team | null = null;
    private goals: number = 0;
    private saves: number = 0;
    private redCards: number = 0;
    private yellowCards: number = 0;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
    run(): void {
        console.log(`${this.name} is running !`);
    }
    pass(): void {
        console.log(`${this.name} passed the ball !`);
    }
    celebrate(): void {
        console.log(`${this.name} is celebrating !`);
    }
    getType(): string {
        return this.type;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    getTeam(): Team | null {
        return this.team;
    }
    setTeam(team: Team): void {
        this.team = team;
    }
    getGoals(): number {
        return this.goals;
    }
    setGoals(goals: number): void {
        this.goals += goals;
    }
    getSaves(): number {
        return this.saves;
    }
    setSaves(saves: number): void {
        this.saves += saves;
    }
    getRedCards(): number {
        return this.redCards;
    }
    setRedCards(redCards: number): void {
        this.redCards += redCards;
    }
    getYellowCards(): number {
        return this.yellowCards;
    }
    setYellowCards(yellowCards: number): void {
        this.yellowCards += yellowCards;
    }

    abstract specialAbility(): void;
}
