/* Question 1:
Take a number from a user and write a function which checks whether the number is even or
odd. Assign the result to a variable and log that variable in the console.  */

var number= prompt("Enter a number to check Odd or Even",0);
var result;
if(number%2==0){
    result= "even";
}else{
    result= "odd";
}
console.log(`The number entered is ${number} and Number is ${result}`);