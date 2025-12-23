let lunches = [];

/***
 * @param1: array
 * @param2: string
 */
function addLunchToEnd(param1, param2) {
    param1.push(param2);
    console.log(`${param2} added to the end of the lunch menu.`);
    return param1;
}

/***
 * @param1: array
 * @param2: string
 */
function addLunchToStart(param1, param2) {
    param1.unshift(param2);
    console.log(`${param2} added to the start of the lunch menu.`);
    return param1;
}

/**
 *
 * @param: array
 */
function removeLastLunch(param) {
    if(param.length > 0) {
        let last = param.pop();
        console.log(`${last} removed from the end of the lunch menu.`);
        return param;
    }else {
        console.log("No lunches to remove.");
    }
}

/**
 * @param: array
 */
function removeFirstLunch(param){
    if(param.length > 0) {
        let first = param.shift();
        console.log(`${first} removed from the start of the lunch menu.`);
        return param;
    }else {
        console.log("No lunches to remove.");
    }
}

/***
 * param: array
 */
function getRandomLunch(param) {
    if(param.length > 0) {
        let randomNum = Math.round(Math.random() * (param.length - 1));
        console.log(`Randomly selected lunch: ${param[randomNum]}`);
    }else {
        console.log("No lunches available.");
    }
}

/**
 * param: array
 */
function showLunchMenu(param) {
    if(param.length > 0) {
        console.log(`Menu items: ${param.join(", ")}`);
    }else {
        console.log("The menu is empty.");
    }
}