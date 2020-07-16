/* Question 3:
Write a program to take marks as input from the user and grade him accordingly. Use Conditional
statements. Also the same code using switch or ternary */


// Grading System using Conditional statements :

console.log("Using IF... ELSE IF... ELSE...  Conditions");
var mark= prompt("Enter your mark",0);
var result;
if(mark >90 && mark <=100){
    result= "A";
}
else if(mark >80 && mark <=90){
    result= "B";
}
else if(mark >70 && mark <=80){
    result= "C";
}
else if(mark >60 && mark <=70){
    result= "D";
}
else if(mark >45 && mark <=60){
    result= "E";
}
else{
    result= "F";
}
console.log(`Marks are ${mark} and grade is ${result}`);

console.log(" ");
console.log(" ");
console.log(" ");

// Grading System using SWITCH Statements :
let grade;
console.log("Using switch() statements");
switch(parseInt(mark / 10)){
     case 9:
        grade= console.log("Grade: A");
        break;

     case 8:
        grade= console.log("Grade: B");
        break;

     case 7:
        grade= console.log("Grade: C");
        break;

     case 6:
        grade= console.log("Grade: D");
        break;

     case 5:
        grade= console.log("Grade: E");
        break;

     default:
        grade= console.log("Grade: F");
        break;
         }