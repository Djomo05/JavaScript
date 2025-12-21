/**
 * The .replace() method is used to replace the first occurrence of a substring in string
 *
 * It takes two parms:
 *  ---> The first one is the substring that the user wants to replace.
 *  ---> the second one is the new string that will replace the older one.
 *
 * NB: the .replace() method  is case-sensitive
 * **/

let text = "I love JavaScript!";
console.log(text); // "I love JavaScript!"
let newText = text.replace("JavaScript", "coding");
console.log(newText);  // "I love coding!"


let sentence = "I enjoy working with JavaScript.";
console.log(sentence);  // "I enjoy working with JavaScript."
let updatedSentence = sentence.replace("javascript", "coding");
console.log(updatedSentence);  // "I enjoy working with JavaScript."


let phrase = "Hello, world! Welcome to the world of coding.";
console.log(phrase);  // "Hello, world! Welcome to the world of coding."
let updatedPhrase = phrase.replace("world", "universe");
console.log(updatedPhrase);  // "Hello, universe! Welcome to the world of coding."
