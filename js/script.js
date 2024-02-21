// values
const calculator = {
    displayValue: 'O',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

//display
const updateDisplay = () =>{
    const display = document.querySelector('.screen');
    display.value = calculator.displayValue
};
updateDisplay();