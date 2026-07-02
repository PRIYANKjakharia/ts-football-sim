import { Player } from "./Player.js";
export class Defender extends Player {
    constructor(name) {
        super(name, "Defender");
    }
    specialAbility() {
        console.log(`${this.getName()} tackled an opponent`);
    }
}
//# sourceMappingURL=Defender.js.map