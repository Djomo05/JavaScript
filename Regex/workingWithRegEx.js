/**
 * How Can You Match and Replace All Occurrences in a String?
 * **/

// const regex = /freeCodeCamp/;
// const match = "freeCodeCamp".match(regex);
// console.log(match);
// console.log(regex.test("freeCodeCamps"));

// const regex = /freecodecamp/;
// const str = "freecodecamp is the best we love freecodecamp";
// const matched = str.match(regex);
// const replaced = str.replace(regex, "freeCodeCamp");
// console.log(matched);
// console.log(replaced);


// const regex = /freecodecamp/g;
// const str = "freecodecamp is the best we love freecodecamp";
// const matched = str.match(regex);
// const replaced = str.replace(regex, "freeCodeCamp");
// console.log(matched);
// console.log(replaced);


//const pattern = "freecodecamp";
//const str = "freecodecamp is the best we love freecodecamp";
//const matched = str.matchAll(pattern);
//const replaced = str.replaceAll(pattern, "freeCodeCamp");
//console.log(matched);
//console.log(replaced);


const str = "This is a test string";
str.replace('is', (match, offset) => {
    console.log(`Found ${match} at position ${offset}`);
    return match;
});




















