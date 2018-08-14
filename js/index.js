

//score variables
let botScore = 0
let playerScore = 0

//track botScore
function increaseBotScore(){
    botScore+=1;
    document.getElementById("computerScore").innerHTML = botScore;
    displayCompleteMessage('You Lose!')
}

//track playerScore
function increasePlayerScore(){
    playerScore+=1;
    document.getElementById("humanScore").innerHTML = playerScore;
    displayCompleteMessage('You Win!')
}

// function to display win or lost message
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}



// i set the math .random method to the variale computerChoice
let computerChoice = Math.random();

//  i am creating an if condition that will determine what symbol (rock, paper, scissors) the computer will choose.
if(computerChoice <= 0.33)
// if computerChoice is les than or equal to 0.33 in math.random, then it is rock
{
  computer = "Rock"

}else if (computerChoice > 0.33 && computerChoice <= 0.66)
// if the computerChoice is greater than .33 and less than or equal to .66 then it is paper
{
  computerChoice = "Paper"

}else
// anything else is paper
{
  computerChoice = "Scissors"
}
