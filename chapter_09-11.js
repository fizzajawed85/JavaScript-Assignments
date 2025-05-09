/* Chapter_09-11 USER INPUT & CONDITIONAL STATEMENT */

/* 1. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights” */

var city = prompt("Enter your city name:");

if (city === "Karachi") {
    alert("Welcome to the city of lights");
}
 else {
    alert("Welcome to " + city);
}

/* 2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am. */

var gender = prompt("Enter your gender (male/female):");

if (gender === "male") {
    alert("Good Morning Sir");
}
 else if (gender === "female") {
    alert("Good Morning Ma'am");
}
 else {
    alert("Invalid gender input");
}

/* 3. Write a program to take input color of road traffic signal
from the user & show the message according to this table:*/

var signalColor = prompt("Enter the traffic signal color (red/yellow/green):");

if (signalColor === "red") {
    alert("Must stop");
}
 else if (signalColor === "yellow") {
    alert("Ready to move");
}
 else if (signalColor === "green") {
    alert("Move now");
}
 else {
    alert("Invalid signal color");
}

/* 4. Write a program to take input remaining fuel in car (in
litres) from user. If the current fuel is less than 0.25litres,
show the message “Please refill the fuel in your car” */

var fuel = prompt("Enter the remaining fuel in your car (in litres):");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}
 else {
    alert("Fuel level is sufficient");
}

/* 5. Run this script, & check whether alert message would be
displayed or not. Record the outputs. */

// a.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true"); // Alert will be shown
}

// b.
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true"); // Alert will NOT be shown
}

// c.
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true"); // Not shown 
}
if (c === 13) {
  alert("condition 2 is true"); // Shown 
}
if (++c < 14) {
  alert("condition 3 is true"); // Not shown 
}
if (c === 14) {
  alert("condition 4 is true"); // Shown 
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals"); // Shown 
}

// e.
if (true) {
  alert("True"); // Shown
}
if (false) {
  alert("False"); // Not shown
}

// f.
if ("car" < "cat") {
  alert("car is smaller than cat"); // Shown 
}

/* 6. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table: */

var mark1 = +prompt("Enter marks for Subject 1");
var mark2 = +prompt("Enter marks for Subject 2");
var mark3 = +prompt("Enter marks for Subject 3");
var totalMarks = +prompt("Enter total marks");

var obtainedMarks = mark1 + mark2 + mark3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade = "";
var remarks = "";

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
}
 else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
}
 else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
}
 else {
  grade = "Fail";
  remarks = "Sorry";
}

document.write(`Total Marks: ${totalMarks} <br>`);
document.write(`Marks Obtained: ${obtainedMarks} <br>`);
document.write(`Percentage: ${percentage}% <br>`);
document.write(`Grade: ${grade} <br>`);
document.write(`Remarks: ${remarks} <br>`);

/* 7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.*/

var secretNumber = 7; 
var userGuess = +prompt("Guess the secret number (1-10)");

if (userGuess === secretNumber) {
  alert("Bingo! Correct answer");
}
 else if (userGuess + 1 === secretNumber) {
  alert("Close enough to the correct answer");
} 
 else {
  alert("Wrong guess! Try again");
}

/* 8. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3.*/

var number = +prompt("Enter a number");

if (number % 3 === 0) {
  alert("The number is divisible by 3");
} 
else {
  alert("The number is not divisible by 3");
}

/* 9. Write a program that checks whether the given input is an
even number or an odd number.*/

var number = +prompt("Enter a number");

if (number % 2 === 0) {
  alert("The number is even");
} 
else {
  alert("The number is odd");
}

/* 10. Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.” */

var temperature = +prompt("Enter the temperature");

if (temperature > 40) {
  alert("It is too hot outside.");
} 
else if (temperature > 30) {
  alert("The Weather today is Normal.");
} 
else if (temperature > 20) {
  alert("Today's Weather is cool.");
} 
else if (temperature > 10) {
  alert("OMG! Today's weather is so Cool.");
} 
else {
  alert("It's very cold today.");
}

/* 11. Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.*/

var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");
var operator = prompt("Enter operation (+, -, *, /, %)");

if (operator === "+") {
  alert("Result: " + (num1 + num2));
} 
else if (operator === "-") {
  alert("Result: " + (num1 - num2));
} 
else if (operator === "*") {
  alert("Result: " + (num1 * num2));
} 
else if (operator === "/") {
  alert("Result: " + (num1 / num2));
} 
else if (operator === "%") {
  alert("Result: " + (num1 % num2));
} 
else {
  alert("Invalid operator");
}
