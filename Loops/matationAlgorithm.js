function mutation (param){
    let isMutation = false;

    if(param.length > 1) {
        for(const char of param[1]) {
            if(param[0].toLowerCase().includes(char.toLowerCase())) {
                isMutation = true;
                continue;
            }
            isMutation = false;
            break;
        }
    }
    return isMutation;
}

console.log(mutation(["hello", "hello"]));
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["Mary", "Army"]));