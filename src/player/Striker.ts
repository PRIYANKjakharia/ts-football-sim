import { Player } from "./Player.js";

export class Striker extends Player {
    constructor(name: string) {
        super(name, "Striker");
    }
    specialAbility(): void {
        console.log(`${this.getName()} shoots the ball ⚽`);
    }
}
