import { Player } from "./Player.js";

export class Defender extends Player {
    constructor(name: string) {
        super(name, "Defender");
    }
    specialAbility(): void {
        console.log(`${this.getName()} tackled an opponent`);
    }
}
