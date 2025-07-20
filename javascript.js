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

         if (equalPressed == true) { //need to make this more intuitive

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

            decimalPressed = false; 
            secondNum = secondNum + newValue; 
            display.innerHTML = secondNum; 
        }
    });
}); 

operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {

        if (isOperator === false) { 

            sign = operator.innerHTML; 

            if (equalPressed == false) { //disables reset if equal button is pressed at the wrong time 
                
                whichNumber= 2; //switches the number count so that the next number will be stored in secondNum
            }
            
            if (!secondNum === "") { //stops operate from running before there is a second number
                isOperator = true // switches the operator count so the calculation is done on next click
            }

        } else {

            getResult(); 
            sign = operator.innerHTML; //changes to second operator, awaits 2nd number
        }

        decimalPressed = true; 
         
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
}); 

function getResult() {

     if (sign == "/" && secondNum == "0") {
        
        display.innerHTML = "NOPE!";
        clearAll(); 

    } else {

        result = operate(parseFloat(firstNum), parseFloat(secondNum), sign); //completes first operation
        result = Math.round((result + Number.EPSILON) * 100) / 100; 
        display.innerHTML = result;
        
        firstNum = `${result}`; //switches back to string to make operate() work
        secondNum = ""; 
        isOperator = false; //resets so it will do another calculation
        
    }
}


// special button event listeners

const allClear = document.querySelector("#all-clear"); 
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");  
let decimalPressed = false; 

allClear.addEventListener("click", (e) => {

    clearAll(); 
    display.innerHTML = "0"; 

});

function clearAll() {
    
    firstNum = "";
    sign = "";
    secondNum = ""; 
    whichNumber = 1;
    isOperator = false; 
    decimalPressed = false; 
    equalPressed = false; 
}


function backSpace(str) {

    let array = str.split(""); 
    array.pop(); 

    if (array[array.length - 1] == ".") {

        array.pop(); 
    }

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

decimal.addEventListener("click", (e) => {

    if (!decimalPressed) {

        if (whichNumber == 1) {
            
            firstNum = firstNum + "."; 
            display.innerHTML = firstNum; 
        } else {

            secondNum = secondNum + "."
            display.innerHTML = secondNum; 
        }

    } 

    decimalPressed = true; 

}); 

