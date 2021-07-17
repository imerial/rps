// Javascript file for the project
// Write a program that takes a user’s input
// Prints the numbers from one to the number the user entered.
//Multiples of three print Fizz instead of the number
// Multiples of five print Buzz.
//For numbers which are multiples of both three and five print FizzBuzz.

let answer = parseInt(prompt("Type a number from 1-100"));
for (let i = 0; i < answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
