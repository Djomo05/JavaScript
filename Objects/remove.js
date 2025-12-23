/**
 * When you use delete, it removes the selected property from the object.
 * Here's an example of how to use the delete operator:
 * **/

const person = {
    name: "Alice",
    age: 30,
    job: "Engineer"
};

delete person.job;

console.log(person.job); // undefined

/**
 * Another way to remove properties is by using destructuring assignment with rest parameters.
 * This approach doesn't actually delete the property, but it creates a new object without the
 * specified properties:
 * **/

const landry = {
    name: "Bob",
    age: 25,
    job: "Designer",
    city: "New York"
};

const { job, city, ...remainingProperties } = landry;

// { name: "Bob", age: 25 }
console.log(remainingProperties);
