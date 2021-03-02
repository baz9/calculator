const display = document.getElementById("display-numbers");
const numpad = document.querySelectorAll(".numpad");
const operatorDiv = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const ac = document.querySelector(".ac");
const percent = document.querySelector(".percent");

let num1 = null;
let num2 = null;
let num3 = null;
let operand;
let currentVal = "";

window.addEventListener("keydown", (e) => {
    const btn = document.querySelector(`.buttons[data-key="${e.keyCode}"]`);
    let numpad = btn.dataset.num;
    enterNumbers(numpad);
})

numpad.forEach((numval) => {
    numval.addEventListener("click", (e) => {
        let numButton = e.target.dataset.num;
        enterNumbers(numButton);
    })
})

function enterNumbers(e) {
    if (e === "." && currentVal.includes(".")) {
        return false;
    } else {
        currentVal += e;
        num2 = parseFloat(currentVal);
        screenOutput(currentVal);
    }
}

operatorDiv.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        if (!operand) {
            currentVal = "";
            num1 = num2;
            operand = e.target.dataset.num;
        } else {
            currentVal = "";
            num1 = operate(operand, num1, num2);
            screenOutputNum(num1);
            operand = e.target.dataset.num;
        }
    })
})

equals.addEventListener("click", () => {
    if (!num1){
        screenOutputNum(num2);
    } else {
        num2 = operate(operand, num1, num2)
        screenOutputNum(num2);
        operand = null;
    }
})

ac.addEventListener("click", () => {
    display.innerHTML = 0;
    num1 = null;
    num2 = null;
    operand = null;
    displayValue = null;
    currentVal = "";
})

function screenOutput(value) {
    if(value.length > 17) {
        display.innerHTML = value.substring(0, 17);
    } else {
        display.innerHTML = value;
    }
}

function screenOutputNum(number) {
    if (number.toString().length > 17) {
        display.innerHTML = number.toExponential(11);
    } else {
        display.innerHTML = number;
    }
}

function operate(op, num1, num2) {
    if (op === "add") {
        return num1 + num2;
    } else if (op === "subtract") {
        return num1 - num2;
    } else if (op === "multiply") {
        return num1 * num2;
    } else if (op === "divide") {
        if (num2 === 0) {
        return "Can't do that";
        }
        else {
            return (num1 / num2);
        }
    } else {
        return num2;
    }
}
