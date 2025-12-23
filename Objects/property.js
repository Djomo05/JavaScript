/**
 *
 * In JavaScript, we can check if an object has a property with these method:
 * ===> .hasOwnProperty();
 * ===> in operator;
 * **/

const person = {
    name: "Alice",
    age: 30
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job")); // false


/**
 * Another way to check for the existence of a property in an object is to use the in operator.
 * Like hasOwnProperty(),
 * the in operator will return true if the property exists on the object. Here's how you can use it:
 *
 * **/

const landry = {
    name: "Bob",
    age: 25
};
console.log("name" in landry);  // true

/**
 * The third method involves checking if a property is undefined.
 * This approach can be useful, but it has some limitations. Here's an example:
 * **/

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

console.log(car.brand !== undefined); // true
console.log(car.color !== undefined); // false


