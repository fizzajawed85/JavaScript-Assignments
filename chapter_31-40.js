// Assignment _ 31-38

// Chapter 31 - 34 (Date & Time)

/* 1. Code a statement that creates a new Date object and assigns it to
dObj, which hasn't been declared beforehand. */

let dObj = new Date();
console.log(dObj);

/* 2. Code a statement that creates a new Date object, converts it to a
string, and assigns the string to dStr, which hasn't been declared
beforehand. */

let dStr = new Date().toString();
console.log(dStr);

/* 3. Code a statement that extracts the day of the week from a Date
object represented by d and assigns it to day, which hasn't been
declared beforehand.*/

let d = new Date();
let day = d.getDay();
console.log(day);

/* 4. The day has been extracted from the Date object and assigned to
d. The names of the days of the week have been assigned to the
array dayNames. Alert the current day with array index.*/

let today = new Date();
let dD = today.getDay();
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert(`Today is: ${dayNames[d]}`);

/* 5. Extract all parts of the Date and Time and assign it to the variable
which has not been declared beforehand.*/

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;  
let dy = date.getDate();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds: ${seconds}`);

/* 6. Code a statement that creates a Date object for the last day of the
last month of 2020 and assigns it to later, which hasn't been
declared beforehand. */

let later = new Date(2021, 0, 0);
console.log(later);  

/* 7. Create a Date object for the second day of the second month of
1992 and assign it to a variable that hasn't been declared
beforehand. */

let dateObj = new Date(1992, 1, 2);
console.log(dateObj);

/* 8. Code a single statement that displays in an alert the milliseconds
that elapsed between the reference date and the beginning of
1980. */

alert(new Date('1980-01-01').getTime());       // local time midnight
alert(new Date('1980-01-01T00:00:00Z').getTime());  // UTC midnight

/* 9. How do you change the year of a date in JavaScript? */

let cDate = new Date();         
date.setFullYear(2025);        
console.log(cDate);

/* 10. Write a JavaScript function to change the month of a given
date to January.*/

function changeMonth(date) {
  date.setMonth(0);  
  return date;
}

/* 11. What is the method to change the day of the week for a
specific date in JavaScript? */

let myDate = new Date('2025-05-17');  
let desiredDay = 3;  
let currentDay = myDate.getDay();    
let difference = desiredDay - currentDay;  
myDate.setDate(myDate.getDate() + difference); 

console.log(myDate.toDateString());

/* 12. Write a JavaScript function to change the minutes of a given
time to a specific value. (Value by prompt) */

function changeMinutes(time) {
  let date = new Date(time);                 
  let newMinutes = prompt("Enter Minutes (0 to 59):"); 
  date.setMinutes(newMinutes);              
  return date.toTimeString();                
}

console.log(changeMinutes("2025-05-17T12:30:00"));

/* 13. Write a JavaScript function to add a specific number of
hours to a given time. */

function addHours(time, hours) {
  let date = new Date(time);           
  date.setHours(date.getHours() + hours);  
  return date.toTimeString();          
}

console.log(addHours("2025-05-17T10:00:00", 2));  

/* 14. You have to create a age calculator in JavaScript. */

function calcAge() {
  let birthYear = parseInt(prompt("Enter your birth year:"));
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  return age;
}

console.log(`Your age is: ${calcAge()}`);

// Chapter 35 - 37 (Functions)

/* 1. Code the first line of a function displayAlert. */

function displayAlert() {
}

/* 2. Code a function named askName that prompts the user to "Enter
name" and assigns the answer to userName, which hasn't been
declared beforehand. */

function askName() {
  userName = prompt("Enter your name:");
  return;
}

/* 3. Code a function that calls 2 other functions.*/

function firstName() {
  console.log("Fizza");
}

function lastName() {
  console.log("Jawed");
}

function showFullName() {
  firstName();   
  lastName();    
}

showFullName();

/* 4. Code a function that displays a prompt, "Enter name" and then
displays the name in an alert. Call the function. */

function askUserName() {
  let name = prompt("Enter name");
  alert("Your name is " + name);
}

askUserName();

/* 5. Code the first line of a function named concat that has 3
parameters, the first three letters of the alphabet. Call that takes
a variable, a string, and a number as arguments. */

function concat(a, b, c) {
  return `${a} ${b} ${c}`;
}
let myVar = "Code";                 
let result = concat(myVar, "is", 5);  
console.log(result);                

/* 6. Code a function that has 2 parameters. Concatenate them and
assign the result to a variable that hasn't been declared
beforehand. */

function concatParams(x, y) {
  result = x + y;    
  return result;
}

console.log(concatParams("Hello", "World"));  

/* 7. Code a function that has three parameters. Multiply them and
assign them to a variable that hasn't been declared yet. */

function multiplyParams(a, b, c) {
  product = a * b * c;   
  return product;
}

console.log(multiplyParams(2, 3, 4)); 

/* 8. Write a JavaScript function that takes an array of numbers as
input and returns the average of those numbers.*/

function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];    
  }
  return sum / numbers.length;  
}

console.log(average([2, 4, 6, 8]));  

/* 9. Write a JavaScript function that takes two parameters and returns
their sum.*/

function add(a, b) {
  return a + b;
}

console.log(add(5, 3));  

/* 10. Write a JavaScript function that takes an array of numbers as
input and returns the average of those numbers. */

function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(calculateAverage([10, 20, 30, 40]));  

/* 11. You have to capture the returned value from a function and
store it in a variable? */

function getNumber() {
  return 42;
}
let results = getNumber(); 
console.log(results);    

/* 12. Write a function which tells letter counts of (word).*/

function letterCount(word) {
  return word.length;
}

console.log(letterCount("hello"));  

/* 13. Write a function to set (year) in date object.*/

function setYear(dateObj, year) {
  dateObj.setFullYear(year);
  return dateObj;
}
let meDate = new Date('2025-05-17');
console.log(setYear(meDate, 2030));  

/* 14. Write a function which tells the age of a person who Born on
(dateOfBirth) */

function calculateAge(dateOfBirth) {
  let birthYear = new Date(dateOfBirth).getFullYear();
  let currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

console.log(calculateAge('1995-05-17'));  

/*  15. Write a function which tells the presense of (word) in an
array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
result should be in true or false*/

function isWordPresent(word) {
  let arr = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
  return arr.includes(word);
}

console.log(isWordPresent('haris'));   
console.log(isWordPresent('ali'));     

/* 16. Write a function which repeat (letter) 10 times.
Hint: "abcde" str.repeat(10) */

function repeatLetter(letter) {
  return letter.repeat(10);
}

console.log(repeatLetter("a"));       
console.log(repeatLetter("abc"));     

/* 17. write a function which reverse array = ['a','b','c','d','e']
Hint: arr.reverse() */

function reverseArray(arr) {
  return arr.reverse();
}

let myArr = ['a', 'b', 'c', 'd', 'e'];
console.log(reverseArray(myArr));  

/* 18. Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223 */

function reverseNumber(num) {
  let reversed = num.toString().split('').reverse().join('');
  return parseInt(reversed);
}

let x = 32243;
console.log(reverseNumber(x));  

/* 19. Write a JavaScript function that checks whether a passed
string is a palindrome or not?
Hint: A palindrome is word, phrase, or sequence that reads the
same backward as forward, e.g., madam or Wow. */

function isPalindrome(str) {
  let cleanStr = str.toLowerCase();
  let reversed = cleanStr.split('').reverse().join('');
  return cleanStr === reversed;
}

console.log(isPalindrome("madam"));   
console.log(isPalindrome("Wow"));     
console.log(isPalindrome("hello"));   

/* 20. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word into upper
case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' */

function titleCase(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

console.log(titleCase('the quick brown fox')); 

/* 21. Write a JavaScript function that takes an array of numbers
and finds the lowest and greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 1,5 */

function findMinMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
}

let numbers = [1, 2, 3, 4, 5];
let reslt = findMinMax(numbers);
console.log(`${reslt[0]}, ${reslt[1]}`); 

// Chapter 38 (Local vs. Global Variables)

/* 1. Write a JavaScript function that demonstrates the usage of a local
variable. */

function showLocalVariable() {
  let message = "Hello, this is a local variable!";
  console.log(message);
}

showLocalVariable();

/* 2. How can you access a global variable inside a function in
JavaScript? */

let globalVar = "Hello, Fizza!";

function showGlobal() {
  console.log(globalVar);  
}

showGlobal();  

// Chapter 39, 40 (Switch Statements)

/* 1. Write a JavaScript switch statement that checks the value of a
variable and performs different actions based on different cases. */

let days = 3;

switch(days) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend or Invalid day");
}

/* 2. Write a JavaScript switch statement that check whether cityName
given by user check the cityName if match alert the user and
break the statement, if not default message will be shown to user. */

function checkCity(cityName) {
  switch(cityName.toLowerCase()) {
    case "karachi":
      alert("Welcome to Karachi!");
      break;
    case "lahore":
      alert("Welcome to Lahore!");
      break;
    case "islamabad":
      alert("Welcome to Islamabad!");
      break;
    default:
      alert("City not found!");
  }
}

checkCity(prompt("Enter your city name:"));





