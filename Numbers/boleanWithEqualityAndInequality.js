/**
 * if 'a' is a number and 'b' a string
 *     ====> When we compare a === b, JavaScript will check if the value and the types are equal
 *     ====> When we compare a == b, JavaScript will convert 'b' to a Number ( type coercion )
 *     and compare after
 *
 * if 'a' and 'b' are both numbers
 * When we compare a === b, JavaScript compare they values, and their types.
 *
 *  === ( Strict equality ) and == ( Regular equality )
 * **/

let isOldEnoughToDrive = true;

console.log(isOldEnoughToDrive); // true


if (isOldEnoughToDrive) {
    console.log("You're old enough to drive"); // You're old enough to drive
} else {
    console.log("Sorry, you are not old enough to drive");
}


console.log(5 == "5"); // trues

console.log(5 === '5'); // false

console.log(5 != "5"); // false

console.log(5 !== "5"); // true