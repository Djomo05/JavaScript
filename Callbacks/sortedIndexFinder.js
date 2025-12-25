/**
 * Implement a Sorted Index Finder
 *
 * @param numbers: number[]
 * @param num: number
 *
 * @return number
 */
function getIndexToIns(numbers, num) {
    const sorted = numbers.sort((a, b) => a - b);

    const index = sorted.findIndex(el => num <= el);

    return index === -1 ? sorted.length : index;
}

