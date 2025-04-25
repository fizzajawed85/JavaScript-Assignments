// Chapter 12 (if...else and else if statements)

/* 1. Code an if statement that tests whether the value represented by a variable is greater than or equal
to the value represented by another variable. If so, display an alert. If not, display a different alert.*/

var value1 = 10; 
var value2 = 5;  

if (value1 >= value2) {
  alert("Value1 is greater than or equal to Value2!");
} else {
  alert("Value1 is less than Value2.");
}

/* 2. Write a program using if else and else if statement which take marks from user. And the program
will calculate your percentage and give you grade A/C to Your percentage. (MARKSHEET) */

var userName = prompt("Enter your name:");
var userclass = +prompt("Enter your class:");
var mathMarks = +prompt("Enter your math marks:");
var englishMarks = +prompt("Enter your English marks:");
var computerMarks = +prompt("Enter your computer marks:");
var urduMarks = +prompt("Enter your Urdu marks:");
var scienceMarks = +prompt("Enter your Science marks:");
var totalMarks = 500;


var obtainedMarks = mathMarks + englishMarks + computerMarks + urduMarks + scienceMarks;
var percentage = (obtainedMarks * 100) / totalMarks;


var grade;
if (percentage >= 90) {
  grade = "A+";
} 
else if (percentage >= 81) {
  grade = "A";
} 
else if (percentage >= 71) {
  grade = "B";
} 
else if (percentage >= 61) {
  grade = "C";
} 
else if (percentage >= 51) {
  grade = "D";
} 
else {
  grade = "F";
}


var marksheet = `
----------------------------
Name: ${userName}
Class: ${userclass}
----------------------------
Subject | Marks
Math     | ${mathMarks}
English  | ${englishMarks}
Computer | ${computerMarks}
Urdu     | ${urduMarks}
----------------------------
Total Marks: ${totalMarks}
Obtained Marks: ${obtainedMarks}
Percentage: ${percentage.toFixed(2)}%
Grade: ${grade}
----------------------------
`;

console.log(marksheet);


/* 3. This is the if statement that begins the code.
if (a === 10) {
alert("a is 10"); }
If a isn't 10, display an alert that says, The correct value of a is ____ */

var a = 5;  

if (a === 10) {
    alert("a is 10"); 
} else {
    alert("The correct value of a is " + a);
}

/* 4. Prompt the user to enter a city.
• If the city is Karachi, display an alert acknowledging it is Karachi.
• If not, check to see if it's Lahore.
• If it is, display an alert acknowledging it's Lahore.
• Otherwise, display a different alert.*/

let city = prompt("Enter a city:");

if (city === "Karachi") {
  alert("You entered Karachi. Welcome to the city of lights!");
} 
else if (city === "Lahore") {
  alert("You entered Lahore. Welcome to the city of Pakistan!");
} 
else {
  alert("City not recognized. Try entering Karachi or Lahore.");
}

// Chapter 13 (Testing sets of conditions)

/* 1. Code the first line of an if statement that tests whether both are true: a has the same value as b
and c has the same value as d. */

if (a === b && c === d) {
 alert("true");
}

/* 2. Code the first line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d. */

if (a === b || c !== d) {
 alert("true");
}

/* 3. Code the first line of an if statement that tests whether
• name is either "Hamza" or "Arsalan".
• age is Less than 60. */

if ((name === "Hamza" || name === "Arsalan") && age < 60) {
  alert("true");
}

/* 4. Declare two variables and assign them number values. If the first variable is less than the second
variable or greater than the second variable, display an alert.*/

var num1 = 10;
var num2 = 20;

if (num1 < num2 || num1 > num2) {
  alert("num1 is either less than or greater than num2.");
}

/* 5. Declare 2 variables. Assign one of them your first name and the other one your last name.
• Code 2 prompts, asking for your first and your last name.
• If your answers match the two variables, display an alert.*/

var firstName = "Fizza";
var lastName = "Jawed";

var inputFirst = prompt("Enter your first name:");
var inputLast = prompt("Enter your last name:");

if (inputFirst === firstName && inputLast === lastName) {
    alert(`Welcome, ${firstName} ${lastName}!`);
} 
  else {
    alert("The names don't match.");
}
  
// Chapter 14 (If statements nested)

/* 1. Code an if statement enclosing a nested if. If password is not empty, then check if password is not
greater than 5 , then display an alert that says "Password must be greater than 5" if greater than 5
then Alert "OK".*/

var password = "fia1200"; 

if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5"); 
  } 
  else {
    alert("OK"); 
  }
}

/* 2. Try this statement by yourself
if (a === 1) {
if (c === "Max") {
alert("OK");
}
} */

var a = 1;
var c = "Max";

if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

/* 3. Code the first line of an if statement that avoids the nesting above by testing for multiple conditions.
if (a === 1) {
if (c === "Max") {
alert("OK");
}
} */

var a = 1;
var c = "Max";

if (a === 1 && c === "Max") {
  alert("OK");
}

/* 4. Declare two variables and assign them the same number value. Test two conditions, using nested
if statements. Test whether the first variable equals the second variable and also whether it is less
than or equal to the second variable. If the test passes and it will—display an alert message.*/

var num1 = 10;
var num2 = 10;

if (num1 === num2) {  
  if (num1 <= num2) {  
    alert("Both conditions passed: num1 equals num2 and num1 is less than or equal to num2.");
  }
}

// Chapter 15 (Array I)

/* 1. Declare an empty array. */

var myArray = [];

/* 2. Code an array with 1 string element*/

var myArray = ["Hello"];

/* 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index */

var alphabet = ["h","i","j","k"]
alert(`The letter "${alphabet[2]}" is at index 2.`);

/* 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array. */

var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var lengthOfArray = alphabet.length;
console.log(lengthOfArray);  

/* 5. Declare an array with one element and Add a second element with index in array. Create an alert
whose message is the new element. */

var fruits = ["apple"]; 
fruits.splice(1, 0, "banana"); 
alert(fruits[1]); 

// Chapter 16 (Array II)

/* 1. Code an array with 1 string element.
• Add an additional element to the array using push.
• Create an alert whose message is the last element.*/

var animals = ["lion"];
animals.push("tiger");
alert(animals[animals.length - 1]);

/* 2. var Alphabet=["h","i","j","k"]
• Remove the last element from the array Alphabet.*/

var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();
console.log(Alphabet);


/* 3. var Alphabet=["h","i","j","k"]
• Add a new element, a number, to the end of an array.*/

var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(5);
console.log(Alphabet);

// Chapter 17 (Array III)

/* 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
• Remove the first element of an array.*/

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);


/* 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
• Add three number elements to the beginning of an array.*/

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift("I", "II", "III");
console.log(sizes);

/* 3. Declare an array with one element.
• Add a second element to the beginning of the array.
• Create an alert whose message is the new first element.*/

var colors = ["blue"];
colors.unshift("red");
alert(`The new color is ${colors[0]}`);


/* 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
• Insert "L" into the array between "M" and "XL".*/

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L"); 
console.log(sizes);


/* 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
• Copy the first 3 sizes of the array and put them into a new array, regSizes. */

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);
console.log(regSizes);


/* 6. var pets = ["dog", "cat", "ox", "duck", "frog"].
• Add 2 elements after "dog" and remove "cat", "ox", and "duck".*/

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "rabbit", "hamster");
console.log(pets);


/* 7. var pets = ["dog", "cat", "ox", "duck", "frog"]; Remove "cat" and "ox".*/

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2); // Start hoga index 1 se and remove 2 elements
console.log(pets);


/* 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]; 
Reduce it to "duck" and "frog" using slice.*/

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5); // Start from index 3 to index 5 (index 5 include nhi hoga slice ending point remove nhi krta)
console.log(reducedPets);
