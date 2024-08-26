let calculator = {
    displayNumber: 0,
    operator: null,
    firstNumber: null,
    waitingForSecNum: false
}

function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clear() {
    calculator.displayNumber = 0;
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecNum = false;
}

function inverseNumber() {
    if (calculator.displayNumber === 0) {
        return;
    }

    calculator.displayNumber = calculator.displayNumber * -1;
}

function performCalc() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert('Anda belum menetapkan operator')
        return;
    }

    let result = 0
    if (calculator.operator === '+') {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber)
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    }

    const history = {
        firstNumber: calculator.firstNumber,
        secondNumber: calculator.displayNumber,
        operator: calculator.operator,
        result: result
    }

    putHistory(history);
    calculator.displayNumber = result;
    renderHistory();
}

function handleOperation(operator) {
    if (!calculator.waitingForSecNum) {
        calculator.operator = operator;
        calculator.waitingForSecNum = true;
        calculator.firstNumber = calculator.displayNumber

        calculator.displayNumber = 0
    } else {
        alert('operator sudah ditetapkan')
    }
}

function inputDigit(digit) {
    calculator.displayNumber === 0 ? calculator.displayNumber = digit : calculator.displayNumber += digit
}

const buttons = document.querySelectorAll('.button');
for (let button of buttons) {
    button.addEventListener('click', (evt) => {
        const target = evt.target;

        if (target.classList.contains('clear')) {
            clear();
            updateDisplay();
            return;
        } else if (target.classList.contains('neg')) {
            inverseNumber();
            updateDisplay();
            return;
        } else if (target.classList.contains('equals')) {
            performCalc();
            updateDisplay();
            return;
        } else if (target.classList.contains('operator')) {
            handleOperation(target.innerText);
            return
        } else {
            inputDigit(target.innerText);
            updateDisplay();
        }
    })
}