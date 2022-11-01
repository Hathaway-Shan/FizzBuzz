//the program writes the numbers 1 through 100
function fizzBuzz(num) {
  for (i = 1; i <= num; i++) {
    // console.log("i is: ", i); //prints 'i is: 1-100
    //if a number is evenly divisible by both 3 and 5 instead of writing the number write the string 'fizzbuzz'
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    }
    //for each number that is evenly divisible by 3 instead of writing the number write the string 'fizz'
    else if (i % 3 === 0) {
      console.log("fizz");
    }
    //for each number that is evenly divisible by 5 instead of writing the number write the string 'buzz'
    else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(100);

// function fizzBuzzSwitch(num) {
//   for (i = 1; i <= num; i++) {
//     switch (i) {
//       case i % 15 === 0:
//         console.log(fizzbuzz);
//     }
//   }
// }

// fizzBuzzSwitch(45);
