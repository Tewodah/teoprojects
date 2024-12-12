
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

function sub(num1, num2) {
    const subtruct = num1 - num2;
    return subtruct;
}
function multiplay(num1, num2) {
    const product = num1 * num2;
    return product;
}
function div(num1, num2) {
    const division = num1 + num2;
    return division;
}

let firstNumber = 0;
let secondNumber = 0;


const firstNumberElement = document.getElementById("first-number");

firstNumberElement.addEventListener("change", function (){
    console.log("first number type"+ typeof this.value);
    firstNumber = parseInt(this.value);
});

const secondNumberElement = document.getElementById("second-number");

secondNumberElement.addEventListener("change", function () {
  secondNumber = parseInt(this.value);
});


 const addButtonElement = document.getElementById("add-button");

 addButtonElement.addEventListener("click", function () {
    const h1Element = document.createElement("h1");
    h1Element.innerHTML  = "result: " + add(firstNumber, secondNumber);
    document.body.appendChild(h1Element);

 });

 const subButtonElement = document.getElementById("sub-button");

 subButtonElement.addEventListener("click", function () {
    const h1Element = document.createElement("h1");
    h1Element.innerHTML  = "result: " + subtruct(firstNumber, secondNumber);
    document.body.appendChild(h1Element);

 });

 const multiplyButtonElement = document.getElementById("multiply-button");

 multiplyButtonElement.addEventListener("click", function () {
    const h1Element = document.createElement("h1");
    h1Element.innerHTML  = "result: " + product(firstNumber, secondNumber);
    document.body.appendChild(h1Element);

 });

 const divisionButtonElement = document.getElementById("division-button");

 divisionButtonElement.addEventListener("click", function () {
    const h1Element = document.createElement("h1");
    h1Element.innerHTML  = "result: " + division(firstNumber, secondNumber);
    document.body.appendChild(h1Element);

 });