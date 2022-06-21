let items=["rock","paper","scissor"];
function computerplay(){
return items[Math.floor(Math.random()*items.length)];
}


function play(cs, ps){
   if(cs==="rock" && ps==="paper"){
       alert("you win");
   }
   else if(cs==="rock" && ps==="scissor"){
       alert("you lose");
   }
   else if(cs==="rock" && ps==="rock"){
       alert("tie");
   }
   else if(cs==="paper" && ps==="scissor"){
       alert("you win");
   }
   else if(cs==="paper" && ps==="rock"){
       alert("you lose");
   }
   else if(cs==="paper" && ps==="paper"){
       alert("tie");
   }
   else if(cs==="scissor" && ps==="scissor"){
       alert("tie");
   }
   else if(cs==="scissor" && ps==="rock"){
       alert("you win");
   }
   else if(cs==="scissor" && ps==="paper"){
       alert("you lose");
   }
}
function game(){
   for (let i = 0; i < 5; i++) {
    
    let cs=computerplay();
    let ps=prompt("enter ur choice").toLowerCase();
    play(cs,ps);
      
      
       
   }
}
game();
