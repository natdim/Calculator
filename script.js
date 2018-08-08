let firstValue = '';
let operandValue = '';
let secondValue = '';

function toInput(n) {
    console.log(`Works!' ${n}`);
    if (operandValue) {
        secondValue += n;
        write(secondValue)
    } else {
        firstValue += n;
        write(firstValue);
    }

}

function write(n) {
    document.getElementById('display').value = n;
}

function operand(operand) {
    console.log('operand ${operand}');
    write('');
    operandValue = operand;
}

function getResult() {
    let result = 0;

    if(operandValue === '+') {
        result = +firstValue + +secondValue;
    }
    if(operandValue === '-') {
        result = +firstValue - +secondValue;
    }
     if(operandValue === '*'){
        result = +firstValue * +secondValue;
     }
     if(operandValue === '/'){
        result = +firstValue / +secondValue;

     }
    write(result);
    setInitialValue(result);
}

function setInitialValue(firstValueByDefault = ''){
    firstValue = firstValueByDefault;
    operandValue = '';
    secondValue = '';
}