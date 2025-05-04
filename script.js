let operator = ""
let firstNum = ""
let secondNum = ""

const display = document.querySelector(".display")
const displayFirstNum = display.querySelector("#firstNum")
const displaySecondNum = display.querySelector("#secondNum")
const displayOperator = display.querySelector("#operator")

function refreshDisplay(operator, firstNum, secondNum) {
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

function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case "+":
            firstNum = `${add(firstNum, secondNum)}`
            break
        case "-":
            firstNum = `${subtract(firstNum, secondNum)}`
            break
        case "*":
            firstNum = `${multiply(firstNum, secondNum)}`
            break
        case "/":
            firstNum = `${divide(firstNum, secondNum)}`
            break
        default:
            console.log("incorrect operator")
    }
    secondNum = ""
    operator = ""
    refreshDisplay(operator, firstNum, secondNum)
}

//clear display on first load
refreshDisplay(operator, firstNum, secondNum)

const digitButtons = document.querySelectorAll(".digit")
digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (operator === "") {
            firstNum += `${button.id}`
        } else {
            secondNum += `${button.id}`
        }
        refreshDisplay(operator, firstNum, secondNum)
    })
})

const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", () => {
    firstNum = ""
    operator = ""
    secondNum = ""
    refreshDisplay(operator, firstNum, secondNum)
})

const operatorButtons = document.querySelectorAll(".operator")
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        operator = `${button.id}`
        refreshDisplay(operator, firstNum, secondNum)
    })
})

const equalsButton = document.querySelector("#equals")

equalsButton.addEventListener("click", () => {
    operate(operator, firstNum, secondNum)

})