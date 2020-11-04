let isOdd = function (num) {
  if (num % 2 === 0) {
    return false;
  } else if (num % 2 !== 0) {
    return true;
  }
  
}

console.log("3 is odd: " + isOdd(3));
console.log("12 is odd: " + isOdd(12));
console.log("245 is odd: " + isOdd(245));
console.log("1249 is odd: " + isOdd(1249));