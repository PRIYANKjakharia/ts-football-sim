import { Player } from "./Player.js";
export class MidFielder extends Player {
    constructor(name) {
        super(name, "MidFielder");
    }
    specialAbility() {
        console.log(`${this.getName()} long passed the ball `);
    }
}
//# sourceMappingURL=MidFielder.js.map