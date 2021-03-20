// Only change code below this line
function sumFibonacci(num) {
  // all odd numbers <= num
  if (num < 0) {
    return 0;
  }
  var fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];
  var sum = 0;
  for (var i = 0; i < fibonacci.length; i++) {
    if (fibonacci[i] % 2 !== 0) {
      sum += fibonacci[i];
      if (sum >= num) {
        break;
      }
    }
  }
  return sum;
}
// Only change code above this line
//console.log(sumFibonacci(num));
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
