let operator = ""
let firstNum = ""
let secondNum = ""

const display = document.querySelector(".display")

function refreshDisplay() {
    display.value = `${firstNum} ${operator} ${secondNum}`
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
    if (b === "0") {
        alert("DOH! CANT DIVIDE BY ZERO")
        return 0
    }
    return +a / +b
}

function operate(op, num1, num2) {
    if (op != "" && num1 != "" && num2 != "") {
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

const decimalButton = document.querySelector("#decimal")

decimalButton.addEventListener("click", () => {
    if (operator === "") {
        if (firstNum.indexOf(".") === -1) {
            if (firstNum === "") {
                firstNum = "0."
            } else {
                firstNum += "."
            }
        }
    } else {
        if (secondNum.indexOf(".") === -1) {
            if (secondNum === "") {
                secondNum = "0."
            } else {
                secondNum += "."
            }
        }
    }
    refreshDisplay()
})

const deleteButton = document.querySelector("#delete")

deleteButton.addEventListener("click", () => {

    if (firstNum != "" && operator === "" && secondNum === "") {
        firstNum = firstNum.slice(0, firstNum.length - 1)
    } else if (firstNum != "" && operator != "" && secondNum === "") {
        operator = ""
    } else if (firstNum != "" && operator != "" && secondNum != "") {
        secondNum = secondNum.slice(0, secondNum.length - 1)
    }
    refreshDisplay()
})

display.addEventListener("input", parseDisplay)

function isAcceptableInput(string) {
    const acceptableValues = "0123456789+-*/. "
    let unacceptableInputs = string
        .split('')
        .filter((character) => !acceptableValues.includes(character))
    return unacceptableInputs.length === 0
}

function parseDisplay() {
    let string = display.value.replaceAll(" ", "")
    if (isAcceptableInput(string)) {
        const operators = "+-*/"
        let parsedOp = string
            .split('')
            .filter((character) => operators.includes(character))
        operator = parsedOp.length === 1 ? parsedOp[0] : ""
        firstNum = string.slice(0, parsedOp.length === 1 ? string.indexOf(operator) : string.length)
        let num2 = string.slice(parsedOp.length === 1 ? string.indexOf(operator) + 1 : string.length + 1, string.length + 1)
        if (num2 != operator) {
            secondNum = num2
        }
    }
}

display.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        operate(operator, firstNum, secondNum)
    }
})