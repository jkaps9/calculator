function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    }
    this.calculate = function (str) {
        let arr = str.split(" ")
        return this.methods[arr[1]](+arr[0], +arr[2])
    }
    this.addMethod = function (name, func) {
        this.methods[name] = func
    }
}

function add(a, b) {
    return +a + +b
}

function subtract(a, b) {
    return +a - +b
}

function multiply(a, b) {
    return +a * +b
}

function divide(a, b) {
    if (b === 0) { return "#DIV/0" }
    return +a / +b
}

console.log(add(4, 6)) //10
console.log(subtract(40, 20)) //20
console.log(multiply(5, 10)) //50
console.log(divide(4, 2)) //2
console.log(divide(4, 0)) //#DIV/0


let firstNum = 1
let operator = "+"
let secondNum = 2


