let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('#button-operators')

let displayOutput = document.querySelector('#output');
const clear = document.querySelector('#clear');
let firstNum = 0;
let secondNum = 0;

const add = document.querySelector('#add');
const equals = document.querySelector('#equals-button');



clear.addEventListener('click', () => {
    output.textContent = 0;
    firstNum = 0;
    secondNum = 0;
});


//epiphany: if may na click na ANY operator, bali yung magiging container ng 
//second number is yung secondNum na.

//GET firstNum:
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (output.textContent === '0') {
            displayOutput.textContent = '';
        }
            displayOutput.textContent += button.textContent;
            firstNum = displayOutput.textContent;
    });
});

//GET operator:

add.addEventListener('click', () => {
    displayOutput.textContent += '+';

    equals.addEventListener('click', () => {
        let expression = displayOutput.textContent;

        const splitted = expression.split('+');

        const result = splitted.reduce((previous, curr) => {
            // kaya may + yung previous at curr is to convert it to number. 
            return +previous + +curr;
        });
        displayOutput.textContent = '';
        displayOutput.textContent += result;
    });
    
});







function addition(firstNum, secondNum) {
    return firstNum + secondNum;
};

function subtraction(firstNum, secondNum) {
    return firstNum - secondNum;
}
