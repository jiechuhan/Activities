console.log(process.argv)

var first = process.argv[2]
var second = process.argv[3]

console.log(first)
console.log(second)

if (first === second) {
    console.log("true")
} else {
    console.log("false")
}