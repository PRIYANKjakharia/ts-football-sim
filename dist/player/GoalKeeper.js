import { Player } from "./Player.js";
export class GoalKeeper extends Player {
    constructor(name) {
        super(name, "GoalKeeper");
    }
    specialAbility() {
        console.log(`${this.getName()} saved the ball 🥅⚽`);
    }
}
//# sourceMappingURL=GoalKeeper.js.map