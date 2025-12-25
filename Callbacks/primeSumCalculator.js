/**
 * Build a Prime Number Sum Calculator
 *
 * @param num: number
 *
 * @return number
 */
function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function sumPrimes(num) {
    if (num < 2) return 0;

    let sum = 0;

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}
