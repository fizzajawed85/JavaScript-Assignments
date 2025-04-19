/* Chapter_05 MATH EXPRESSIONS */

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = 5;  
var num2 = 3;  
var result = num1 + num2;
document.write("The sum of " + num1 + " + " + num2 + " is: " + result + "<br>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

var num1 = 10;
var num2 = 5;

var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

document.write("The result of " + num1 + " - " + num2 + " is: " + subtraction + "<br>");
document.write("The result of " + num1 + " * " + num2 + " is: " + multiplication + "<br>");
document.write("The result of " + num1 + " / " + num2 + " is: " + division + "<br>");
document.write("The result of " + num1 + " % " + num2 + " is: " + modulus + "<br>");

// 3. Do the following using JS Mathematic Expressions

var num;  
document.write("Value after variable declaration is: " + num + "<br>");

num = 5;  
document.write("Initial value: " + num + "<br>");

num = ++num;  
document.write("Value after increment is: " + num + "<br>");

num += 7;  
document.write("Value after addition is: " + num + "<br>");

num = --num;  
document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;  
document.write("The remainder is: " + remainder + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write("The cost of buying " + numberOfTickets + " movie tickets is: " + totalCost + " PKR.");


// 5. Write a script to display multiplication table of any number in your browser. E.g

var number = 7;
var result = "";

for (var i = 1; i <= 10; i++) {
    document.write(`${number} x ${i} = ${number * i}<br>`);  
}

/* 6. The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.*/

var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(`The temperature ${celsius}°C is ${fahrenheit}°F<br>`);

fahrenheit = 70;
celsius = (fahrenheit - 32) * 5/9;
document.write(`The temperature ${fahrenheit}°F is ${celsius}°C`);

/* 7. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges

Compute the total cost & show the receipt in your browser.*/

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h3>Shopping Cart</h3>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + "<br><br>");
document.write("Total cost of your order is: " + totalCost);

/* 8. Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser*/

var totalMarks = 500;
var marksObtained = 375;

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h3>Student Result</h3>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

/* 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee)*/

var usd = 10;  
var sar = 25; 

var totalInPKR = (usd * 104.80) + (sar * 28);

document.write("Total in Pakistani Rupees: " + totalInPKR + "<br>");

/* 10. Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression*/

var number = 10;
var result = (((number + 5) * 10) / 2);
console.log("Result after arithmetic operations: " + result + "<br>");

/* 11. The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.
Output them to the screen like so: “They are either NN or NN
years old”. */

var currentYear = 2025;
var birthYear = 2000;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("They are either " + age1 + " or " + age2 + " years old." + "<br>");

/* 12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The
area is NN”. (Hint : Area of a circle = π r2, π = 3.142)*/

var header = "The Geometrizer";
var radius = 5;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write(header + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br>");

// 13. The Lifetime Supply Calculator

var snack = "Chips";
var currentAge = 25;
var maxAge = 80;
var amountPerDay = 2;
var totalAmount = (maxAge - currentAge) * 365 * amountPerDay;
document.write(`You will need ${totalAmount} ${snack} to last you until the ripe old age of ${maxAge}`);
