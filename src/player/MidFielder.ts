import { Player } from "./Player.js";

export class MidFielder extends Player {
    constructor(name: string) {
        super(name, "MidFielder");
    }
    specialAbility(): void {
        console.log(`${this.getName()} long passed the ball `);
    }
}
