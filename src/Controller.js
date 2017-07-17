var Pricing = require('./Pricing')
var Vendor = require('./Vendor')


const pricingSystem = new Pricing();
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Controller {
  constructor() {
  }

  mainMenu() {
    rl.question("please select your item", (answer) => {
      console.log("well done m8")
    })

  }
}

module.exports = Controller
