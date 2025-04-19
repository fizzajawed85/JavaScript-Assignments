/* Chapter_06-09 MATH EXPRESSIONS */

/* 1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser: */

var a = 10;
document.write("Value of a is: " + a + "<br>");

// Pre-increment
a = ++a;  
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// Post-increment
a = a++;  
document.write("The value of a++ is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br>");

 // Pre-decrement
a = --a; 
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// Post-decrement
a = a--;  
document.write("The value of a-- is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br>");


/* 2. What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;  */

var a = 2, b = 1;

// First expression: --a - --b + ++b + b--
var result = --a - --b + ++b + b--; // 1 - 0 + 2 + 0
console.log(result); // Output: 3

// Second expression: --a
result = --a; // 1 - 1 = 0
console.log(result); // Output: 0

// Third expression: --a - --b
result = --a - --b; // 0 - 0 = 0
console.log(result); // Output: 0

// Fourth expression: --a - --b + ++b
result = --a - --b + ++b; // -1 - 1 + 1 = -1
console.log(result); // Output: -1

// Fifth expression: --a - --b + ++b + b--
result = --a - --b + ++b + b--; // -2 - 2 + 2 - 1 = -3
console.log(result); // Output: -3

// Writing the final output
document.write(`The value of a is ${a} and value of b is ${b} and result is ${result} <br>`);


// 3. Write a program that takes input a name from user & greet the user.

var userName = prompt("Please enter your name:");

if (userName) {
    alert("Hello, " + userName + "! Welcome to our website.");
} else {
    alert("Hello, Guest! Welcome to our website.");
}


/* 5. Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default.*/

var userInput = prompt("Enter a number:");

if (userInput === "") {
    userInput = 5;
} else {
    userInput = +userInput;
}

for (var i = 1; i <= 10; i++) {
    if (userInput === 5) {
        console.log("5 x " + i + " = " + 5 * i);
    } else {
        console.log(userInput + " x " + i + " = " + userInput * i + "<br>");
    }
}

/*6. Take
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table)*/

var subjectOne = "English";
var subjectTwo = "Math";
var subjectThree = "Urdu";

var maxMarks = 100;

var marksOne = 55;
var marksTwo = 80;
var marksThree = 92;

var totalMarks = maxMarks * 3;
var totalObtainedMarks = marksOne + marksTwo + marksThree;

var subjectOnePercentage = (marksOne / maxMarks) * 100;
var subjectTwoPercentage = (marksTwo / maxMarks) * 100;
var subjectThreePercentage = (marksThree / maxMarks) * 100;

var overallPercentage = (totalObtainedMarks / totalMarks) * 100;

document.write(`${subjectOne}: ${marksOne}/${maxMarks} , ${subjectOnePercentage}%<br>`);
document.write(`${subjectTwo}: ${marksTwo}/${maxMarks} , ${subjectTwoPercentage}%<br>`);
document.write(`${subjectThree}: ${marksThree}/${maxMarks} , ${subjectThreePercentage}%<br>`);

document.write(`Total: ${totalObtainedMarks}/${totalMarks} , ${overallPercentage}%`);
