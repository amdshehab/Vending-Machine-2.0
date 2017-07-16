var Machine = require('../src/Vendor.js').Machine

describe('Vendor', () => {
  describe('it has properties', () => {
    it('has an array with new items', () => {
      expect(Machine.length).toEqual(2)
    })
  })
})
