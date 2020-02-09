function add(a, b){
    return parseFloat(a) + parseFloat(b);
}
function subtract(a, b){
    return parseFloat(a) - parseFloat(b);
}
function multiply(a, b){
    return parseFloat(a) * parseFloat(b);
}
function divide(a, b){
    return parseFloat(a) / parseFloat(b);
}


function operate(a, b, operator){
    let returnValue = parseFloat(a);
    if (operator==="+"){
        returnValue = add(returnValue, b);
        console.log(a + "+" + b + "=" + returnValue);
        return returnValue;
    }
    if (operator==="-"){
        returnValue = subtract(returnValue, b);
        console.log(a + "-" + b + "=" + returnValue);
        return returnValue;
    }
    if (operator==="*"){
        returnValue = multiply(returnValue, b);
        console.log(a + "*" + b + "=" + returnValue);
        return returnValue;
    }
    if (operator==="/"){
        if (parseFloat(b)===0){
             return "Zero division";
        }else{
            returnValue = divide(returnValue, b);
        }
        console.log(a + "/" + b + "=" + returnValue);
        return returnValue;
    }
}


function updateDisplay(newValue){
    document.getElementById("input-display").value = newValue;
    displayValue = newValue;
    if ((newValue.toString()).search('.')===-1){
        decimal=false;
    }
}

let displayValue = "";
let firstValue = 0;
let secondValue = [];
let operators = [];
let decimal = false;


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

//Clear button
let clearButtton = document.querySelector("#btn-clear");
clearButtton.addEventListener("click", e =>{
   updateDisplay("");
   firstValue=0;
   secondValue = [];
   operators = [];
   decimal = false;
});

//Operator buttons
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

//Submit button
document.querySelector("#btn-submit").addEventListener("click", e =>{
    if (firstValue===0){
        firstValue=displayValue;
    } else{
    secondValue.push(displayValue);
    }
    let results = 0;
    
    //Starts by adding first number
    results = operate(0, firstValue, "+");
    if (operators.length>0){
        for (let i = 0; i<operators.length; i++){
            results = operate(results, secondValue[i], operators[i]);
        }
    }
    let isDecimal = results.toString().split(".").length;
    if (isDecimal > 3){
        results = results.toFixed(2);
    }
    updateDisplay(results);
});
//comma button
document.querySelector("#btn-dot").addEventListener("click", e => {
    if (!displayValue.includes(".")){
    updateDisplay(displayValue + ".");
    }
});

