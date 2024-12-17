
//FIZZ BUZZ TO 100 ASSIGHMENT
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

//CLASSWORK ON ADDING TWO NUMBERS AND PUT THEM IN A VARIABLE
function addTwo(a, b) {
  return a + b;
}
var addition = addTwo(3, 5);
console.log(addition);