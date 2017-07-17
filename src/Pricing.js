class Pricing {
  constructor() {
    this.balance = 0
  }

  sum(itemPrice, quantity) {
    this.balance += (itemPrice * quantity)
  }
}

module.exports = Pricing;
