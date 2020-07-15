// JAVASCRIPT STRING METHODS


//trim() --> trim method removes leading & trailing spaces
var string="  JavaScript  ";
console.log(string.trim());    // returns JavaScript

// split() --> it split the string using particular character. Default it considered whitespace
var string="this is javascript code";
console.log(string.split(" "));     // returns [ 'this', 'is', 'javascript', 'code' ]

// slice() --> it returns part of string slice(start_index,end_index)
// starting index is included but endindex is excluded.
var code="javascript";
console.log(code.slice(0,4));   // returns java

//concat() --> concatenates two strings
var a="javascript ";
var b="is scripting language";
console.log(a.concat(b));   // returns javascript is scripting language


//charAt(index) --> it returns the character at specified position of string.
var code="javascript";
console.log(code.charAt(4));  //returns s


//indexof(string) --> it returns the staring index position of the mentioned string.
var code="javascript is differ from java language";
console.log(code.indexOf("java"));  // returns 0


//lastIndexof(string) --> it returns the last index position of the mentioned string.
console.log(code.lastIndexOf("java"));    // returns 26


// .toUpperCase() --> convert the string to uppercase
codeupper= code.toUpperCase();
console.log(codeupper);    // returns JAVASCRIPT IS DIFFER FROM JAVA LANGUAGE


// .toUpperCase() --> convert the string to uppercase
codelower= code.toLowerCase();
console.log(codelower);    // returns javascript is differ from java language

//search()  --> search the value in string returns the starting index
var code="javascript is differ from java language";
console.log(code.search("differ"));     //return 14

console.log(code.search("buffer"));     // if you try to search word not in string it returns -1

//repeat(number) --> Returns a new string with a specified number of copies of an existing string
var str = "Javascript ";
console.log(str.repeat(3));  //returns Javascript Javascript Javascript
