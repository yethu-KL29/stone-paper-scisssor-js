let items=["rock","paper","scissor"];
function computerplay(){
return items[Math.floor(Math.random()*items.length)];
}


function play(cs, ps){
   if(cs==="rock" && ps==="paper"){
       alert("you win");
       var div = document.getElementById('p1');
       div.innerHTML += '1';
   }
   else if(cs==="rock" && ps==="scissor"){
       alert("you lose");
       var div = document.getElementById('p2');

       div.innerHTML += '1';
   }
   else if(cs==="rock" && ps==="rock"){
       alert("tie");
      
   }
   else if(cs==="paper" && ps==="scissor"){
       alert("you win");
       var div = document.getElementById('p1');
       div.innerHTML += '1';
   }
   else if(cs==="paper" && ps==="rock"){
       alert("you lose");
       var div = document.getElementById('p2');
       div.innerHTML += '1';
   }
   else if(cs==="paper" && ps==="paper"){
       alert("tie");
      
   }
   else if(cs==="scissor" && ps==="scissor"){
       alert("tie");
       
   }
   else if(cs==="scissor" && ps==="rock"){
       alert("you win");
       var div = document.getElementById('p1');
       div.innerHTML += '1';
   }
   else if(cs==="scissor" && ps==="paper"){
       alert("you lose");
       var div = document.getElementById('p2');
       div.innerHTML += '1';
   }
}

let cs=computerplay();
let ps=("enter ur choice").toLowerCase();
   
      
      
    

const btn = document.querySelectorAll('div.content button');

btn.forEach((btn) => {
btn.addEventListener('click',function(e){
if(e.target.className==='rock' || e.target.className==='paper' ||e.target.className==='scissor'){
console.log(e.target.className)
ps = e.target.className;

}
let cs=computerplay();
play(cs,ps);
var text = document.getElementById('p1').innerHTML;
console.log(text);
});

});


