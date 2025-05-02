// Chapter_17-20 (ARRAYS AND LOOP)

/* 1. Declare and initialize an empty multidimensional array.
(Array of arrays) */

var myArr = [[], [], [], []];

/* 2. Declare and initialize a multidimensional array
representing the following matrix: */

var multiArr = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
console.log(multiArr);

/* 3. Write a program to print numeric counting from 1 to 10.*/

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

/* 4. Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user. */

var table = +prompt("Enter a number that you want print a table.");
var length = +prompt("Enter a length of table");

for (var i = 1; i <= length; i++) {
  console.log(`${table} x ${i} = ${table * i}`);
}

/* 5. Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”] */

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log("Element at index " + i + " is " + fruits[i]);
}

/* 6. Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k */

let counting = "";
for (let i = 1; i <= 15; i++) {
    counting += `${i}${i !== 15 ? ", " : ""}`;
}
document.write(`<b>Counting:</b> ${counting}<br>`);

let reverse = "";
for (let i = 10; i >= 1; i--) {
    reverse += `${i}${i !== 1 ? ", " : ""}`;
}
document.write(`<b>Reverse counting:</b> ${reverse}<br>`);

let even = "";
for (let i = 0; i <= 20; i += 2) {
    even += `${i}${i !== 20 ? ", " : ""}`;
}
document.write(`<b>Even:</b> ${even}<br>`);

let odd = "";
for (let i = 1; i < 20; i += 2) {
    odd += `${i}${i !== 19 ? ", " : ""}`;
}
document.write(`<b>Odd:</b> ${odd}<br>`);

let series = "";
for (let i = 2; i <= 20; i += 2) {
    series += `${i}k${i !== 20 ? ", " : ""}`;
}
document.write(`<b>Series:</b> ${series}<br>`);

/* 7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example: */

let arr = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// safe comparision ke liye user input ko lowercase main convert kiya hai
let item = userInput.toLowerCase();

let found = false; // start main assume kiya hai item nhi hai

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
        console.log(`${item} is available at index ${i} in our bakery.`);
        found = true; // item hai to found condition true hogi or loop break hojaye ga
        break;
    }
}
// agr item nhi mila to not found wali condition chal jayegi
if (!found) {
    console.log(`We are sorry, ${userInput} is not available in our bakery.`);
}

/* 8. Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12]. */

let numbers = [24, 53, 78, 91, 12];
let largest = Math.max(...numbers);
console.log(`Array items : ${numbers}`);
console.log(`The largest number is ${largest}`);

/* 9. Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12] */

let nums = [24, 53, 78, 91, 12];
let smallest = Math.max(...nums);
console.log(`Array items : ${nums}`);
console.log(`The smallest number is ${smallest}`);

/* 10. Write a program to print multiples of 5 ranging 1 to
100. */

let multiples = "";

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    multiples += i + " ";
  }
}
console.log(multiples.trim());

// Chapter 17 - 20 (for Loops)

/* 1. Write a statement in which loop is to run 10 times. */

for (let i = 0; i < 10; i++) {
  console.log("Loop iteration:", i);
}

/* 2. Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops. */

for (let i = 0; i <= 11; i++) {
  console.log("Loop number:", i);
}

/* 3. What are the 5 characters missing from this code, excluding any spaces that are missing? Type them in order, with no
spaces or commas between them.
for var i = 0 i <= 4 i++
Note: Complete this statement by yourself */

for (var i = 0; i <= 4; i++) {
  console.log("Loop number:", i);
}

/* 4. Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment.
Run it 100 times using < to specify how many loops. */

for (let count = 0; count < 100; count++) {
  console.log("Loop number:", count);
}

/* 5. Code the first line of a for loop with the usual counter and the usual starting value. Run it 3 times using > to specify
how many loops. Decrement it with each iteration.*/

for (let i = 2; i > -1; i--) {
  console.log("Loop number:", i);
}

/* 6. The statement assigns the number of elements in the array to the variable.*/

let myArray = [1, 2, 3, 4, 5];
let numElements = myArray.length;
console.log(numElements);  

/* 7. Set a variable named “flag” with an initial Boolean value of your choice. */

let flag = true;  

/* 8. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the
number of loops by the number of elements in the array pets.*/

let pets = ["dog", "cat", "rabbit", "parrot"];
for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}

/* 9. Coding Exercise:
• Set a for loop to run 10 iterations.
• On the second iteration, display the counter in an alert. (It should
• be 1.)
• Break out of the loop. */

for (let i = 0; i < 10; i++) {
  if (i === 1) {
      alert(i);  
      break;     
  }
}

/* 10. Create an array which contains user names
• Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
• Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing.
Limit the number of loops by the number of elements in the array user names.
• Code an if statement that tests the presense of (user name) in an array.
• If user name match Alert that "Enter". if not then alert ("Please write correct user name").*/

let userNames = ["Amna", "Fatima", "Noor", "Zehra"];

let firstName = prompt("Enter first name");

for (let i = 0; i < userNames.length; i++) {
    
    if (firstName === userNames[i]) {
        alert("Enter");  
        break;           
    }
}

if (!userNames.includes(firstName)) {
    alert("Please write correct user name");
}

/* 11. Complete this code to display an alert if a match isn't found.
var matchFound = false;
for (var i = 0; i < list.length; i++) {
if (userInput === list[i]) {
alert("Match found");
matchFound = true;
break;
}} */

var list = ["apple", "banana", "cherry", "date"];

let usersInput = prompt("Enter a fruit name");

var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (usersInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}

if (!matchFound) {
    alert("No match found");
}

/* 12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];
var secondArr = [1, 2, 3, 4, 5, 6];
Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the
number of loops by the number of elements in the array firstArr.
In the scope of main loop Code the nested loop. Limit the number of nested loops by the number of elements in the
array
secondArr. After that concatenate the both loops.
Expected Output: a1 a2 a3 a4 ... f6 */

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
    // Inner loop: iterating over secondArr
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);  
    }
}
