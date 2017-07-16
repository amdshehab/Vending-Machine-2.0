var Item = require('../src/Vendor.js').Item

describe("Item", () => {

  beforeEach(() => {
    item = new Item("pepsi", 0.50);
  })

  describe("Item has properties", () => {
    it("has a name property", () => {
      expect(item.name).toEqual("pepsi")
    })
    it("has a price", () => {
      expect(item.price).toEqual(0.50)
    })
  })
})
