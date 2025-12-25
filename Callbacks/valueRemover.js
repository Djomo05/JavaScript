/**
 * Implement a Value Remover Function
 *
 * @param numbers: number[]
 * @param ...args:number[]
 *
 * @return array
 */
function destroyer(numbers, ...args) {
    return numbers
        .filter((num) => !args.includes(num));
}