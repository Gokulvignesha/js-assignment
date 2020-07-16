/* QUESTION 2
Write a program which will take OS name and version from the user separated by a space. Then
log the OS name and version on the console. */

var valstr=prompt("Enter OS name & Version with space separated");
var result=valstr.split(" ");
console.log(`The OS name is ${result[0]} and version is ${result[1]}`);