const calculations = {

    "+" : function(num1, num2) {
	        return num1 + num2; 
        },

    "-" : function(num1, num2) {
	        return num1 - num2; 
        },

    "x": function(num1, num2) {
            return num1 * num2; 
        },
    "/": function(num1, num2) {
            return num1 / num2; 
        },
}

function operate(num1, num2, operator) {

    return calculations[operator](num1, num2); 

}

let firstNum = "";
let sign = "";
let secondNum = ""; 
let whichNumber = 1;
let isOperator = false; 
let result = 0; 
let equalPressed = false; 

// console.log(operate(firstNum, secondNum, operator)); 

const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display"); 
const equal = document.querySelector("#equal"); 

numbers.forEach((number) => {

    number.addEventListener("click", (e) => {
        let newValue = number.innerHTML; 

         if (equalPressed == true) {
            firstNum = newValue; 
            display.innerHTML = firstNum; 
            sign = "";
            secondNum = ""; 
            whichNumber = 1;
            isOperator = false; 
            equalPressed = false; 

        } else if (whichNumber === 1) {
            firstNum = firstNum + newValue; 
            display.innerHTML = firstNum; 

        } else {
            secondNum = secondNum + newValue; 
            display.innerHTML = secondNum; 
        }
    });
}); 

operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {


        if (isOperator === false) {

            sign = operator.innerHTML; 

            if (equalPressed == false) { //disables the reset from a misfired equal button 
                
                whichNumber= 2; //switches the number count so that the next number will be stored in secondNum
            }
            
            if (!secondNum === "") { //stops operate from running before there is a second number
                isOperator = true // switches the operator count so the calculation is done on next click
            }

        } else if (operatorCount === 2) {

            getResult(); 
            sign = operator.innerHTML; //changes to second operator, awaits 2nd number
        }
    }); 
}); 

equal.addEventListener("click", (e) => {

    if ((firstNum) &&
        (secondNum) &&
        (sign)) {       
            getResult(); 
            sign = ""; 
    }

        equalPressed = true; 
    //problem: need to set firstNum but also let 
}); 

function getResult() {

    result = operate(parseInt(firstNum), parseInt(secondNum), sign); //completes first operation
    Math.round((result * 100)/100); 
    display.innerHTML = result;
    
    firstNum = `${result}`; //switches back to string to make operate() work
    secondNum = ""; 
    isOperator = false; //resets so it will do another calculation
}


// special button event listeners

const allClear = document.querySelector("#all-clear"); 
const clear = document.querySelector("#clear"); 

allClear.addEventListener("click", (e) => {

    firstNum = "";
    sign = "";
    secondNum = ""; 
    whichNumber = 1;
    isOperator = false; 
    display.innerHTML = "0"; 

});


function backSpace(str) {

    let array = str.split(""); 
    array.pop(); 
    return array.join(""); 

}

clear.addEventListener("click", (e) => {

    if (!display.innerHTML == result) {

        if (whichNumber == 1) {
            firstNum = backSpace(firstNum);
            display.innerHTML = firstNum 
        } else {
            secondNum = backSpace(secondNum); 
            display.innerHTML = secondNum;
        }
    }

}); 

