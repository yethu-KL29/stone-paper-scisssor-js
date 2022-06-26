let player = 0;
let computer = 0;

let items=["rock","paper","scissor"];
function computerplay(){
return items[Math.floor(Math.random()*items.length)];
}
const container = document.querySelector('#para');
const win=document.querySelector('#win');
container.textContent = "you :"+player+" "+"computer :"+computer;
let count=0;




function play(cs, ps){
   if(cs==="rock" && ps==="paper"){
       alert("you win");
       player+=1;
    container.textContent = "you :"+player+" "+"computer :"+computer;
    count++;
       
   }
   else if(cs==="rock" && ps==="scissor"){
       alert("you lose");
       computer+=1;
       container.textContent = "you :"+player+" "+"computer :"+computer;
       count++;
   }
   else if(cs==="rock" && ps==="rock"){
       alert("tie");
       count++;
   }
   else if(cs==="paper" && ps==="scissor"){
       alert("you win");
       player+=1;
       container.textContent = "you :"+player+" "+"computer :"+computer;
       count++;
   }
   else if(cs==="paper" && ps==="rock"){
       alert("you lose");
       computer+=1;
       container.textContent = "you :"+player+" "+"computer :"+computer;
       count++;
   }
   else if(cs==="paper" && ps==="paper"){
       alert("tie");
       count++;
      
   }
   else if(cs==="scissor" && ps==="scissor"){
       alert("tie");
       count++;
       
   }
   else if(cs==="scissor" && ps==="rock"){
       alert("you win");
       player+=1;
       container.textContent = "you :"+player+" "+"computer :"+computer;
       count++;
       
   }
   else if(cs==="scissor" && ps==="paper"){
       alert("you lose");
       computer+=1;
       container.textContent = "you :"+player+" "+"computer :"+computer;
       count++;
   }
}

let cs=computerplay();
let ps=("enter ur choice").toLowerCase();
   
const div = document.querySelector('#win'); 
div.setAttribute('style', 'color: blue; font-size:50px; ');  
      
      
    

const btn = document.querySelectorAll('div.content button');

btn.forEach((btn) => {
btn.addEventListener('click',function(e){
if(e.target.className==='rock' || e.target.className==='paper' ||e.target.className==='scissor'){
console.log(e.target.className)
ps = e.target.className;

}
if(count<5){
    let cs=computerplay();
    play(cs,ps);
}
else{
    checkwin();
}


});

});
function checkwin(){
    if(player > computer){
        win.textContent = "you win";
    }
    else if(player < computer)
        win.textContent = "you lose";
    
}





    

    
    
