/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let currentButton = '';
let operator = '';


/*------------------------ Cached Element References ------------------------*/

const allButtons = document.querySelectorAll('.button');
// console.dir(allButtons);

const display = document.querySelector('.display');
// console.dir(diyplay);

/*----------------------------- Event Listeners -----------------------------*/

allButtons.forEach((allButton) => {
    allButton.addEventListener('click', allButtonsClick);
})

/*-------------------------------- Functions --------------------------------*/

function allButtonsClick(event) {
  // console.log('you clicked me!')
  // const button elemant
  const buttonElement = event.target; 
  // const button text
  const buttonText = event.target.innerText;
  console.log(buttonText);
  // console.log(buttonElement);
  // currentButton += button;
  // display.textContent = currentButton;
  
  // Check '=' first
  if(buttonText === '=') {
    const result = eval(currentButton);
    display.innerText = result;
    currentButton = result; 
    // When solve 7+5 = 12 display gonna show 12 and then if solve -2 display gonna show 12-2 
    // --> if not have currentButton = result; it's gonna show 7+5-2
    // Line 42 for change currentButton to result
  } else if(buttonText === 'C') {
    // For check clear button
    currentButton = ' ';
    display.innerText = ' ';
  } else if(buttonElement.classList.contains('operator')){
    // For check operator
    currentButton += buttonText;
    display.innerText = currentButton;
  } else {
    // For check number
    currentButton += buttonText;
    display.innerText = currentButton;
  }
}



