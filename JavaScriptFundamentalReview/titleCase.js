/**
 * @param param1: string
 */

function titleCase(param1){
  let result = "";
  for(const char of param1.toLowerCase().split(' ')) {
    result += char.replace(char[0], char[0].toUpperCase()) + " ";
  }
  return result.trimEnd();
}
