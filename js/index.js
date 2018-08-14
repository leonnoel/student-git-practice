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
