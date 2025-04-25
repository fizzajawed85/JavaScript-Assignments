// Chapter_12-13 (IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS)

/* 1. Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).*/

var character = prompt("Enter a character (string or number):");

if (character >= 48 && character <= 57 ){
    alert("This is a number");
}
else if (character >= 65 && character <= 90){
    alert("This is an upperCase letter");
}
else if (character >= 97 && character <= 122){
    alert("This is LowerCase letter");
}
else if (character === "A" ){
    alert("This is an uppercase letter. The ASCII code of 'A' is 65 ")
}
else if (character === "Z"){
    alert("This is an uppercase letter. The ASCII code of 'Z' is 90 ")
}
else if (character === "a" ){
    alert("This is an uppercase letter. The ASCII code of 'a' is 97 ")
}
else if (character === "z"){
    alert("This is an uppercase letter. The ASCII code of 'Z' is 112 ")
}
else {
    alert("Please enter a valid number or letter (48-90, 65-112) or (A , a , Z , z)")
}

/* 2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal. */

var num1 = +(prompt("Enter the first integer:"));
var num2 = +(prompt("Enter the second integer:"));

if (num1 > num2) {
  alert(`${num1} is larger than ${num2}`);
} 
else if (num2 > num1) {
  alert(`${num2} is larger than ${num1}`);
} 
else {
  alert(`Both numbers are equal`);
}

/* 3. Write a program that takes input a number from user &
state whether the number is positive, negative or zero.*/

var num = parseInt(prompt("Enter a number:"));

if (num > 0){
    alert(`${num} is a positive number`);
}
else if (num > 0){
    alert(`${num} is a negative number`);
}
else if (num === 0){
    alert("The number is zero");
}

/* 4. Write a program that takes a character (i.e. string of
length 1) and returns true if it is a vowel, false otherwise*/


var char = prompt("Enter a single character:");

if (char.length === 1 && char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
  alert("True")
} 
else {
  alert("False");
}

/* 5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise.*/

var correctPassword = "myPass123";  

var enteredPassword = prompt("Enter your password:");

if (enteredPassword === "") {
  console.log("Please enter your password");
} 
else if (enteredPassword === correctPassword) {
  console.log("Correct! The password you entered matches the original password.");
} 
else {
  console.log("Incorrect password");
}

/* 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}*/

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} 
else {
    greeting = "Good evening";
}

/* Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements
- time >= 0000 && time < 1200 print "good morning" 
- time >= 1200 && time < 1700 print "good afternoon"
- time >= 0700 && time < 2100 print "good evening"
- time >= 2100 && time < 2459 print "good night"*/

var time = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");

if (time >= 0 && time < 1200) {
    console.log("Good morning");
} 
else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon");
} 
else if (time >= 1700 && time < 2100) {
    console.log("Good evening");
} 
else if (time >= 2100 && time < 2459) {
    console.log("Good night");
} 
else {
    console.log("Invalid time input. Please enter a time between 0000 and 2459.");
}
