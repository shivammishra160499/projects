let sum1=0;
let sum2=0;
let count=6;
function play(player){
    let turn = document.getElementById("turn");
    let turnval=parseInt(turn.textContent);
    if(turnval==player && count>0)
    {  
        let current=1+Math.floor(Math.random()*6);

        let score=document.getElementById(`player${player}Score`)
        score.textContent=current
        let playerSum=document.getElementById(`player${player}Sum`);
        let sum=parseInt(playerSum.textContent)||0;
        playerSum.innerText=sum+current;
        
       turn.textContent = 2 - (turnval - 1);
       count--;
       if(player==1)
       sum1+=current;
    else
    sum2+=current;
        if(count==0)
        {
            if(sum1>sum2)
            turn.innerHTML="player1 won the match";
           if(sum1==sum2)
           turn.innerHTML="match drow";
        else
        turn.innerHTML="player2 won the match";
        }

    }
 
 
}
function restart(){
    sum1 = 0;
    sum2 = 0;
    count = 6;

    document.getElementById('player1Score').textContent = 0;
    document.getElementById('player1Sum').innerText = 0;
    document.getElementById('player2Score').textContent = 0;
    document.getElementById('player2Sum').innerText = 0;
     
};