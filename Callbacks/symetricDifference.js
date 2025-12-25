/**
 * Build a Symmetric Difference Function
 *
 * @param param1: array
 * @param param2: array
 *
 * @return array
 */
function diffArray(param1, param2) {
    let arr1 = param1.filter((ar) => !param2.includes(ar));
    let arr2 = param2.filter((ar) => !param1.includes(ar));

    return [...arr1, ...arr2];
}