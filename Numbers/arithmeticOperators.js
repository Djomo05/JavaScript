/**
 * In JavaScript, we have different arithmetic operators like addition(+),substraction(-),
 * multiplication(*),division(/),exponentiation(**),remainder(%).
 *
 * **/


/**
 *
 * The addition operator is a plus sign (+). The addition operator allows you to
 * find the total of two or more numbers. In addition operations, the order of
 * the numbers doesn't matter:
 *
 * **/
const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 + num2;
const result2 = num2 + num1;
const result3 = num2 + num1 + num3;

console.log(result1); // 15
console.log(result2); // 15
console.log(result3); // 30

/**
 * The subtraction operator is a minus sign (-). It allows you to find the difference
 * between two numbers. Use the minus sign when you want to subtract a number from another
 * number, usually a smaller one from a bigger one:
 *
 * **/
let difference = 10 - 5;
console.log(difference); // 5


// If a smaller number comes first, you'll get a negative result:
difference = 5 - 10;
console.log(difference); // -5

// You can also assign the numbers to variables and do the subtraction with the variable names:
const num11 = 10;
const num22 = 5;
const result = num11 - num22;

console.log(result); // 5

/**
 * In JavaScript, the multiplication operator is represented by an asterisk (*)
 * and is used to find the product of two or more numbers. The order of the numbers you're
 * multiplying does not matter:
 *
 * **/
const num15 = 10;
const num25 = 5;
const num35 = 15;

const result15 = num15 * num25;
const result25 = num25 * num15;
const result35 = num25 * num15 * num35;

console.log(result15); // 50
console.log(result25); // 50
console.log(result35); // 750


/**
 * In JavaScript, the division operator is a slash (/), which differs from the
 * division symbol used in traditional math (÷). You perform division operations with the
 * division operator. The order of the numbers you're dividing matters in this case:
 *
 * **/
const num16 = 10;
const num26 = 5;
const num36 = 15;

const result16 = num16 / num26;
const result26 = num26 / num16;
const result36 = num2 / num1 / num36;

console.log(result16); // 2
console.log(result26); // 0.5
console.log(result36); // 0.03333333333333333

// It's important to note that if you try to divide by zero, JavaScript will return Infinity:
const resultI = 10 / 0;

console.log(resultI); // Infinity
