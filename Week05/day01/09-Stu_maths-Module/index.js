var math = require("./math.js")
var operation = process.argv[2]
var numOne = parseInt(process.argv[3])
var numTwo = parseInt(process.argv[4])

switch (operation) {
    case '+':
        console.log(math.sum(numOne, numTwo));
        break;
    case '-':
        console.log(math.difference(numOne, numTwo));
        break;
    case '*':
        console.log(math.product(numOne, numTwo));
        break;
    case '/':
        console.log(math.quotient(numOne, numTwo));
        break;
}