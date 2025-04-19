/* Chapter_04 VARIABLE NAMES: LEGAL & ILLEGAL */

// 1. Declare 3 variables in one statement.
var fullName = "Fizza Jawed", age = 24, country = "Pakistan";

// 2. Declare 5 legal & 5 illegal variable names.

var user = "Fizza Jawed";
var _age = 24;
var $salary = "000";
var userDetails ="xyz";
var birth_date = 12;

// Illegal Variable Names

// var 1stName = "Fizza";     
// var full name = "Fizza Jawed";   
// var @email = "xyz@gmail.com";      
// var var = "000";         
// var user-name = "abc";   

// 3. Display in browser

document.write("<b>Rules for naming JS variables</b><br><br>");
document.write("Variable names can only contain letters, numbers, $, and _.<br>");
document.write("For example: <code>$my_1stVariable</code><br><br>");
document.write("Variables must begin with a letter, $, or _.<br>");
document.write("For example: <code>$name</code>, <code>_name</code>, or <code>name</code><br><br>");
document.write("Variable names are case sensitive.<br><br>");
document.write("Variable names should not be JS keywords.<br>");

