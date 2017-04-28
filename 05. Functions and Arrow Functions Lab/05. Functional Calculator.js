function calculator(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    switch (operator){
        case '+': return num1 + num2;break;
        case '-': return num1 - num2;break;
        case '*': return num1 * num2;break;
        case '/': return num1 / num2;break;
        default:break;
    }
}

console.log(calculator(['2','4','+']));