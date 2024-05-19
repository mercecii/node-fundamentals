const EventEmitter = require("node:events");
const PizzaShop = require("./pizza-shop");

const pizzaShop = new PizzaShop();

pizzaShop.order();
pizzaShop.displayOrderNumber();

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//   console.log(`Order recieved! Baking a ${size} pizza with ${topping}`);
// });

// emitter.on("order-pizza", (size, topping) => {
//   if (size === "large") {
//     console.log("Serving complimentary drink");
//   }
// });

// emitter.emit("order-pizza", "large", "pizza");

const buffer = new Buffer.from("Deepak");
buffer.write("Kum");
console.log(buffer.toJSON());
console.log(buffer);
console.log(buffer.toString());
