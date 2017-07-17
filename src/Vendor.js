{
  class Item {
    constructor(name, price){
      this.name = name
      this.price = price
    }
  }

  const Machine = [new Item("pepsi", 0.50),
    new Item("crisps", 0.70)
  ]

  module.exports = {
    Item: Item,
    Machine: Machine
  }
}
