function computerPlay(){
    let handOptions = ["Rock","Paper","Scissor"];
    return handOptions[Math.floor(Math.random()*handOptions.length)];
} 
function playRound(playerSelection, computerSelection) {
    if(playerSelection=="ROCK"){
        if(computerSelection=="ROCK")
            return (`Its a draw!`);
        else if(computerSelection=="PAPER")
            return (`You Lose!,Paper beats Rock`);
        else if(computerSelection=="SCISSOR")   
            return(`You Win!,Rock beats Scissor`); 
        else
            return(`Invalid Input`);           
    }
    else if(playerSelection=="PAPER"){
        if(computerSelection=="PAPER")
            return (`Its a draw!`);
        else if(computerSelection=="ROCK")
            return (`You Win!,Paper beats Rock`);
        else if(computerSelection=="SCISSOR")    
            return(`You Lose!,Rock beats Scissor`);
        else
            return(`Invalid Input`);    
    }
    else if(playerSelection=="SCISSOR"){
        if(computerSelection=="SCISSOR")
            return (`Its a draw!`);
        else if(computerSelection=="PAPER")
            return (`You Win!,Scissor beats Paper`);
        else if(computerSelection=="ROCK")    
            return(`You Lose!,Rock beats Scissor`);
        else
            return(`Invalid Input`);    
    }
    else
        return(`Invalid Input`);     
}

function game(){

    let score1=0,score2=0;
    let result;
    let playerSelection,computerSelection;
    for(let i=0;i<5;i++){
        playerSelection= prompt(`Rock,Paper or Scissor?`);
        playerSelection=playerSelection.toUpperCase();
        computerSelection=computerPlay().toUpperCase();
        result=playRound(playerSelection,computerSelection);
        console.log(result);
        if(result.charAt(4)==`W`){
            score1++;
            }
        else if(result.charAt(4)==`L`){
                score2++;
            }
        else
            continue;
    } 
    if(score1>score2){
        console.log(`Congratulations!,You have beaten the Computer with a score of ${score1} out of 5`);
    }
    else if(score1<score2){
        console.log(`Defeated!,The Computer has crushed you`);
    }  
    else
        console.log(`Amazing!,You have drawn this game by causing errors`)
}