import { Player } from "./Player.js";
export class Striker extends Player {
    constructor(name) {
        super(name, "Striker");
    }
    specialAbility() {
        console.log(`${this.getName()} shoots the ball ⚽`);
    }
}
//# sourceMappingURL=Striker.js.map