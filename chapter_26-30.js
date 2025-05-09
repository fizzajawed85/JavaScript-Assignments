// Assignment_26-30 (MATH METHODS)

/* 1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

var number = +prompt("Enter a positive number:");
console.log("number: " + number);
console.log("round off value: " + Math.round(number));
console.log("floor value: " + Math.floor(number));
console.log("ceil value: " + Math.ceil(number));

/* 2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/

var number = +prompt("Enter a negative floating point number:");
console.log("number: " + number);
console.log("round off value: " + Math.round(number));
console.log("floor value: " + Math.floor(number));
console.log("ceil value: " + Math.ceil(number));

/* 3. Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */

var number = +prompt("Enter any number:");
var absoluteValue = Math.abs(number);
console.log("The absolute value of " + number + " is " + absoluteValue);

/* 4. Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser.:*/

var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;
console.log("Random dice value: " + dice1);
console.log("Random dice value: " + dice2);

/* 5. Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser */

var coin1 = Math.floor(Math.random() * 2) + 1;
var coin2 = Math.floor(Math.random() * 2) + 1;

console.log(coin1);
if (coin1 === 1) {
  console.log("Random coin value: Tails");
} else {
  console.log("Random coin value: Heads");
}

console.log(coin2);
if (coin2 === 1) {
  console.log("Random coin value: Tails");
} else {
  console.log("Random coin value: Heads");
}

/* 6. Write a program that shows a random number between 1
and 100 in your browser. */

var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100: " + randomNumber);

/* 7. Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms */

var userInput = prompt("Enter your weight:");
var weight = parseFloat(userInput);
console.log("The weight of user is " + weight + " kilograms");

/* 8. Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user.*/

var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = +prompt("Enter a number between 1 and 10");

if (userInput === secretNumber) {
  alert("Congratulations! You guessed the secret number.");
} else {
  alert("Try again!");
}

// Practice mcqs question

const numbers = [10,20,30,40];
for (let i=0; i<2 ; i++ ){
    let shifted = numbers.shift();
    numbers.unshift(shifted+5);
}
console.log(numbers);
