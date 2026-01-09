/**
 * Implement a Spinal Case Converter
 */
function spinalCase(param) {
    // Step 1: Add space before uppercase letters following lowercase letters or digits
    // This handles camelCase: "thisIsSpinalTap" → "this Is Spinal Tap"
    let result = param.replace(/([a-z\d])([A-Z])/g, '$1 $2');

    // Step 2: Replace underscores and hyphens with spaces
    // "The_Andy_Griffith_Show" → "The Andy Griffith Show"
    result = result.replace(/[_-]/g, ' ');

    // Step 3: Replace one or more spaces with a single hyphen, then lowercase
    // "This Is Spinal Tap" → "this-is-spinal-tap"
    result = result. replace(/\s+/g, '-').toLowerCase();

    return result;
}

console.log(spinalCase("thisIsSpinalTap"));                // this-is-spinal-tap
console.log(spinalCase("This Is Spinal Tap"));             // this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show"));         // the-andy-griffith-show
console.log(spinalCase("Teletubbies say Eh-oh"));          // teletubbies-say-eh-oh
console.log(spinalCase("AllThe-small Things"));            // all-the-small-things