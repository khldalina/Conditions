let result = 0;
const sum = `Your result is ${result}`;
const firstNumber = + prompt ('Enter your first number');
const secondNumber = + prompt ('Enter your second number');
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('incorrect number')
}
const operation =  prompt ('Enter your operation (+ - * /)');
if (operation!== '-' && operation!== '+' && operation!== '/' && operation!== '*') {
    alert('incorrect operation')
} else if (operation === '+') {
    result = firstNumber + secondNumber
    alert(sum)
}else if (operation === '-') {
    result = firstNumber - secondNumber
    alert(sum)
}else if (operation === '*') {
    result = firstNumber * secondNumber
    alert(sum)
}else if (operation === '/') {
    result = firstNumber / secondNumber
    alert(sum)
} else {
    alert('This operation is not exist');
}








