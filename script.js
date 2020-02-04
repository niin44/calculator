function add(a, b){
    return parseInt(a) + parseInt(b);
}
function subtract(a, b){
    return parseInt(a) - parseInt(b);
}
function multiply(a, b){
    return parseInt(a) * parseInt(b);
}
function divide(a, b){
    return parseInt(a) / parseInt(b);
}
function operate(a, b, operator){
    let returnValue = a;
    if (operator==="+"){
        for(let i = 0;i<b.length;i++){
            returnValue = add(returnValue, b[i]);
        }
        console.log(a + "+" + b + "=" + returnValue);
        return returnValue;
    }
    if (operator==="-"){
        for(let i = 0;i<b.length;i++){
            returnValue = subtract(returnValue, b[i]);
        }
        console.log(a + "-" + b + "=" + returnValue);
        return returnValue;
    }
    if (operator==="*"){
        for(let i = 0;i<b.length;i++){
            returnValue = multiply(returnValue, b[i]);
        }
        console.log(a + "*" + b + "=" + returnValue);
        return returnValue;
    }
    if (operator==="/"){
        for(let i = 0;i<b.length;i++){
            returnValue = divide(returnValue, b[i]);
        }
        console.log(a + "/" + b + "=" + returnValue);
        return returnValue;
    }
}
function updateDisplay(newValue){
    document.getElementById("input-display").value = newValue;
    displayValue = newValue;
}

let displayValue = "";
let firstValue = 0;
let secondValue = [];
let operators = [];
function addBtnToDisplay(e){
    let btnNumber = e.target.innerHTML;
    if (displayValue==="0"){
        updateDisplay("");
    }
    document.getElementById("input-display").value += btnNumber;
    displayValue = document.getElementById("input-display").value;
    document.getElementById("input-display").value = displayValue;
}

let buttons = document.querySelectorAll(".buttons");
buttons.forEach(button=>{
    button.addEventListener("click", addBtnToDisplay);
});

let clearButtton = document.querySelector("#btn-clear");
clearButtton.addEventListener("click", e =>{
   updateDisplay("");
   firstValue=0;
   secondValue = [];
   operators = [];
});
let operatorButtons = document.querySelectorAll(".button-operator");
operatorButtons.forEach(operatorButtons=>{
    operatorButtons.addEventListener("click", e =>{
        if (displayValue!=""){
            if (firstValue===0){
                firstValue = displayValue;
            } else {
                secondValue.push(displayValue);
            }
            operators.push(e.target.innerHTML);
        }
        updateDisplay("");
    });
})

document.querySelector("#btn-submit").addEventListener("click", e =>{
    secondValue.push(displayValue);
    let results = 0;
    console.log(secondValue);
    //Starts by adding first number 3 + 3 * 3 = 18 
    results = operate(0, firstValue, "+");
    results = operate(results, secondValue[0], operators[0]);
    for (let i = 1; i<operators.length; i++){
        results = operate(results, secondValue[i], operators[i]);
    }
    updateDisplay(results);
});

