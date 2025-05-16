// Assignment_35-38 (FUNCTION)

/* 1. Write a function that displays current date & time in your
browser. */

function currentDateTime() {
  let currentDate = new Date();
  console.log("Current Date & Time:", currentDate);
}

currentDateTime(); 

/* 2. Write a function that takes first & last name and then it
greets the user using his full name.*/

function greetUser(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;
  console.log(`Hello, ${fullName}! Welcome.`);
}

greetUser("Fizza", "Jawed");

/* 3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers. */

function sum() {
    let num1 = +prompt("Enter first number:");
    let num2 = +prompt("Enter second number:");
    let addNumbers = num1 + num2;
    console.log(`Sum of two numbers is: ${addNumbers}`);
}

sum();

/* 4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser. */

function calculator() {
    let num1 = +prompt("Enter first number:");
    let num2 = +prompt("Enter second number:");
    let operators = prompt("Enter operator (+, -, *, /):");
    let result;

    if (operators === "+") {
        result = num1 + num2 ;
    } 
    else if (operators === "-") {
        result = num1 - num2 ;
    } 
    else if (operators === "*") {
        result = num1 * num2 ;
    }
    else if (operators === "/") {
        result = num1 / num2 ;
    } 
    else {
        result = "Invalid operator!";
    }

    console.log(`Result: ${result}`);
    
}

calculator();

/* 5. Write a function that squares its argument.*/

function square(num) {
  let result = num * num;
  console.log(`Square of ${num} is: ${result}`);
  return result;
}

square(5);  

/* 6. Write a function that computes factorial of a number.*/

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  console.log(`Factorial of ${num} is: ${result}`);
  return result;
}

factorial(5);  

/* 7. Write a function that take start and end number as inputs
& display counting in your browser. */

function counting() {
  let start = +prompt("Enter start number:");
  let end = +prompt("Enter end number:");
  if (start > end) {
    console.log("Error: Start number should be less than or equal to end number.");
    return;
  }
  console.log(`Counting from ${start} to ${end}:`);
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

counting();

/* 8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()*/

function calculateHypotenuse() {
  let base = +prompt("Enter base of the triangle:");
  let perpendicular = +prompt("Enter perpendicular of the triangle:");

  function calculateSquare(num) {
    return num * num;
  }

  let baseSquare = calculateSquare(base);
  let perpendicularSquare = calculateSquare(perpendicular);

  let hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

  console.log(`Base: ${base}`);
  console.log(`Perpendicular: ${perpendicular}`);
  console.log(`Hypotenuse: ${hypotenuse.toFixed(2)}`);
}

calculateHypotenuse();

/* 9. Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:

i. Arguments as value
ii. Arguments as variables */

// i. Arguments as value

function calculateArea(width, height) {
  let area = width * height;
  console.log(`Area of rectangle is: ${area}`);
}

calculateArea(6, 4);  

// ii. Arguments as variables

function calculateArea(width, height) {
  let area = width * height;
  console.log(`Area of rectangle is: ${area}`);
}

let rectWidth = 8;
let rectHeight = 5;

calculateArea(rectWidth, rectHeight);

/* 10. Write a JavaScript function that checks whether a passed
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as
forward, e.g., madam. */

function isPalindrome(str) {
  let original = str.toLowerCase(); 
  let reversed = original.split('').reverse().join(''); 

  if (original === reversed) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}

isPalindrome("madam"); // palindrome
isPalindrome("hello"); // not palindrome

/* 11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox' */

function capitalizeWords(str) {
  let words = str.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized = word[0].toUpperCase() + word.slice(1);
    result += capitalized + " ";
  }

  console.log(result.trim());
}

/* 12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development' */

function findWord(str) {
  let words = str.split(" ");  
  let longestWord = "";       

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];  
    }
  }

  console.log(longestWord);  
}

findWord("Web Development Tutorial"); 

/* 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o' */

function countLetter(str, letter) {
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  
  console.log(`The letter '${letter}' occurs ${count} times in "${str}".`);
}

countLetter('JSResourceS.com', 'o');  

/* 14. The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area
is NN".
Circumference of circle = 2πr
Area of circle = πr2 */

function calcCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${circumference.toFixed(2)}`);
}

function calcArea(radius) {
  let area = Math.PI * radius * radius;
  console.log(`The area is ${area.toFixed(2)}`);
}

calcCircumference(5);
calcArea(5);
