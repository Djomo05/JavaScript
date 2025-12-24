/**
 * @param param: string
 */
function findLongestWordLength(param) {
    if (param.trim() === '') {
        return 0;
    }

    const words = param.trim().split(' ');
    let wordMax = "";

    for(const word of words){
        wordMax = word.length > wordMax.length ? word : wordMax;
    }

    return wordMax.length;
}


