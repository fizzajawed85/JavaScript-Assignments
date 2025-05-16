// Assignment_31-34 (DATE METHODS)

/* 1. Write a program that displays current date and time in
your browser. */

let currentDate = new Date();
console.log(`Current Date and Time: ${currentDate}`);

/* 2. Write a program that alerts the current month in words.
For example December. */

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let curntDate = new Date();
let currentMonthIndex = curntDate.getMonth();
let currentMonth = months[currentMonthIndex];

alert(`Current Month is: ${currentMonth}`);

/* 3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun.*/

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currntDate = new Date();
let currentDays = days[currntDate.getDay()];
let firstThreeLetters = currentDays.slice(0,3);

alert(`Today is ${firstThreeLetters}`)

/* 4. Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today. */

let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let curentDate = new Date();
let dayIndex = curentDate.getDay(); 
let curentDay = day[dayIndex]; 

if (dayIndex === 0 || dayIndex === 6){
    alert(`It's Fun day`);
} 
else {
  alert(`Today is ${curentDay} - Back to work!`);
}

/* 5. Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”. */

let crrentDate = new Date();
let currentDay = crrentDate.getDate();

if (currentDay < 16){
    alert(`"First fifteen days of the month"`);
}
else {
    alert(`"Last days of the month"`);
}

/* 6. Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object.*/

let now = new Date(); 
let milliseconds = now.getTime(); 
minutes = milliseconds / (1000 * 60); 

console.log("Current date: " + now);
console.log("Elapsed milliseconds since January 1, 1970: " + milliseconds);
console.log("Elapsed minutes since January 1, 1970: " + minutes.toFixed(2));

/* 7. Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”. */

let currentTime = new Date(); 
let currentHour = currentTime.getHours(); 

if (currentHour < 12) {
  alert("It's AM");
} 
else {
  alert("It's PM");
}

/* 8. Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate.*/

let laterDate = new Date(2020, 11, 31); 
console.log("Later date: " + laterDate);

/* 9. Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015*/

let ramadanStart = new Date(2015, 5, 18); 
let today = new Date();

let diffTime = today - ramadanStart; 
let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 

alert(diffDays + " days have passed since 1st Ramadan, 2015");

/* 10. Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015. */

let referenceDate = new Date("Dec 05, 2015");
let beginningDate = new Date("Jan 01, 2015");

let millisecond = referenceDate - beginningDate;
let seconds = Math.floor(millisecond / 1000);

console.log(`On reference date ${referenceDate},`);
console.log(`${seconds} seconds have passed since beginning of 2015`);

/* 11. Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser.*/

let crntDate = new Date();
let oneHourAgo = new Date(crntDate);

oneHourAgo.setHours(crntDate.getHours() - 1);

console.log(`Current date: ${crntDate}`);
console.log(`1 hour ago, it was: ${oneHourAgo}`);

/* 12. Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back? */

let todayDate = new Date();
let hundredYearsBack = new Date(todayDate);

hundredYearsBack.setFullYear(todayDate.getFullYear() - 100);

alert(`Current Date: ${todayDate}\n100 years back: ${hundredYearsBack}`);

/* 13. Write a program to ask the user about his age. Calculate
and show his birth year in your browser.*/

let userAge = prompt("Enter your Age:");
let currentYear = new Date().getFullYear();
let birthYear = currentYear - userAge;

console.log(`Your age is ${userAge}`);
console.log(`Your birth year is ${currentYear}`);

/* 14. Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge */

let customerName = prompt("Enter your name:");
let numberOfUnits = +prompt("Enter number of units:");
let chargesPerUnit = +prompt("Enter charges per unit:");
let latePaymentSurcharge = +prompt("Enter late payment surcharge:");

let curentMonth = new Date().toLocaleString('default', { month: 'long' });

let netAmount = numberOfUnits * chargesPerUnit;
let grossAmount = netAmount + latePaymentSurcharge;

netAmount = netAmount.toFixed(2);
grossAmount = grossAmount.toFixed(2);

console.log(`
K-Electric Bill

Customer Name: ${customerName}
Current Month: ${curentMonth}
Number of Units: ${numberOfUnits}
Charges per Unit: ${chargesPerUnit}
Net Amount Payable (within Due Date): ${netAmount}
Late Payment Surcharge: ${latePaymentSurcharge}
Gross Amount Payable (after Due Date): ${grossAmount}
`);
