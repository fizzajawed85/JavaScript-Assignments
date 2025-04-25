// Chapter_14-16 (ARRAYS)

/* 1. Declare an empty array using JS literal notation to store
student names in future.*/

var studentNames = [];

/* 2. Declare an empty array using JS object notation to store
student names in future.*/

var studentNames = new Array();

/* 3. Declare and initialize a strings array.*/

var fruits = ["Apple", "Banana", "Mango", "Orange"];

/* 4. Declare and initialize a numbers array.*/

var numbers = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 10];

/* 5. Declare and initialize a boolean array.*/

var isActive = [true, false, true, false];

/* 6. Declare and initialize a mixed array. */

var mixedArray = ["Fizza", 25, true];

/* 7. Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like:*/

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

for (var i = 0; i < qualifications.length; i++) {
  console.log(qualifications[i]);
}

/* Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like: */

var students = ["Michael" , "John" , "Tony"];
var scores = [360, 292 , 450];
var totalMarks = 500;

for (let i = 0; i < students.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    console.log(`Score of ${students[i]} is ${scores[i]}. Percentage: ${percentage}%`);
  }

/* 9. Initialize an array with color names. Display the array
elements in your browser. */

var colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
console.log("Initial Array: ", colors);

// a. Ask the user what color he/she wants to add to the beginning

var addColorBeginning = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(addColorBeginning);
console.log("Array after adding color to the beginning: ", colors);

// b. Ask the user what color he/she wants to add to the end

var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
colors.push(colorToAddEnd);
console.log("Array after adding color to the end: ", colors);

// c. Add two more colors to the beginning

colors.unshift("Orange", "Pink");
console.log("Array after adding two colors to the beginning: ", colors);

// d. Delete the first color in the array

colors.shift();
console.log("Array after deleting the first color: ", colors);

// e. Delete the last color in the array

colors.pop();
console.log("Array after deleting the last color: ", colors);

// f. Ask the user at which index he/she wants to add a color & color name

var indexToAdd = prompt("At which index do you want to add a color?");
var colorToAdd = prompt("Enter the color to add at that index:");
indexToAdd = parseInt(indexToAdd);
colors.splice(indexToAdd, 0, colorToAdd);
console.log("Array after adding color at a specific index: ", colors);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors to delete

var indexToDelete = prompt("At which index do you want to delete color(s)?");
var numberToDelete = prompt("How many colors do you want to delete?");
indexToDelete = parseInt(indexToDelete);
numberToDelete = parseInt(numberToDelete);
colors.splice(indexToDelete, numberToDelete);
console.log("Array after deleting colors: ", colors);

/* 10. Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method. */

var studentScores = [320, 230, 480, 120];
console.log("Scores of student:", studentScores);

studentScores.sort((a, b) => a - b); 
console.log("Ordered scores of student:", studentScores);

/* 11. Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array. */

var cities = ["Karachi", "Lahore", "Quetta", "Peshawar", "Islamabad"];
var selectedCities = cities.slice(0, 3);
console.log("Cities list:", cities);
console.log("Selected list:", selectedCities);

/* 12. Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method) */

var arr = ["This", "is", "my", "cat"];
console.log(`Array: ${arr.join(", ")}`); 

var str = arr.join(" ");
console.log(`String: ${str}`);


/* 13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out) */

var devices = ["keyboard", "mouse", "printer", "monitor"];

console.log("Devices: ");
console.log(devices.join(", "));

while (devices.length > 0) {
   var device = devices.shift();  
    console.log("Out:", device);
}

/* 14. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In-
First Out)*/

var devices = ["keyboard", "mouse", "printer", "monitor"];

console.log("Devices: ");
console.log(devices.join(", "));

for (let i = devices.length - 1; i >= 0; i--) {
    var device = devices.pop();  
    console.log("Out:", device);
}

/* 15. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method: */

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>"); 

for (var i = 0; i < manufacturers.length; i++) {
    document.write(`<option>${manufacturers[i]}</option>`); 
}

document.write("</select>"); 
