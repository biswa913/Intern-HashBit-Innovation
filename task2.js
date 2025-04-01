//Question 1
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}


//Question 2
function calculate(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Cannot divide by zero';
        default: return 'Invalid operator';
    }
}
console.log("Answer is :",calculate(3,5,'*'));


//Question 3
function findTax(salary) {
    switch (true) {
        case salary > 1500000: return salary * 0.30;
        case salary > 1000000: return salary * 0.20;
        case salary > 500000: return salary * 0.10;
        default: return 0;
    }
}
console.log("Answer is :",findTax(40000));

//Question 4
function sumOfProducts(n1, n2) {
    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    let sum = 0;

    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        let d1 = parseInt(str1[i] || 0);
        let d2 = parseInt(str2[i] || 0);
        sum += d1 * d2;
    }

    return sum;
}
console.log("Answer is :",sumOfProducts(6,8));