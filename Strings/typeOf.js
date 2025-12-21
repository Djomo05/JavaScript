/**
 * The typeof operator is responsible to check the data type of a variable
 *
 * It's important to used it because it helps a developer to understand what kind of
 * data type he's working with.
 *
 * the typeof null == Object ===> The reason for this behavior is rooted in
 * the way JavaScript was originally designed.
 *
 * **/

console.log(typeof null) // Object

let num = 56;
console.log(typeof num, typeof null);

let person = {
    name: "Landry",
    sexe: "Male",
    age: 22
};

console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));