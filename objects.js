let purchases={
    "Apples":30.00,
    "bananas":40.00,
    "oranges":20.00

}
function calculateFruitCost(fruitName,quantity){
    let cost = purchases[fruitName]
    if ((purchases[fruitName]== undefined)){
        return `${fruitName} is not available`
    }
        return`${quantity} ${fruitName} for KES ${cost * quantity} `;
}
console.log(calculateFruitCost("bananas",4))