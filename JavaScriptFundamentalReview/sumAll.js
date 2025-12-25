/**
 * Design a Sum All Numbers Algorithm
 *
 * @param array: number[]
 *
 * @return number
 */
function sumAll(array) {
  let sum = 0;
  let lowestNum = array[0] > array[1] ? array[1] : array[0];
  let highestNum = array[0] > array[1] ? array[0] : array[1];

  for(let i=lowestNum; i<=highestNum; i++) {
    sum += i;
  }

  return sum;
}
