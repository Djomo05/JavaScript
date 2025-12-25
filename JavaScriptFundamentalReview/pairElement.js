/**
 * Implement a DNA Pair Generator
 *
 * @param string: string
 *
 * @return string[][]
 */

function pairElement(string) {
  let result = [];

  for(const char of string) {
    if(char === "T") {
      result.push([char, 'A']);
    } else if(char === "A") {
      result.push([char, "T"]);
    } else if(char === "C") {
      result.push([char, "G"]);
    } else if(char === "G") {
      result.push([char, "C"]);
    }
  }

  return result;
}
