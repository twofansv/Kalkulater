let topInput = document.querySelector('#output');
let bottomInput = document.querySelector('#input');
let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');

let firstNum = 0;
let operator = 0;
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
    topInput.textContent += bottomInput.textContent;
    firstNum = +topInput.textContent;
};

function updateSecondNumber () {
    // secondNum = firstNum;
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
}

displayPressedNumber();
// updateFirstNumberAndDisplay();

let currentPushedOperator;


function reinputInputDisplay() {
    let flagToClear = false;

    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (flagToClear === false) {

                bottomInput.textContent = '';
                flagToClear = true;


                bottomInput.textContent += button.textContent;

                // updateSecondNumber();

            }

        });
    });
};



function displayUpdateUponPressingOperator(){

      

}



function activeOperatorState () {
flagToCompute = false;

    operatorButtons.forEach((button) => {

        button.addEventListener('click', () => {
            if (button.textContent === '+') {


                currentPushedOperator = button.textContent;
                updateFirstNumberAndDisplay();
                reinputInputDisplay();
                topInput.textContent += '+';



            } else if (button.textContent === '-') {



            }
        });
    });
}


activeOperatorState();




function add(firstNum, secondNum) {
    sum = firstNum + secondNum;
    return sum;
};

function subtract(firstNum, secondNum) {
    sum = firstNum - secondNum;
    return firstNum - secondNum;
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
            return sum; 
            break;
        case '-':
            subtract(firstNum, secondNum);
            return sum;
            break;

        case '*':
            multiply(firstNum, secondNum);
            return sum;
            break;

        case '/':
            divide(firstNum, secondNum);
            return sum;
            break;

    };
};





//OPERATE LOGIC
// operatorButtons.forEach((button) => {
// THIS OPERATOR BUTTONS SHIT IS BUGGING THE FUCK OUT. NEED TO REFACTOR ASAP!
// CHECK WHITEBOARD FOR MORE INFO
// YA KNOW WHAT. REFACTOR ALL THE ASSIGNING LOGIC AND DISPLAY UPDATE SHIT. 


//     button.addEventListener('click', () => {
//         if (button.textContent === '+') {
//             updateSecondNumber();
//             displayOutput.textContent += '+';
             
         
//             reinputInputDisplay(); 

//             displayUpdateUponPressingOperator();
//                                     add(firstNum, secondNum);

//             flagToCompute = true;
           
//         } else if (button.textContent === '-') {
//             updateFirstNumberAndDisplay();
//             displayOutput.textContent += '-';

//         };
//     });
// });

