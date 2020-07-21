var i=0;
var n=prompt("Enter which tables you want")
var doc=document.getElementById("head");
doc.innerText=`${n} Multiplication table is displayed below `;
for (i = 0; i <= 10; i++)  
{ 
    document.write(`${n} x ${i} = ${n*i} `);
    document.write("<br>") 
} 
