let numberButtons = document.querySelectorAll('.number');

const displayOutput = document.querySelector('#output');
const clear = document.querySelector('#clear');
let calculationBox = 0;

const add = document.querySelector('#add');




clear.addEventListener('click', () => {
    output.textContent = 0;
});


numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (output.textContent === '0') {
        displayOutput.textContent = '';
        }
        displayOutput.textContent += button.textContent;
        calculationBox += displayOutput.textContent;
    });
});

add.addEventListener('click', () => {
        if (output.textContent === output.textContent) {
            output.textContent += '+';
        }
});
 





