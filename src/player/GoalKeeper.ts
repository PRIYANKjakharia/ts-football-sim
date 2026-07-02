import { Player } from "./Player.js";

export class GoalKeeper extends Player {
    constructor(name: string) {
        super(name, "GoalKeeper");
    }
    specialAbility(): void {
        console.log(`${this.getName()} saved the ball 🥅⚽`);
    }
}
