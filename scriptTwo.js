let topInput = document.querySelector('#output');
let bottomInput = document.querySelector('#input');
let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');
let equals = document.querySelector('#equals-button');
let undo = document.querySelector('#undo');
let decimal = document.querySelector('#decimal');

let firstNum = 0;
let operator;
let secondNum = 0;
let sum = 0;


const clear = document.querySelector('#clear');







clear.addEventListener('click', () => {
    topInput.textContent = '';
    bottomInput.textContent = 0;
    firstNum = 0;
    secondNum = 0;
    sum = 0;

});

function updateFirstNumberAndDisplay () {
    topInput.textContent = bottomInput.textContent;
    firstNum = +topInput.textContent;
};

function updateSecondNumber () {
    secondNum = +bottomInput.textContent;

};



function displayPressedNumber () {
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (bottomInput.textContent === '0') {
                bottomInput.textContent = ''; 
            } 

            bottomInput.textContent += button.textContent;
            updateSecondNumber(); 
    });
});


    window.addEventListener('keydown', (event) => {
        if (bottomInput.textContent === '0') {
                    bottomInput.textContent = ''; 
            };
        if (event.key >= '0' && event.key <= '9') {
            bottomInput.textContent += event.key;
            updateSecondNumber(); 
            
        } else if (event.key === '.') {
            decimal.click();
        };
    
    });
}

displayPressedNumber();

let currentPushedOperator;




function reinputInputDisplay() {
    let flagToClear = false;

    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (flagToClear === false) {

                bottomInput.textContent = '';
                flagToClear = true;
                bottomInput.textContent += button.textContent;
                
                updateSecondNumber();
            }
        });
    });


    window.addEventListener('keydown', (event) => {
        if (flagToClear === false) { 
            if (event.key >= '0' && event.key <= '9') {

                bottomInput.textContent = '';
                flagToClear = true;
                bottomInput.textContent += event.key;
                updateSecondNumber(); 
            }   else if (event.key === '.') {
            decimal.click();
            };   
        }
    });


 

};


function isOperatorAlreadyPressed(){
 
    operatorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            topInput.textContent = bottomInput.textContent;
            firstNum = +topInput.textContent;
            topInput.textContent += currentPushedOperator;

        });
    });

}

// Only one decimal restriction
decimal.addEventListener('click', () => {
    let bottomHadDecimal = bottomInput.textContent.toString().includes('.');
        if(bottomHadDecimal) {
            secondNum = bottomInput.textContent; 
        } else if (!bottomHadDecimal) {
                bottomInput.textContent += '.';
        };
});



undo.addEventListener('click', () => {
    let undoResult = bottomInputLength(bottomInput.textContent);

    bottomInput.textContent = undoResult;
    updateSecondNumber();

    if (bottomInput.textContent === '') {
        bottomInput.textContent = '0';
        updateSecondNumber();
    };
});


function bottomInputLength (str) {
    return str.slice(0, -1);
};  



operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (
            button.value === '+' ||
            button.value === '-' ||
            button.value === '*' ||
            button.value === '/' ) {


                currentPushedOperator = button.textContent;
                updateFirstNumberAndDisplay();
                reinputInputDisplay();
                topInput.textContent += currentPushedOperator;
                isOperatorAlreadyPressed();
        };
    });


    window.addEventListener('keydown', (event) => {
        let pressedKey = event.key;
        let pastOperator;
        if (
            pressedKey === '+' ||
            pressedKey === '-' ||
            pressedKey === '*' ||
            pressedKey === '/') {

            currentPushedOperator = pressedKey;
            pastOperator = button.textContent;
            button.textContent = pressedKey;
            button.click();
            button.textContent = pastOperator;

        };
    });
});

// Keyboard EQUALS and UNDO button triggers
window.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        equals.click();
    } else if (event.key === 'Backspace') {
        undo.click();
    };
});

equals.addEventListener('click', () => {

 if (currentPushedOperator === '-' ||
    currentPushedOperator === '/' ||
    currentPushedOperator === '+' ||
    currentPushedOperator === '*') {

        topInput.textContent = firstNum;
        topInput.textContent += currentPushedOperator;
        topInput.textContent += secondNum;
        operate(currentPushedOperator, firstNum, secondNum);
        firstNum = sum;
        topInput.textContent += '=';

    };

bottomInput.textContent = sum;

})





function add(firstNum, secondNum) {
    sum = firstNum + secondNum;
    return sum;
};

function subtract(firstNum, secondNum) {
    sum = firstNum - secondNum;
    return sum;
};

function multiply(firstNum, secondNum) {
    sum = firstNum * secondNum;
    return firstNum * secondNum;
};

function divide(firstNum, secondNum) {
    sum = firstNum / secondNum;
    return sum.toFixed(3);
};


function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case '+':
            add(firstNum, secondNum);
            return +sum; 
            break;
        case '-':
            subtract(firstNum, secondNum);
            return +sum;
            break;

        case '*':
            multiply(firstNum, secondNum);
            return +sum;
            break;

        case '/':
            divide(firstNum, secondNum);
            return +sum.toFixed(3);
            break;

    };
};