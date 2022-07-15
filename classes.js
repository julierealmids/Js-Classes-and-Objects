class KioskCalc {
    constructor(fruit, quantity) {
       this.fruit = fruit;
       this.quantity =quantity;
       this.fruitPriceList={"Orange":30,"Mangoes":15,"Avocado":40};
       this.getTotalCost=function(){
        if (this.fruitPriceList[this.fruit]===undefined){
           return `${this.fruit} is not available`
        }
        return `${quantity} ${fruit} for KES ${quantity* this.fruitPriceList.Orange} `
      }
    }
  }
  var kioskCalc = new KioskCalc("Mangoes",5);
  console.log(kioskCalc.getTotalCost());













