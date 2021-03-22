// Only change code below this line
function sumFibonacci(num) {
  if (num <= 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  var sum = 0;

  function fib(counter) {
    if (counter === 2) {
      return [1, 1];
    } else {
      const countArray = fib(counter - 1);
      countArray.push(countArray[countArray.length - 2] + countArray[countArray.length - 1]);
      return countArray;
    }
  }

  var fibArray = fib(num);
  
  for (var i = 0; fibArray[i] <= num; i++) {
    if (fibArray[i] % 2 !== 0) {
      sum += fibArray[i];
    }
  }
  return sum;
}
// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10)); // Change this line
console.log(sumFibonacci(20)); // Change this line
console.log(sumFibonacci(4)); // Change this line
console.log(sumFibonacci(-5)); // Change this line

module.exports = sumFibonacci;