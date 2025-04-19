// Chapter 4 (Variable names Legal and Illegal)

/* 1. Correct this statement.
var product cost = 3.45;
2. Rewrite this using camelCase.
var Nameofband;
3. In a single statement declare a legally-named variable and assign a number to it.
4. Declare a variable that is a combination of your first and last names. Use camelCase.
5. List the legal and Illegal Variables.*/

// 1. 
var productCost = 3.45;

// 2. 
var nameOfBand;

// 3. 
var age = 25;

// 4. 
var fullName;

// 5. List of legal and illegal variables

// list Legal Variables
var productCost;
var nameOfBand;
var age;
var firstName;
var lastName;

// list Illegal Variables

// var 2ndName; 
// var class; 
// var product-cost; 
// var @name; 
// var my variable; 


// Chapter 5 (Math Expression I)

/* 1. What is the name and symbol of the arithmetic operator that gives you the remainder when one
number is divided by another?
2. What is the value of num?
var num = 20 % 6;
3. In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by
2,000.
4. Assign to a variable the value represented by one variable subtracted from the value represented
by another variable
5. Assign to a variable the remainder when one number is divided by another. The variable hasn't
been declared beforehand. Make up the variable name.
6. Code an alert that displays the result of a multiplication on 2 numbers. */

// 1. Name: Modulus, Symbol: %

var num = 20 % 6;  
console.log(num);  // Output: 2

// 2. 
console.log("Value of num:", num);  // Output: 2

// 3. 
var largeNum = 1000 * 2000;
console.log("Value of largeNum:", largeNum);  // Output: 2000000

// 4. 
var a = 10;
var b = 5;
var difference = a - b;  
console.log("Difference:", difference);  // Output: 5

// 5. 
remainderResult = 25 % 4;  
console.log("Remainder Result:", remainderResult);  // Output: 1

// 6. 
var num1 = 7;
var num2 = 8;
alert("The result of " + num1 + " * " + num2 + " is " + (num1 * num2)); // The result of 7 * 8 is 56


// Chapter 6 (Math Expression II)

/* 1. Code a short form of x = x + 1; Use either of the two legal expressions.
2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
3. var x = 50;
var y = x++;
What is the value of y?
4. var y = 50;
var z = --y;
What is the value of z?
5. In a single statement, decrement num and assign its original value to newNum.
6. In a single statement add 1 to a variable and assign its original value to another variable.
7. Assign a number value to a variable. Increment the variable. Display the new value in an alert */

// 1.
var x = 5;
x++;  
console.log("x after incrementing:", x);  // Output: 6

// 2. 
var x = 100;
x -= 1;  
console.log("x after reduction:", x);  // Output: 99

// 3. 
var x = 50;
var y = x++;  
console.log("Value of y:", y);  // Output: 50
console.log("Value of x after post-increment:", x);  // Output: 51

// 4. 
var y = 50;
var z = --y;  
console.log("Value of z:", z);  // Output: 49
console.log("Value of y after pre-decrement:", y);  // Output: 49

// 5.
var num = 10;
var newNum = num--; 
console.log("Value of newNum:", newNum);  // Output: 10
console.log("Value of num after post-decrement:", num);  // Output: 9

// 6. 
var assignedNum = originalNum++;  
console.log("Value of assignedNum:", assignedNum);  // Output: 20
console.log("Value of originalNum after post-increment:", originalNum);  // Output: 21

// 7. 
var number = 5;
number++;  
alert("The new value of number is: " + number);  // Alert Output : 6

// Chapter 7 (Math Expression III)

/* 1. var calculatedNum = 2 + (2 * 6); What is the value of calculatedNum?
2. var calculatedNum = (2 + 2) * 6; What is the value of calculatedNum?
3. var calculatedNum = (2 + 2) * (4 + 2); What is the value of calculatedNum?
4. var calculatedNum = ((2 + 2) * 4) + 2; What is the value of calculatedNum?
Note: Try all the above equations yourself.
5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses,
producing 56.
6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses,
producing 20.
7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses,
producing 5. */

// 1. 
var calculatedNum1 = 2 + (2 * 6); 
console.log("Value of calculatedNum1:", calculatedNum1);  // Output: 14

// 2. 
var calculatedNum2 = (2 + 2) * 6;  
console.log("Value of calculatedNum2:", calculatedNum2);  // Output: 24

// 3. 
var calculatedNum3 = (2 + 2) * (4 + 2); 
console.log("Value of calculatedNum3:", calculatedNum3);  // Output: 24

// 4. 
var calculatedNum4 = ((2 + 2) * 4) + 2;  
console.log("Value of calculatedNum4:", calculatedNum4);  // Output: 18

// 5.
var cost = (2 + (2 * 4)) + 10;  
console.log("Value of cost:", cost);  // Output: 20 

// 6. 
var units = (2 + (2 * 4)) + 10; 
console.log("Value of units:", units);  // Output: 20

// 7. 
var pressure = (4 / 2) * 4; 
console.log("Value of pressure:", pressure);  // Output: 8 

// Chapter 8 (Concatenating Text Strings)

/* 1. var num = "2" + "2"; What is the value of num? Include quotation marks.
2. message = ("Hello," + "Dolly"); What is the value of message? (Include the quotation marks.) Alert
the statement
3. alert("33" + 3); What message displays in the alert box?
4. Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".
5. Write a statement that assigns to a variable the concatenation of a string with a number
6. Assign strings to two variables. Then concatenate them and assign the result to a third variable. */

// 1.
var num = "2" + "2"; 
console.log("Value of num:", num);  // Output: "22"

// 2. 
var message = "Hello," + " Dolly";  
alert(message);  // Output: "Hello, Dolly"

// 3.
alert("33" + 3);  // Output: "333" 


// 4. 
var part1 = "Pakistan";
var part2 = " Zindabad";
alert(part1 + part2);  // Output: "Pakistan Zindabad"

// 5.
var text = "The number is ";
var number = 7;
var result = text + number;  
console.log("Concatenated result:", result);  // Output: "The number is 7"

// 6. 
var firstName = "Fizza";
var lastName = " Jawed";
var fullName = firstName + lastName;  
console.log("Full name:", fullName);  // Output: "Fizza Jawed"

// Chapter 9 (Prompts)

/* 1. Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
2. Code a prompt with the message "Country?" and the default answer "China". The user's response
is assigned to country.
3. Correct this statement
var yourName = prompt(Enter Your Name");
4. Code a prompt that specifies a string as the message Include a default input.
5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the
second variable as the default response. Assign the user's response to a third variable.
6. Display a prompt, including both a message and a default response. Display the user's response in
an alert.*/

// 1. 
var firstName = prompt("Enter first name");
console.log("First Name:", firstName);  // Output: "xyz"

// 2.
var country = prompt("Country?", "China");
console.log("Country:", country);  // Output: "China"

// 3. 
var yourName = prompt("Enter Your Name");  // No output, user input is stored in variable

// 4. City: New York
var city = prompt("Enter your city", "New York");
console.log("City:", city);  // Output: "New York"

// 5. 
var message = "Favorite color?";
var defaultColor = "Blue";
var favoriteColor = prompt(message, defaultColor);
console.log("Favorite color:", favoriteColor);  // Output: Blue"

// 6.
var age = prompt("Enter your age", "25");
alert("You entered: " + age);  // Output: 24"
