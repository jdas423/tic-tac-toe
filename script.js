


const arr=[];
arr[0]=[-1,2,1,6,8,-1,3,-1,4];
arr[1]=[2,-1,0,-1,7,-1,-1,4,-1];
arr[2]=[1,0,-1,-1,6,8,4,-1,5];
arr[3]=[6,-1,-1,-1,5,4,0,-1,-1];
arr[4]=[8,7,6,5,-1,3,2,1,0];
arr[5]=[-1,-1,8,4,3,-1,-1,-1,2];
arr[6]=[3,-1,4,0,2,-1,-1,8,7];
arr[7]=[-1,4,-1,-1,1,-1,8,-1,6];
arr[8]=[4,-1,5,-1,0,2,7,6,-1];

const startBtn=document.getElementById("bn1");
const resetBtn= document.getElementById("bn2");
const currPlayer=document.getElementsByClassName("currPlayer")[0];
const result=document.getElementsByClassName("res")[0];
const inputBlock= Array.from(document.getElementsByClassName("dimensions"));
let player=0,freq=0,b=0;
const occ1=[0,0,0,0,0,0,0,0,0],occ2=[0,0,0,0,0,0,0,0,0];


startBtn.addEventListener("click",()=>{
    if(freq==0){
        currPlayer.innerHTML="Player 1's turn";
        player=1;
        startBtn.classList.add("btn-clr");
    }
    })
    

for (let block of inputBlock){
    block.addEventListener("click",()=>{
       if(!block.classList.contains("selected") && player!=0)
       {
        freq++;
        console.log(freq);
        block.classList.add("selected");
        num=block.id[1];
        if(player==1) {
            block.innerHTML="X";
            occ1[num]=1;
        }
        else{
            block.innerHTML="O";
            occ2[num]=1;
        }
        check(num);
       }
    })
}

function check(num){
    if(player==1)
    {
        for(let i=0;i<9;i++){
            if(occ1[i]==1 && arr[num][i]>-1 && occ1[arr[num][i]]==1){
                result.innerHTML="Player 1 wins";
                player=0;
                b=1;
                break;
            }
        }
    }
    else{
        for(let i=0;i<9;i++){
            if(occ2[i]==1 && arr[num][i]>-1 && occ2[arr[num][i]]==1){
                result.innerHTML="Player 2 wins";
                player=0;
                b=1;
                break;
            }
        }
         }
    
    currentPlayer();
}

function currentPlayer(){
    if(freq==9 && b==0) {
        currPlayer.innerHTML="GAME ENDED!!!";
        result.innerHTML="Draw";
    }
    else if(player==1) {
        currPlayer.innerHTML="Player 2's turn";
       player=2;
     }
    else if(player==2) {
        currPlayer.innerHTML="Player 1's turn";
        player=1;
    }
    else currPlayer.innerHTML="GAME ENDED!!!";   
}

resetBtn.addEventListener("click",()=>{
    freq=0;
    player=0;
    b=0;
    for(let i=0;i<9;i++){
        if(inputBlock[i].classList.contains("selected")){
        inputBlock[i].classList.remove("selected");
        inputBlock[i].innerHTML="";
        }
    }
    result.innerHTML="";
    currPlayer.innerHTML="";
    for(let i=0;i<9;i++){
        occ1[i]=0;
        occ2[i]=0;
    }
    if(startBtn.classList.contains("btn-clr")){
        startBtn.classList.remove("btn-clr");
    }
})



        