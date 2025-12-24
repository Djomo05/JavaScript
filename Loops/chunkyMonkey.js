/**
 * @param array: array
 *
 * Setps:
 *
 */

function chunkArrayInGroups(numbers, number) {
    let results = [];
    let copyNumbers = [...numbers];

    for(let i=0; i <= numbers.length; i+=number) {
        let newSlice = copyNumbers.splice(0,number);
        if(newSlice.length > 0){
            results.push(newSlice);
        }
    }
    return results;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));