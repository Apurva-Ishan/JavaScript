const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce((acc, currVal) => {
//     console.log(`accumulator: ${acc}, currentValue: ${currVal}`);
//     return acc + currVal
// }, 3)

const shoppingCart = [
    {
        itemName: "Candy Bar",
        price: 20
    },
    {
        itemName: "Hanger",
        price: 35
    },
    {
        itemName: "Cheese",
        price: 50
    },
    {
        itemName: "Chocolate",
        price: 90
    },
]

const totalBill = shoppingCart.reduce((acc, itemPrice) => {
    return acc + itemPrice.price
}, 0)

console.log(totalBill);
