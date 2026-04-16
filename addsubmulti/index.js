function getValues() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    return [a, b];
}

function add() {
    let [a, b] = getValues();
    document.getElementById("result").innerHTML =
        `Sum of ${a} and ${b} is ${a + b}`;
}

function sub() {
    let [a, b] = getValues();
    document.getElementById("result").innerHTML =
        `Difference of ${a} and ${b} is ${a - b}`;
}

function mul() {
    let [a, b] = getValues();
    document.getElementById("result").innerHTML =
        `Product of ${a} and ${b} is ${a * b}`;
}

function div() {
    let [a, b] = getValues();

    if (b === 0) {
        document.getElementById("result").innerHTML =
            "Cannot divide by zero";
    } else {
        document.getElementById("result").innerHTML =
            `Division of ${a} and ${b} is ${a / b}`;
    }
}