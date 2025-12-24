let num = 10;

/**
 * @param param: number
 */
function factorialCalculator(param) {
    let result = 1;
    for(let i=1; i <= param; i++) {
        result = result * i;
    }
    console.log(resultMsg);
    return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);