let numberButtons = document.querySelectorAll('.number');
let displayOutput = document.querySelector('#output');
let operatorButtons = document.querySelectorAll('.operator');

const clear = document.querySelector('#clear');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equals = document.querySelector('#equals-button');



clear.addEventListener('click', () => {
    displayOutput.textContent = 0;
});


//epiphany: if may na click na ANY operator, bali yung magiging container ng 
//second number is yung secondNum na.

//GET first number:
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayOutput.textContent === '0') {
            displayOutput.textContent = '';
        }
            displayOutput.textContent += button.textContent;
    });

    operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let expression = displayOutput.textContent;
        const identifier = Array.from(expression);

        if (
        identifier.includes('+') ||
        identifier.includes('-') ||
        identifier.includes('*') ||
        identifier.includes('/')) {

            
            equals.dispatchEvent(clickEvent);

        };
        
    });
});

});



//Calculate after pressing equals:

add.addEventListener('click', () => {
    displayOutput.textContent += '+';

});

subtract.addEventListener('click', () => {
    displayOutput.textContent += '-';

});

multiply.addEventListener('click', () => {
    displayOutput.textContent += '*';

});

divide.addEventListener('click', () => {
    displayOutput.textContent += '/';

});

let clickEvent = new Event('click');






equals.addEventListener('click', () => {

        let expression = displayOutput.textContent;
        const identifier = Array.from(expression);


    if (identifier.includes('+')){
        const splitted = expression.split('+');
        const result = splitted.reduce((previous, curr) => {
        // kaya may + yung previous at curr is to convert it to number. SEE unary operator
        return +previous + +curr;
    });
    displayOutput.textContent = '';
    displayOutput.textContent += result;
    } else if (identifier.includes('-')){
        const splitted = expression.split('-');
        const result = splitted.reduce((previous, curr) => {
            return +previous - +curr;
        });
        displayOutput.textContent = '';
        displayOutput.textContent += result;
    } else if (identifier.includes('*')){
        const splitted = expression.split('*');
        const result = splitted.reduce((previous, curr) => {
            return +previous * +curr;
        });
        displayOutput.textContent = '';
        displayOutput.textContent += result;
    } else if (identifier.includes('/')){
        const splitted = expression.split('/');
        const result = splitted.reduce((previous, curr) => {
            return +previous / +curr;
        });
        displayOutput.textContent = '';
        displayOutput.textContent += result.toFixed(3);

    }  
});





