//the program writes the numbers 1 through 100
function fizzBuzz(num) {
  const display = document.querySelector(".display");
  const ul = document.querySelector("ul");
  //guard for correct input type
  if (typeof num !== "number") {
    throw new Error("FizzBuzz input must be a number");
  }
  for (i = 1; i <= num; i++) {
    const li = document.createElement("li");

    //if a number is evenly divisible by both 3 and 5 instead of writing the number write the string 'fizzbuzz'
    if (i % 15 === 0) {
      // console.log("Fizzbuzz");
      li.innerHTML = `i is ${i} FizzBuzz`;
    }
    //for each number that is evenly divisible by 3 instead of writing the number write the string 'fizz'
    else if (i % 3 === 0) {
      // console.log("Fizz");
      li.innerHTML = `i is ${i} Fizz`;
    }
    //for each number that is evenly divisible by 5 instead of writing the number write the string 'buzz'
    else if (i % 5 === 0) {
      // console.log("Buzz");
      li.innerHTML = `i is ${i} Buzz`;
    } else {
      // console.log(i);
      li.innerHTML = `i is ${i}`;
    }
    ul.appendChild(li);
  }
  display.appendChild(ul);
}
fizzBuzz(100);

function fizzBuzzTerminal(num) {
  for (i = 1; i <= num; i++) {
    let output = "";

    if (i % 3 === 0) {
      output += "Fizz";
      console.log(i, output);
    }
    if (i % 5 === 0) {
      output += "Buzz";
      console.log(i, output);
    }
    if (i % 7 === 0) {
      output += "Foo";
      console.log(i, output);
    }
    if (i % 11 === 0) {
      output += "Bar";
      console.log(i, output);
    }
    if (output === "") {
      console.log(i);
    }
  }
}
fizzBuzzTerminal(100);
