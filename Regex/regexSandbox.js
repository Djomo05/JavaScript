// -------------------------
// 1 Access DOM elements
// -------------------------
const regexPattern = document.getElementById('pattern');       // Regex input
const stringToTest = document.getElementById('test-string');   // Editable div where user types text
const testButton = document.getElementById('test-btn');        // Button to run regex
const testResult = document.getElementById('result');          // Div to show matches or "no match"
const caseInsensitiveFlag = document.getElementById('i');      // Case-insensitive checkbox
const globalFlag = document.getElementById('g');               // Global checkbox

// -------------------------
// 2 Function to get flags
// -------------------------
function getFlags() {
    let flags = '';
    if (caseInsensitiveFlag.checked) flags += 'i';
    if (globalFlag.checked) flags += 'g';
    return flags;
}

// -------------------------
// 3 Button click event
// -------------------------
testButton.addEventListener('click', function() {
    const flagString = getFlags();
    const regex = new RegExp(regexPattern.value, flagString);
    const text = stringToTest.textContent;

    // -------------------------
    // 4 Check for matches
    // -------------------------
    if (regex.test(text)) {
        let matchesArray = [];

        // Collect all matches
        if (flagString.includes('g')) {
            // Global: get all matches using matchAll
            const regexForMatching = new RegExp(regexPattern.value, flagString);
            const matches = text.matchAll(regexForMatching);
            for (let m of matches) {
                matchesArray.push(m[0]);
            }
        } else {
            // Non-global: get first match only
            const regexForMatching = new RegExp(regexPattern.value, flagString);
            const match = text.match(regexForMatching);
            matchesArray.push(match[0]);
        }

        // -------------------------
        // 5 Highlight matches in the div
        // -------------------------
        // Use replace with the REGEX object (not string) to respect flags
        const regexForReplace = new RegExp(regexPattern.value, flagString);
        stringToTest.innerHTML = text.replace(regexForReplace, function(match) {
            return `<span class="highlight">${match}</span>`;
        });

        // -------------------------
        // 6 Show matched text in #result
        // -------------------------
        testResult.textContent = matchesArray.join(', ');
    } else {
        // -------------------------
        // 7 If no match found
        // -------------------------
        stringToTest.innerHTML = text;
        testResult.textContent = 'no match';
    }
});