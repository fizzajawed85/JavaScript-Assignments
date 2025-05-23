// Assignment_38-34 (FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS)

/* 1. Write a custom function power ( a, b ), to calculate the value of
a raised to b. */

// Function to calculate a raised to the power of b
function power(a, b) {
  // Start with result as 1
  let result = 1;

  // Repeat the multiplication b times
  for (let i = 0; i < b; i++) {
    result *= a; // Multiply result by a
  }

  // Return the final result
  return result;
}
console.log(power(2, 3)); // Output: 8
console.log(power(5, 2)); // Output: 25
console.log(power(3, 4)); // Output: 81


/* 2. Any year is entered through the keyboard. Write a function to
determine whether the year is a leap year or not.
Leap years ..., 2012, 2016, 2020, ... */

// Function to check if a year is a leap year
function isLeapYear(year) {
  // A year is a leap year if:
  // divisible by 4 and (not divisible by 100 OR divisible by 400)
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true; // It's a leap year
  } else {
    return false; // Not a leap year
  }
}
console.log(isLeapYear(2012)); // true
console.log(isLeapYear(2100)); // false (not divisible by 400)
console.log(isLeapYear(2000)); // true (divisible by 400)


/* 3. If the lengths of the sides of a triangle are denoted by a, b, and
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions */

// Function to calculate semi-perimeter S
function calculateS(a, b, c) {
  return (a + b + c) / 2;
}

// Function to calculate area using formula
function calculateArea(a, b, c) {
  const S = calculateS(a, b, c); // Call first function
  const area = Math.sqrt(S * (S - a) * (S - b) * (S - c)); // Heron's formula
  return area;
}
console.log(calculateArea(3, 4, 5)); // Output: 6


/* 4. Write a function that receives marks received by a student in 3
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction
and other are for average and percentage. Call those functions
from mainFunction and display result in mainFunction.*/

// Function to calculate average of 3 subjects
function calculateAverage(m1, m2, m3) {
  return (m1 + m2 + m3) / 3;
}

// Function to calculate percentage (out of 300 total marks)
function calculatePercentage(m1, m2, m3) {
  const totalMarks = 300;
  const obtainedMarks = m1 + m2 + m3;
  return (obtainedMarks / totalMarks) * 100;
}

// Main function that calls both average and percentage functions
function mainFunction(m1, m2, m3) {
  const avg = calculateAverage(m1, m2, m3); 
  const perc = calculatePercentage(m1, m2, m3); 

  // Display results using backticks
  console.log(`Average Marks: ${avg}`);      // Output: Average Marks: 85
  console.log(`Percentage: ${perc}%`);       // Output: Percentage: 85%
}
mainFunction(85, 90, 80);


/* 5. You have learned the function indexOf. Code your own custom
function that will perform the same functionality. You can code
for single character as of now. */

// Custom function to find the index of a character in a string
function customIndexOf(str, char) {
  // Loop through each character of the string
  for (let i = 0; i < str.length; i++) {
    // If current character matches the target character
    if (str[i] === char) {
      return i; // Return the index
    }
  }
  return -1; // If character not found, return -1
}
console.log(customIndexOf("hello", "e")); // Output: 1
console.log(customIndexOf("world", "r")); // Output: 2
console.log(customIndexOf("chat", "z"));  // Output: -1


/* 6. Write a function to delete all vowels from a sentence. Assume
that the sentence is not more than 25 characters long. */

// Function to remove all vowels from a sentence
function deleteVowels(sentence) {
  let result = ""; // Store new string without vowels

  // Loop through each character in sentence
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i].toLowerCase(); // Convert to lowercase for checking

    // Check if character is NOT a vowel
    if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
      result += sentence[i]; // Add non-vowel to result
    }
  }

  return result; // Return string after removing vowels
}
// Example sentence containing all vowels
let sentence = "Education is a beautiful journey";
console.log(deleteVowels(sentence)); // Output: "dctn s  btfl jrny"


/* 7. Write a function with switch statement to count the number of
occurrences of any two vowels in succession in a line of text.
For example, in the sentence.
“Pleases read this application and give me gratuity”
Such occurrences are ea, ea, ui. */

// Function to count pairs of vowels in a string
function countVowels(text) {
  let count = 0; // Initialize count

  // Loop through string till second last character
  for (let i = 0; i < text.length - 1; i++) {
    let firstChar = text[i].toLowerCase();
    let secondChar = text[i + 1].toLowerCase();

    // Check if firstChar is a vowel using switch
    switch (firstChar) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        // Check if secondChar is also a vowel
        switch (secondChar) {
          case 'a':
          case 'e':
          case 'i':
          case 'o':
          case 'u':
            count++; // Increase count if pair of vowels found
            break;
        }
        break;
    }
  }

  return count; // Return total count
}
// Example sentence
const sentences = "Pleases read this application and give me gratuity";
console.log(countVowels(sentences)); // Output: 3


/* 8. The distance between two cities (in km.) is input through the
keyboard. Write four functions to convert and print this
distance in meters, feet, inches and centimeters. */

// Function to convert km to meters
function convertToMeters(km) {
  return km * 1000;
}

// Function to convert km to feet
function convertToFeet(km) {
  return km * 3280.84;
}

// Function to convert km to inches
function convertToInches(km) {
  return km * 39370.1;
}

// Function to convert km to centimeters
function convertToCentimeters(km) {
  return km * 100000;
}

// Example input
let distanceInKm = 5;

// Display all converted values with comments
console.log(`Distance in kilometers: ${distanceInKm} km`);  // 5 km
console.log(`In meters: ${convertToMeters(distanceInKm)} m`); // 5000 m
console.log(`In feet: ${convertToFeet(distanceInKm)} ft`); // 16404.2 ft
console.log(`In inches: ${convertToInches(distanceInKm)} in`); // 196850.5 in
console.log(`In centimeters: ${convertToCentimeters(distanceInKm)} cm`); // 500000 cm


/* 9. Write a program to calculate overtime pay of employees.
Overtime is paid at the rate of Rs. 12.00 per hour for every hour
worked above 40 hours. Assume that employees do not work
for fractional part of an hour. */

// Function to calculate overtime pay
function calculateOvertimePay(hoursWorked) {
  let overtimeRate = 12; // Rs. per hour
  let standardHours = 40;

  // Check if hours are more than 40
  if (hoursWorked > standardHours) {
    let overtimeHours = hoursWorked - standardHours;
    return overtimeHours * overtimeRate; // Overtime pay
  } else {
    return 0; // No overtime
  }
}
let hoursWorked = 45; // employee worked 45 hours
let overtimePay = calculateOvertimePay(hoursWorked);

console.log(`Hours worked: ${hoursWorked}`);  // Output:  45
console.log(`Overtime pay: Rs. ${overtimePay}`); // Output: Rs. 60

/* 10. A cashier has currency notes of denominations 10, 50 and
100. If the amount to be withdrawn is input through the
keyboard in hundreds, find the total number of currency notes
of each denomination the cashier will have to give to the
withdrawer.*/

// Ask user to enter amount using prompt
let amount = parseInt(prompt("Enter the amount to withdraw:")); // e.g., 470

// Function to calculate currency notes
function calculateNotes(amount) {
  let hundredNotes = Math.floor(amount / 100); // Calculate 100s
  let remaining = amount % 100;

  let fiftyNotes = Math.floor(remaining / 50); // Calculate 50s
  remaining = remaining % 50;

  let tenNotes = Math.floor(remaining / 10); // Calculate 10s

  // Show result
  console.log(`You will have ${hundredNotes} hundred notes ${fiftyNotes} fifty notes ${tenNotes} ten notes`);
}
calculateNotes(amount);
