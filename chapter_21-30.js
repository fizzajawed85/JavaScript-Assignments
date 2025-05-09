// Assignment_21-30

// Chapter 21 (Changing Case)

/* 1. Type the characters that are missing from this code.
var allLower = userInput.toLowerCase;
Note: Correct this statement by yourself.*/

var userInput = prompt("Enter any text:");
var allLower = userInput.toLowerCase();
console.log(`Lowercase version: ${allLower}`);

/* 2. Convert the string represented by x to lower-case and assign the result to the same variable.*/

var x = "HELLO WORLD";
x = x.toLowerCase();
console.log(x);

/* 3. Convert the string represented by y to upper-case and assign the result to the same variable.*/

var y = "hello world";
y = y.toUpperCase();
console.log(y);

/* 4. Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.*/

var first = "HELLO WORLD";
var second = firstVariable.toLowerCase();
console.log(secondVariable);

/* 5. Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.*/

var array = ["HELLO", "WORLD", "JAVASCRIPT"];
var newArray = array[0].toLowerCase();
console.log(newVariable);

/* 6. Display in an alert the upper-case version of the string represented by a variable.*/

var myString = "hello world";
alert(myString.toUpperCase());

/* 7. var cityName = “kaRacHi”;
Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase. */

var cityName = "kaRacHi";
var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
console.log(capitalizedCityName);

// Chapter 22-25 (Strings)

/* 1. "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.*/

var sameWords = "captain";
var slicedWord = sameWords.slice(1, 3);
console.log(slicedWord);

/* 2. The number of characters in the string will be assigned to the variable. */

var str = "captain";
var numberOfCharacters = str.length;
console.log(numberOfCharacters);

/* 3. The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand.*/

var animal = "elephant";
var seg = animal.slice(3, 7);
console.log(seg);

/* 4. Find the number of characters in the string represented by a variable and assign the number to a second variable. */

var word = "programming";
var characterCount = word.length;
console.log(characterCount);

/* 5. In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a
second variable that hasn't been declared beforehand. */

var message = "JavaScriptIsAwesome";
var length = message.length;
sliced = message.slice(1, -3);
console.log("Length:", length);        
console.log("Sliced:", sliced);        

/* 6. var text = "To be or not to be."; var indx = text.indexOf("be");
What is the value of indx? */

var text = "To be or not to be.";
var index = text.indexOf("be");
console.log(index); 

/* 7. var text = "To be or not to be."; var indx = text.lastIndexOf("be");
What is the value of indx?
Note: Try the above both examples by yourself. */

var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx); 

/* 8. Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.*/

var text = "Ready to go, let’s go now!";
indx = text.lastIndexOf("go");
console.log(indx); 

/* 9. Code the first line of an if statement that tests whether a segment with an index represented by
indexNum exists in a string. */

var text = "Hello, world!";
var segment = "world";
var indexNum = text.indexOf(segment);

if (indexNum !== -1) {
    console.log("The segment exists at index:", indexNum);
} else {
    console.log("The segment does not exist in the string.");
}

/* 10. In this string "abcde", what character is at index 2? (Use charAt)*/

var text = "abcde";
var character = text.charAt(2);
console.log(character); 

/* 11. Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand. */

var text = "My favorite color is blue";
cha = text.charAt(9);
console.log(cha); 

/* 12. Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand. */

var str = "Hello, world!";
x = str.charAt(str.length - 1);
console.log(x);

/* 13. Find the the 5th character in a string represented by input and assign it to cha, which hasn't been
declared beforehand.*/

var input = "JavaScript";
cha = input.charAt(4);
console.log(cha);

/* 14. Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character. */

var str = "Fizza Jawed";

if (str.charAt(2) === 'x') {
    console.log("The 3rd character is 'x'.");
} else {
    console.log("The 3rd character is not 'x'.");
}

/* 15. Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand.*/

var inputStr = "Coding is fun!";
var charArray = [];

for (var i = 0; i < inputStr.length; i++) {
    charArray.push(inputStr.charAt(i));
}

console.log(charArray);

/* 16. In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand.*/

var reply = "no answer";
revisedReply = reply.replace("no", "yes");
console.log(revisedReply);

/* 17. In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.*/

var str = "I have 1 apple";
newStr = str.replace("1", "one");
console.log(newStr);

/* 18. If you want all instances replaced, enter 3 characters that need to appear in this statement:
var y = x.replace("a", "z"); */

var x = "apple and banana are amazing";
var y = x.replace(/a/g, "z");
console.log(y);

// Chapter 26 (Rounding Numbers) 

/* 1. Form a statement that rounds a number to the nearest integer.*/

var roundedNumber = Math.round(4.7);
console.log(roundedNumber); 

/* 2. Round up a number represented by origNum and assign it to roundNum, which hasn't been declared
beforehand. */

var origNum = 4.3;
roundNum = Math.ceil(origNum);
console.log(roundNum); 

/* 3. Round down a number represented by origNum and assign it to roundNum, which hasn't been declared
beforehand. */

var origNum = 4.7;
roundNum = Math.floor(origNum);
console.log(roundNum); 

/* 4. Round a number represented by a variable and assign the result to a second variable that hasn't been
declared beforehand. */

var firstNum = 5.6;
secondNum = Math.round(firstNum);
console.log(secondNum); 

/* 5. Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.*/

var number = 0.5;
roundedNumber = Math.floor(number);
console.log(roundedNumber); 

// Chapter 27 (Random Numbers)

/* 1. Convert a random number generated by JavaScript to a number in the range 1 to 50.*/

var randomNum = Math.floor(Math.random() * 50) + 1;
console.log(randomNum); 

/* 2. Generate a random number and assign it to a variable that hasn't been declared beforehand.*/

var randomValue = Math.random();
console.log(randomValue); 

/* 3. You have to create a dice in JavaScript with the use of pseudo-random number.*/

var diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("You rolled: " + diceRoll);

/* 4. You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.*/

var tossResult = Math.random() < 0.5;
if (tossResult) {
  console.log("Head");
} 
else {
  console.log("Tail");
}

// Chapter 28-29 (Converting Strings)

/* 1. How do you convert a string to an integer in JavaScript?*/

var str = "021";
var num = parseInt(str);
console.log(num); 

/* 2. Write a JavaScript function to convert the string "123" to an integer.*/

var str = "123";
var num = parseInt(str);
console.log(num); 

/* 3. How can you convert a string containing a decimal number to a floating-point number in JavaScript?*/

var str = "3.14";
var num = parseFloat(str);
console.log(num); 

/* 4. How can you check if a string can be successfully converted to an integer or decimal in JavaScript
before performing the conversion? */

var str = "3.14";

if (!isNaN(Number(str))) {
  console.log("Valid number: " + Number(str)); 
} else {
  console.log("Invalid number");
}

/* 5. How can you convert a number to a string in JavaScript?*/

var num = 123;
var str = String(num); // using String function
console.log(str); 

var num = 123;
var str = num.toString(); // using toString method
console.log(str); 

/* 6. Write a JavaScript function to convert the number 42 to a string.*/

var num = 42;
var str = `${num}`;
console.log(str); 

/* 7. Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how? */

var str = "3.14";
var integer = parseInt(str); // using parseInt()
console.log(integer); 

var str = "3.14";
var integer = Math.floor(parseFloat(str)); // using math.floor(parseFloat)
console.log(integer); 

// Chapter 30 (Controlling the Length of Decimals)

/* 1. Code a statement that rounds a number represented by num to 4 places, converts it to a string, and
assigns it to newNum, which hasn't been declared beforehand.*/

var num = 3.14159265;
var newNum = num.toFixed(4).toString();
console.log(newNum); 

/* 2. In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable. */

var num = 3.14159;
num = Number(num.toFixed(2));
console.log(num); 

/* 3. Code the first line of an if statement that tests whether the number represented by num, rounded to 2
digits and converted to a string, has more than 4 characters in it.*/

var num = 3.14159;
if (num.toFixed(2).length > 4) {
  console.log("The number has more than 4 characters.");
}

/* 4. Assign a number with many decimal places to a variable. Code an alert that displays the number
rounded to 2 decimal places and converted to a string.*/

var num = 7.987654321;
alert(num.toFixed(2).toString());
