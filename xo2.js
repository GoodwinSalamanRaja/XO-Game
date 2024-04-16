let b1=document.getElementById("box1")
let b2=document.getElementById("box2")
let b3=document.getElementById("box3")
let b4=document.getElementById("box4")
let b5=document.getElementById("box5")
let b6=document.getElementById("box6")
let b7=document.getElementById("box7")
let b8=document.getElementById("box8")
let b9=document.getElementById("box9")
let player=true;
var currentuser;
function box(x){
    currentuser=(x==1)?box1:(x==2)?box2:(x==3)?box3:(x==4)?box4:(x==5)?box5:(x==6)?box6:(x==7)?box7:(x==8)?box8:(x==9)?box9:box9
    currentuser.style.color="red";
    currentuser.style.backgroundColor="black";
    currentuser.style.textShadow="3px 3px 19px yellow"
    if(player){
        currentuser.innerHTML="X";
        player=false;
    }
    else{
        currentuser.innerHTML="O"
        player=true;
    }
    currentuser.style.pointerEvents="none";
}
let w = setInterval(win,51)
function win(){
    if((b1.innerHTML=="X" && b2.innerHTML=="X" && b3.innerHTML=="X")||(b1.innerHTML=="X" && b4.innerHTML=="X" && b7.innerHTML=="X")||(b1.innerHTML=="X" && b5.innerHTML=="X" && b9.innerHTML=="X")||(b2.innerHTML=="X" && b5.innerHTML=="X" && b8.innerHTML=="X")||(b3.innerHTML=="X" && b6.innerHTML=="X" && b9.innerHTML=="X")||(b3.innerHTML=="X" && b5.innerHTML=="X" && b7.innerHTML=="X")||(b4.innerHTML=="X" && b5.innerHTML=="X" && b6.innerHTML=="X")||(b7.innerHTML=="X" && b8.innerHTML=="X" && b9.innerHTML=="X")){
       alert("X player wins")
       location.reload()
       clearInterval(w)
    }
    else if((b1.innerHTML=="O" && b2.innerHTML=="O" && b3.innerHTML=="O")||(b1.innerHTML=="O" && b4.innerHTML=="O" && b7.innerHTML=="O")||(b1.innerHTML=="O" && b5.innerHTML=="O" && b9.innerHTML=="O")||(b2.innerHTML=="O" && b5.innerHTML=="O" && b8.innerHTML=="O")||(b3.innerHTML=="O" && b6.innerHTML=="O" && b9.innerHTML=="O")||(b3.innerHTML=="O" && b5.innerHTML=="O" && b7.innerHTML=="O")||(b4.innerHTML=="O" && b5.innerHTML=="O" && b6.innerHTML=="O")||(b7.innerHTML=="O" && b8.innerHTML=="O" && b9.innerHTML=="O")){
        alert("O player wins")
        location.reload()
        clearInterval(w)
    }
}
function restart(){
    location.reload();
}
let d=setInterval(draw,51) 
function draw(){
    let counts=[]
    let boxes=document.querySelectorAll(".box")
    boxes.forEach(y => {
        counts.push(y.innerHTML)
    })
    if(!counts.includes("")){
        alert("Match draw")
        location.reload();
        clearInterval(d)
    }
}   





