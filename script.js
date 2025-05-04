var operator = ""
var firstNum = ""
var secondNum = ""

const display = document.querySelector(".display")
const displayFirstNum = display.querySelector("#firstNum")
const displaySecondNum = display.querySelector("#secondNum")
const displayOperator = display.querySelector("#operator")

function refreshDisplay() {
    displayFirstNum.textContent = firstNum
    displaySecondNum.textContent = secondNum
    displayOperator.textContent = operator
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

function operate(op, num1, num2) {
    switch (op) {
        case "+":
            firstNum = `${add(num1, num2)}`
            break
        case "-":
            firstNum = `${subtract(num1, num2)}`
            break
        case "*":
            firstNum = `${multiply(num1, num2)}`
            break
        case "/":
            firstNum = `${divide(num1, num2)}`
            break
        default:
            console.log("invalid operator")
    }
    secondNum = ""
    operator = ""
    refreshDisplay()
}

//clear display on first load
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

const operatorButtons = document.querySelectorAll(".operator")
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (operator != "") {
            operate(operator, firstNum, secondNum)
        }
        operator = `${button.id}`
        refreshDisplay()
    })
})

const equalsButton = document.querySelector("#equals")

equalsButton.addEventListener("click", () => operate(operator, firstNum, secondNum))