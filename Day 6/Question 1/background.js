var i=0;
function change(){
    var color=["orangered","pink","plum","limegreen","lavender"];
    var doc=document.getElementById("body");
    doc.style.backgroundColor= color[i];
    i=(i+1) % color.length
}
setInterval(change , 5000);