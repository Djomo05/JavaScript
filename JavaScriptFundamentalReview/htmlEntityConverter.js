/**
 * Implement an HTML Entity Converter
 *
 * @param param: string
 *
 * @return string
 */
function convertHTML(param) {
  let convertString = "";

  for(const char of param) {
    if(char === "&") {
      convertString += "&amp;";
    }else if(char === "<") {
      convertString += "&lt;";
    }else if(char === ">") {
      convertString += "&gt;";
    }else if(char === "\"") {
      convertString += "&quot;";
    }else if(char === "'") {
      convertString += "&apos;";
    }else {
      convertString += char;
    }
  }

  return convertString;
}
