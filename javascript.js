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
let numberCount = 1;
let operatorCount = 1; 

// console.log(operate(firstNum, secondNum, operator)); 

const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display"); 
const equal = document.querySelector("#equal"); 

numbers.forEach((number) => {

    number.addEventListener("click", (e) => {
        let value = number.innerHTML; 

        if (numberCount === 1) {
            firstNum = firstNum + value; 
            display.innerHTML = firstNum; 
        } else {
            secondNum = secondNum + value; 
            display.innerHTML = secondNum; 
        }
    });
}); 

operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        
        sign = operator.innerHTML; 

        if (operatorCount === 2) {

            let result = operate(parseInt(firstNum), parseInt(secondNum), sign);
            display.innerHTML = result;
            
            firstNum = `${result}`; //switches back to string to make operate work
            secondNum = ""; 
            operatorCount = 1; //resets so it will do another calculation
         };

         numberCount = 2; //switches the number count so that the next number will be stored in secondNum
         operatorCount = 2 // switches the operator count so the calculation is done next time

        // if (secondNum = 0) {
        //     display.innerHTML = "ERROR"; 
        // }

    }); 
}); 

equal.addEventListener("click", (e) => {

    let result = operate(parseInt(firstNum), parseInt(secondNum), sign);
    display.innerHTML = result;
            
    sign = ""; 
    firstNum = ""; 
    secondNum = ""; 
    operatorCount = 1; //resets so it will do another calculation
    numberCount = 1; 

}); 



// console.log(operators.add(firstNum, secondNum)); 
// console.log(operators.subtract(firstNum, secondNum));
// console.log(operators.multiply(firstNum, secondNum));
// console.log(operators.divide(firstNum, secondNum)); 


