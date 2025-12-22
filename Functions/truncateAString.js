/**
 *
 * @param param1: string
 * @param param2: number
 */
function truncateString(param1, param2){
    if(param1.length > param2) {
        return param1.slice(0, param2) + "...";
    } else {
        return param1;
    }
}
