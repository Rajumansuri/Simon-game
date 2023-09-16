let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let btns = ['yellow', 'red', 'purple', 'green'];

let p = document.querySelector("p");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game has started.");
        started = true;
        levelUp();
    }
    
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 300)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function (){
        btn.classList.remove("userFlash");
    }, 300)
}

function levelUp(){
    userSeq = [];
    level++;
    p.innerText = `Level ${level}`;

    let randmIdx = Math.floor(Math.random()*3);
    let randmColor = btns[randmIdx];
    let randmBtn = document.querySelector(`.${randmColor}`);
    gameSeq.push(randmColor);
    console.log(gameSeq);
    gameFlash(randmBtn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        p.innerHTML = `Game over!Your score was <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }),250
        reset();
    }

}

function btnPress(){
    let btn= this;
    gameFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", btnPress);
} 

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}