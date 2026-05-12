let displayOutput = document.querySelector('#output');
let displayInput = document.querySelector('#input');
let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');

let firstNum = 0;
let operator = 0;
let secondNum = 0;

const clear = document.querySelector('#clear');





clear.addEventListener('click', () => {
    displayOutput.textContent = '';
    displayInput.textContent = 0;
});

function updateFirstNumberAndDisplay () {
    displayOutput.textContent += displayInput.textContent;
    firstNum = +displayOutput.textContent;
};

function updateSecondNumber () {
    secondNum = firstNum;
    secondNum = +displayInput.textContent;

};


function displayPressedNumber () {
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (displayInput.textContent === '0') {
                displayInput.textContent = ''; 
        
            } 

            displayInput.textContent += button.textContent;

            
        });
    });
}

displayPressedNumber();



function reinputInputDisplay() {
    let flagToClear = false;

    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (flagToClear === false) {

                displayInput.textContent = '';
                flagToClear = true;
                displayPressedNumber = false;

                displayInput.textContent += button.textContent;
            }
                updateSecondNumber();

        });
    });
};







operatorButtons.forEach((button) => {

    button.addEventListener('click', () => {
        if (button.textContent === '+') {
            updateFirstNumberAndDisplay();
            updateSecondNumber();
            displayOutput.textContent += '+';
            
         
                reinputInputDisplay(); 
   
           
        } else if (button.textContent === '-') {
            updateFirstNumberAndDisplay();
            displayOutput.textContent += '-';

        };

       
    });
});


function add(firstNum, secondNum) {
    
    return firstNum + secondNum;
};

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
};

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
};

function divide(firstNum, secondNum) {
    const result = firstNum / secondNum;
    return result.toFixed(3);
};


function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case '+':
            add(firstNum, secondNum);
        
        case '-':
            subtract(firstNum, secondNum);
        
        case '*':
            multiply(firstNum, secondNum);
        
        case '/':
            divide(firstNum, secondNum);
    };
};