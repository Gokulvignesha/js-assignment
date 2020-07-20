var num=Number(prompt("Enter the Number"));
var arr=[];
for(let i=1 ; i<=num;i++){
      arr.push(i);
}
cube_of_odd= arr.filter(val => val%2 !=0).map(val => val**3);
odd_numbers=arr.filter(val => val%2 !=0);
for(let j=0;j<odd_numbers.length;j++){
    console.log(`Cube Value of ${odd_numbers[j]} is ${cube_of_odd[j]}`);
}