/**
 * The filter method is used to create a new array with elements that pass a specified test,
 * making it useful for selectively extracting items based on criteria.
 * **/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
