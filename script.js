console.log("Welcome to Tic Tac TOe")
let turn="X";
let gameover=false;
//Functio to change the turn
const changeTurn = ()=>{
    return turn ==="X"?"O":"X"
}
//Function to check for a win
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
wins.forEach(e=>{
    if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText===boxtexts[e[2]].innerText)&&(boxtexts[e[0]].innerText!== "")){
        document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" Won!"
        gameover= true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"

    }
})
}
//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn= changeTurn();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
        }


    })
})
//Reset Button
reset.addEventListener('click',()=>{
    let boxtextss=document.querySelectorAll('.boxtext');
    Array.from(boxtextss).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    gameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"


})