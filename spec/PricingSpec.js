var Pricing = require('../src/Pricing')

describe("Pricing system", () => {

  beforeEach(() => {
    pricingSystem = new Pricing();
  })

  describe("It has properties", () => {
    it("has a balance set to zero by default", () => {
      expect(pricingSystem.balance).toEqual(0)
    })
  })

  describe("#Sum", () => {
    it("adds two arguments to produce a balance", () => {
      let itemPrice = 0.50
      let quantity = 2
      pricingSystem.sum(itemPrice, quantity)
      expect(pricingSystem.balance).toEqual(1)
    })
  })
})
