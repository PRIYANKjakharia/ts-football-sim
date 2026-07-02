"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Blueprint for any inventory item
class Product {
    name;
    price; // Hidden from outside modification
    constructor(name, startingPrice) {
        this.name = name;
        this.price = startingPrice;
    }
    // A safe way to update the price with built-in validation
    applyDiscount(percentage) {
        if (percentage > 0 && percentage <= 100) {
            this.price = this.price - (this.price * (percentage / 100));
            console.log(`🏷️ New price for ${this.name}: $${this.price.toFixed(2)}`);
        }
        else {
            console.log("❌ Invalid discount percentage!");
        }
    }
    // A safe way to view the private price
    getDetails() {
        return `Item: ${this.name} | Price: $${this.price.toFixed(2)}`;
    }
}
// 2. Testing our OOP code
const laptop = new Product("MacBook Air", 1000);
console.log(laptop.getDetails()); // View details
laptop.applyDiscount(15); // Apply 15% off
console.log(laptop.getDetails()); // View new details
//# sourceMappingURL=index.js.map