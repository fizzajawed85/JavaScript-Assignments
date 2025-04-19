// Chapter 10 (if statements)

/* 1. var city = "Karachi"
if (city = "Karachi") {
console.log("The City OF Lights")
Correct the above statement: Also try this statement by yourself
2. This is the first line of an if statement:
if (x === y) {
Complete the statement. If the condition is true, display a box that asks the user value of z? and
assign it to another variable.
3. Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert
("Please write correct city")
4. Code an if statement. Test whether a variable has a particular numerical value. If so, assign a new
value to that variable, as in x = 1; */


// 1. Correcting the statement:
var city = "Karachi";
if (city === "Karachi") {  
    console.log("The City Of Lights"); //Output: The City Of Lights


}

// 2. Completing the statement:
var x = 5;
var y = 5;
if (x === y) {
    var z = prompt("What is the value of z?");  
    console.log("Value of z:", z);  // Output: THe Value of z is 5
}

// 3. If statement for ZipCode check:
var ZipCode = "10010";  
if (ZipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city"); // Output: "Karachi"

}

// 4. If statement testing a numerical value:
var x = 1;  
if (x === 1) {
    x = 10;  
    console.log("New value of x:", x);  // Output: "New value of x is 10"
}


// Chapter 11 (Comparison Operators)

/* 1. Code the first line of an if statement that tests whether one variable is unequal to another. (Use !)
2. Code the first line of an if statement that tests whether the value represented by a variable is
greater than or equal to the value represented by another variable.
3. Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a
number to that variable.
4. Code an if statement that tests whether a number is unequal to a different number. If the condition
is true (it will be), display a congratulations alert.
5. Code a prompt asking for your first name. Code an if statement that tests whether the name you
entered is unequal to another name. If the condition is true (it will be), display an alert that says "No
match" */


// 1. 
var x = 10;
var y = 5;
if (x !== y) {  
    console.log("x is not equal to y");  // Output: Print log
}

// 2. 
var x = 10;
var y = 5;
if (x >= y) {  
    console.log("x is greater than or equal to y");  // Output: Print log
}

// 3. 
var x = 5;
if (x !== 10) {  
    x = 20;  
    console.log("New value of x:", x);  // Output: "New value of x is 20"
}

// 4. 
var num1 = 5;
var num2 = 10;
if (num1 !== num2) {  
    alert("Congratulations, numbers are unequal!");  // Output: Print alert message
}

// 5. 
var userName = prompt("Enter your first name");
if (userName !== "John") {  
    alert("No match");  // If user enters different name from "John", Output: "No match"
}
