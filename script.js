// function Calculator() {
//     this.methods = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b
//     }
//     this.calculate = function (str) {
//         let arr = str.split(" ")
//         return this.methods[arr[1]](+arr[0], +arr[2])
//     }
//     this.addMethod = function (name, func) {
//         this.methods[name] = func
//     }
// }

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

function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case "+":
            return add(firstNum, secondNum)
            break
        case "-":
            return subtract(firstNum, secondNum)
            break
        case "*":
            return multiply(firstNum, secondNum)
            break
        case "/":
            return divide(firstNum, secondNum)
            break
        default:
            return 0
    }
}

let operator = ""
let firstNum = ""
let secondNum = ""

const display = document.querySelector(".display")
const displayFirstNum = display.querySelector("#firstNum")
const displaySecondNum = display.querySelector("#secondNum")
const displayOperator = display.querySelector("#operator")

function refreshDisplay() {
    displayFirstNum.textContent = firstNum
    displaySecondNum.textContent = secondNum
    displayOperator.textContent = operator
}

refreshDisplay()

const digitButtons = document.querySelectorAll(".digit")
digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (operator === "") {
            firstNum += `${button.id}`
        } else {
            secondNum += `${button.id}`
        }
        refreshDisplay()
    })
})

const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", () => {
    firstNum = ""
    operator = ""
    secondNum = ""
    refreshDisplay()
})
