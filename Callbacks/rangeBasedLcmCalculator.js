function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

function smallestCommons(arr) {
    // Sort the array so order doesn’t matter
    const [min, max] = arr.sort((a, b) => a - b);

    let multiple = min;

    // Apply LCM across the entire range
    for (let i = min + 1; i <= max; i++) {
        multiple = lcm(multiple, i);
    }

    return multiple;
}
