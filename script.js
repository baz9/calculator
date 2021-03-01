const display = document.getElementById("display-numbers");
const numpad = document.querySelectorAll(".numpad");
const operatorDiv = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");


let num1 = null;
let num2 = null
let operand = null;
let displayValue = null;

numpad.forEach((numval) => {
    numval.addEventListener("click", (e) => {
        display.innerHTML = e.target.dataset.key;
        num2 = parseInt(e.target.dataset.key);
    })
})

operatorDiv.forEach((operand) => {
    operand.addEventListener("click", (e) => {
        num1 = num2;
        operand = e.target.dataset.key;
        console.dir(e.target.dataset.key);
    })
})

equals.addEventListener("click", () => {
    display.innerHTML = operate(operand, num1, num2);
})

function operate(op, num1, num2) {
    if (op === "add") {
        return num1 + num2;
    } else if (op === "subtract") {
        return num1 - num2;
    } else if (op === "multiply") {
        return num1 * num2;
    } else if (op === "divide") {
        return (num1 / num2);
    } else {
        console.log(op, num1, num2)
        return "Invalid";
    }
}