let firstValue = '';
let operandValue = '';
let secondValue = '';

function toInput(n) {
    if (operandValue) {
        if(!secondValue.includes('.')){
            secondValue += n;
        }
        write(secondValue)
    } else {
        if (!firstValue.includes(.)){
            firstValue += n;
        }
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
    } else if(operandValue === '-') {
        result = +firstValue - +secondValue;
    } else if(operandValue === '*'){
        result = +firstValue * +secondValue;
     } else if(operandValue === '/'){
        result = +firstValue / +secondValue;

     }
    setInitialValue(result);
}

function setInitialValue(value){
    firstValue = value;
    operandValue = '';
    secondValue = '';
    write(value);
}