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
})
