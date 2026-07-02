import { Team } from "../team/Team.js";
export declare abstract class Player {
    private name;
    private type;
    private team;
    private goals;
    private saves;
    private redCards;
    private yellowCards;
    constructor(name: string, type: string);
    run(): void;
    pass(): void;
    celebrate(): void;
    getType(): string;
    getName(): string;
    setName(name: string): void;
    getTeam(): Team | null;
    setTeam(team: Team): void;
    getGoals(): number;
    setGoals(goals: number): void;
    getSaves(): number;
    setSaves(saves: number): void;
    getRedCards(): number;
    setRedCards(redCards: number): void;
    getYellowCards(): number;
    setYellowCards(yellowCards: number): void;
    abstract specialAbility(): void;
}
//# sourceMappingURL=Player.d.ts.map