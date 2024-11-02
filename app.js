let gameseq=[];
let userseq=[];
let a=5;
let started=false;
let level=0;
let h2=document.querySelector("h2")
let color=["red","blue","green","yellow"]
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started")
        started=true;
        levelup();
    }
})
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);}


function levelup(){
    userseq=[]
    level++;
    h2.innerText="level  "+level;
    let random=Math.floor(Math.random()*4);
    let randcol=color[random]
    let randbtn=document.querySelector(`.${randcol}`);
    gameseq.push(randcol)
    console.log(gameseq)
    gameflash(randbtn);
}

function checkans(inx){
    // console.log("current level: ",level)
    if(userseq[inx]==gameseq[inx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerText="game over,your score was "+level+"\n press any key to start ";
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150)
        reset();
    }
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[]
    level=0;
}

function btnpress(){
    let btn=this;
    userflash(btn);
    usercolour=btn.getAttribute("id")
    userseq.push(usercolour)
    checkans(userseq.length-1);
    
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

