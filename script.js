let numberButtons = document.querySelectorAll('.number');

const displayOutput = document.querySelector('#output');
const clear = document.querySelector('#clear');
let firstNum = 0;
let secondNum = 0;

const add = document.querySelector('#add');




clear.addEventListener('click', () => {
    output.textContent = 0;
    firstNum = 0;
    secondNum = 0;
});

function operate () {
   
};
//epiphany: if may na click an ANY operator, bali yung magiging container ng 
//second number is yung secondNum na.
if (firstNum === 0){
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (output.textContent === '0') {
                displayOutput.textContent = '';
            }
                displayOutput.textContent += button.textContent;
                firstNum = displayOutput.textContent;
        });
    });
} else if (firstNum > 0) {
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (output.textContent === '0') {
                displayOutput.textContent = '';
            }
                displayOutput.textContent += button.textContent;
                secondNum = displayOutput.textContent;
        });
    });
};



function addition(firstNum, secondNum) {
    return firstNum + secondNum;
};

function subtraction(firstNum, secondNum) {
    return firstNum - secondNum;
}
