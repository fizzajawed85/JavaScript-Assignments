// Assignment_21-25 (STRING METHODS)

/* 1. Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.*/

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = `${firstName} ${lastName}`;
var greeting = `Hello, ${fullName}!`;
console.log(greeting);

/* 2. Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser */

var model = prompt("Enter your favorite mobile phone model:");
var length = model.length;
console.log(`My favorite phone is: ${model}`);
console.log(`Length of string: ${length}`);

/* 3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser . */

var nationality = "Pakistani";
var index = nationality.indexOf("n");
console.log(`String: ${nationality}`);
console.log(`Index of 'n': ${index}`);

/* 4. Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser. */

var text = "Hello World";
var lastIndex = text.lastIndexOf("l");
console.log(`String: ${text}`);
console.log(`Last index of 'l': ${lastIndex}`);

/* 5. Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser. */

var word = "Pakistani";
var character = word.charAt(3);
console.log(`String: ${word}`);
console.log(`Character at index 3: ${character}`);

/* 6. Repeat Q1 using string concat() method. */

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
console.log("Hello! " + fullName);

/* 7. Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser. */

var city = "Hyderabad";
console.log(`City: ${city}`);
var newCity = city.split("Hyder").join("Islam");
console.log(`After replacement: ${newCity}`);

/* 8. Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”; */

var message = "Ali and Sami are best friends. They play cricket and football together.";
var updatedMessage = message.split("and").join("&");
console.log(`Updated Message: ${updatedMessage}`);

/* 9. Write a program that converts a string “472” to a number
472. Display the values & types in your browser. */

var str = "472";
var num = Number(str);
console.log(`Value: ${str}`);
console.log(`Type: ${typeof str}`);
console.log(`Value: ${num}`);
console.log(`Type: ${typeof num}`);

/* 10. Write a program that takes user input. Convert and
show the input in capital letters. */

var input = prompt("Enter some text:");
var capitalizedInput = input.toUpperCase();
console.log(`User Input: ${input}`);
console.log(`UpperCase = ${capitalizedInput}`);

/* 11. Write a program that takes user input. Convert and
show the input in title case. */

var input = prompt("Enter some text:");
var titleCaseInput = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
console.log(`User Input: ${input}`);
console.log(`Title Case: ${titleCaseInput}`);

/* 12. Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser. */

var num = 35.36;
var str = num.toString().replace(".", "");
console.log(`Number: ${num}`);
console.log(`Result: ${str}`);

/* 13. Write a program to take user input and store username
in a variable. If the username contains any special symbol
among [@ . , !], prompt the user to enter a valid username.
For character codes of [@ .

Note:
ASCII code of ! is 33
ASCII code of , is 44
ASCII code of . is 46
ASCII code of @ is 64 */

var username = prompt("Enter your username:");
var isValid = true;
for (var i = 0; i < username.length; i++) {
  var charCode = username.charCodeAt(i);

  if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
    isValid = false;
    break;
  }
}
if (!isValid) {
  alert("Please enter a valid username without special characters [@ . , !]");
} else {
  console.log(`Username accepted: ${username}`);
}

/* 14. You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability. Example:*/

var array = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var userInputLower = userInput.toLowerCase();  
var found = false;
for (var i = 0; i < array.length; i++) {
  if (array[i].toLowerCase() === userInputLower) {
    console.log(`${userInputLower} is available at index ${i} in our bakery`);
    found = true;
    break;
  }
}
if (!found) {
  console.log(`We are sorry. ${userInputLower} is not available in our bakery`);
}

/* 15. Write a program to take password as an input from
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document. */

var password = prompt("Enter password");

console.log("enter password: " + password);

var firstChar = password.charAt(0);
var firstCharCode = firstChar.charCodeAt(0);

var hasLetter = false;
var hasNumber = false;

// Check letters and numbers
for (var i = 0; i < password.length; i++) {
  var code = password.charCodeAt(i);
  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    hasLetter = true;
  }
  if (code >= 48 && code <= 57) {
    hasNumber = true;
  }
}

// then check Conditions 
if (firstCharCode >= 48 && firstCharCode <= 57) {
  console.log("Password can not begin with a number");
  console.log("Please enter a valid password");
}
else if (password.length < 6 || !(hasLetter && hasNumber)) {
  console.log("Please enter a valid password");
}
else {
  console.log("Welcome");
}

/* 16. Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser.*/

var university = "University of Karachi";
var universityArray = university.split(" ");
console.log("The elements of the array are: " + universityArray);

/* 17. Write a program to display the last character of a user
input.*/

var userInput = prompt("Enter a word:");
var lastCharacter = userInput[userInput.length - 1];
console.log("User input: " + userInput);
console.log("Last character of input: " + lastCharacter);

/* 18. You have a string “The quick brown fox jumps over the
lazy dog”. Write a program to count number of
occurrences of word “the” in given string. */

var text = "The quick brown fox jumps over the lazy dog";
var word = "the";
var count = 0;

// Convert string to lowercase and split to an array of words
var words = text.toLowerCase().split(" ");

// Loop the array and count occurrences of "the"
for (var i = 0; i < words.length; i++) {
    if (words[i] === word) {
        count++;
    }
}

console.log("Text: " + text);
console.log('There are ' + count + ' occurrence(s) of word "' + word + '"');
