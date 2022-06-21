canvas=document.getElementById("myCanvas"); 
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.trokeStyle= "red"; 
ctx.rect (150, 143, 430, 200);
ctx.lineWidth = 1;
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle - "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40,0,2*Math.PI); 
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle - "black";
ctx.lineWidth = 5;
ctx.arc(330, 210, 40,0,2*Math.PI); 
ctx.stroke();
