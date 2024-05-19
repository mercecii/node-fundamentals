class PizzaShop {
  constructor() {
    this.orderNumber = 0;
  }
  order() {
    this.orderNumber++;
  }
  displayOrderNumber() {
    console.group(`Current order Number = ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
