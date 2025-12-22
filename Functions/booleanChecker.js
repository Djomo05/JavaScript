function booWho(param) {
    if(param === true || param === false) {
        return true;
    } else if(typeof param === "Boolean"){
        return true;
    } else {
        return false;
    }
}