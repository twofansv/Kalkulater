// START 
// Set a const for a two number -> firstNum and secondNum
// Set a const for calculation
// User presses a number button and display in output then put it in firstNum
// User presses an operator for example ADDITION then awaits the second number
// IF both firstNum and secondNum have been assigned 









let numberButtons = document.querySelectorAll('.number');

const output = document.querySelector('#output');
const numberBox = 0;

const add = document.querySelector('#add');
const clear = document.querySelector('#clear');




clear.addEventListener('click', () => {
    output.textContent = 0;
});


// const numsArr = Array.from(nums);

// const out = numsArr.map((item) => {
//     return item.textContent;
// });

//Epiphany: IF button is not equals to the .textContent -> continue on BUT if it matches then show it to .output
numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            output.textContent += button.textContent;
        })

});








    // const numArr = Array.from(nums.textContent).join('').split('\n').join('').split(',').join('');
   
