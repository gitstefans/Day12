// Only change code below this line
// var countArray = [];
function rangeOfNumbers(startN, endN) {
  if (startN > endN) {
    return "The starting number will always be less than or equal to the ending number";
  }
  if (startN - endN === 0) {
    return [endN];
  } else {
    const constArray = rangeOfNumbers(startN + 1, endN);
    constArray.unshift(startN);
    return constArray;
  }
}
// Only change code above this line
console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;
