function printResult(message) {
    document.getElementById("result").innerHTML = message;
}

function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        printResult("Please enter both numbers!");
        return;
    }

    let result;
    switch(operation) {
        case '+':
            result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
            break;
        case '-':
            result = `The difference between ${num1} and ${num2} is ${num1 - num2}.`;
            break;
        case '*':
            result = `The product of ${num1} and ${num2} is ${num1 * num2}.`;
            break;
        case '/':
            result = num2 !== 0 
                ? `The quotient of ${num1} and ${num2} is ${num1 / num2}.`
                : "Cannot divide by zero!";
            break;
        case '%':
            result = num2 !== 0 
                ? `The remainder of ${num1} divided by ${num2} is ${num1 % num2}.`
                : "Cannot find remainder with zero!";
            break;
        default:
            result = "Invalid operation.";
    }

    printResult(result); 
}
