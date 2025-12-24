function fearNotLetter(string) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const strIndexOfFirst = letters.indexOf(string[0]);
    const letterRange = letters.split('').splice(strIndexOfFirst, string.length).join('');

    for(let i=0; i<letterRange.length; i++){
        if(string[i] !== letterRange[i]){
            return letterRange[i];
        }
    }
}

console.log(fearNotLetter("wxz"));