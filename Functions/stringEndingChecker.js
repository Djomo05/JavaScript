/**
 * @param param1: string
 * @param param2: string
 */
function confirmEnding(param1, param2){
    if (param1.length > param2.length){
        if(param1.slice(-param2.length) === param2){
            return true;
        }
    }
    return false;
}