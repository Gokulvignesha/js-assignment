// Javascript Array Methods

var fruits = ["Banana", "Orange", "Apple", "Mango"];

// toString() --> this converts an array to a string of (comma separated) array values.
console.log(fruits.toString());     // returns  Banana,Orange,Apple,Mango

//join() --> this method joins all array elements into a single string.
console.log(fruits.join(" * "));        // returns Banana * Orange * Apple * Mango

//pop() --> this method removes the last element from an array
// NOTE :- pop returns the removed value
console.log(fruits.pop());      // returns Mango

//push() --> this method adds the element at the end of the array
// NOTE :- push also returns length of the new array.
console.log(fruits.push("Watermelon","Kiwi"));     // returns 5
console.log(fruits)    // returns [ 'Banana', 'Orange', 'Apple', 'Watermelon', 'Kiwi' ]

//shift() --> Shifting is equivalent to popping, working on the first element instead of the last.
console.log(fruits.shift())  //returns Banana

//unshift() --> This method adds a new element to an array (at the beginning).
console.log(fruits.push("Lemon","Avacado"));     // returns 6
console.log(fruits)     // returns [ 'Orange', 'Apple', 'Watermelon', 'Kiwi', 'Lemon', 'Avacado' ]