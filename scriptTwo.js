let displayOutput = document.querySelector('#output');
let numberButtons = document.querySelectorAll('.number');

let firstNum = 0;
let operator = 0;
let secondNum = 0;



numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayOutput.textContent === '0') {
            displayOutput.textContent = ''; 
        }
        displayOutput.textContent += button.textContent;
        firstNum = displayOutput.textContent;

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