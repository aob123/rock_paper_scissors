let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let userChoice = document.getElementById("userChoice"); //Shows which hand the user picked.
let computerChoice = document.getElementById("computerChoice");

const computerSelection = computerPlay();
const playerSelection = userSelection();

let playerScore = 0;
let computerScore = 0;
let winRoundPlayer = 0;
let winRoundComputer = 0;


function computerPlay(){
  
  let cpuRandom = Math.floor(Math.random() * 3 + 1);
  
  if (cpuRandom === 1) {
      return "rock";
    } else if (cpuRandom === 2) {
      return "paper";
    } else if (cpuRandom === 3){
      return "scissors";
    }

    
}

function appendComputerPlay(computerSelection){

let getComputerChoice = document.getElementById("computerChoice");

if (computerSelection === "rock"){

  getComputerChoice.textContent = "Rock";
  return "Rock";
  
} else if (computerSelection === "paper") {

  getComputerChoice.textContent = "Paper";
  return "Paper";

} else if (computerSelection === "scissors") {

  getComputerChoice.textContent = "Scissors";
  return "Scissors";

} else {

  getComputerChoice.textContent = "TEST";
  return "TEST";
}

}


function userSelection() {
  
  rock.addEventListener("click", () => {
    userChoice.textContent = "Rock";
    let playerInput = "rock";
    let computerSelection = computerPlay();
    playRound(playerInput, computerSelection);
  })
  
  paper.addEventListener("click", () => {
    userChoice.textContent = "Paper";
    let playerInput = "paper";
    let computerSelection = computerPlay();
    playRound(playerInput, computerSelection);
  })
  
  scissors.addEventListener("click", () => {
    userChoice.textContent = "Scissors";
    let playerInput = "scissors";
    let computerSelection = computerPlay();
    playRound(playerInput, computerSelection);
  })
  
  

}



function playRound(playerSelection, computerSelection) {

  let winMessage = document.getElementById("winMessage");

  let returnMessage = ["It's a tie",
                       "You win!",
                       "You lose."]
                       
                         

  if (playerSelection === "rock") {

    if (computerSelection === "rock") {
      winMessage.textContent = returnMessage[0] + ".";
    
    } else if (computerSelection === "scissors") {
      playerScore++;
      winMessage.textContent = returnMessage[1] + " " + playerSelection + " beats " + computerSelection + ".";
    
    } else {
      computerScore++;
      winMessage.textContent = returnMessage[2] + " " + computerSelection + " beats " + playerSelection + ".";
    }
    
  }

  if (playerSelection === "paper") {
    
    if (computerSelection === "paper") {
      
      winMessage.textContent = returnMessage[0] + "."
    
    } else if (computerSelection === "rock") {
      
      winMessage.textContent = returnMessage[1] + " " + playerSelection + " beats " + computerSelection + ".";
      playerScore++;
    
    } else {
      winMessage.textContent = returnMessage[2] + " " + computerSelection + " beats " + playerSelection + ".";
      computerScore++;
    }
  }

  if (playerSelection === "scissors") {
    
    if (computerSelection === "scissors") {
      winMessage.textContent = returnMessage[0] + ".";
    
    } else if (computerSelection === "paper") {
      winMessage.textContent = returnMessage[1] + " " + playerSelection + " beats " + computerSelection + ".";
      playerScore++;
    
    } else {
      winMessage.textContent = returnMessage[2] + " " + computerSelection + " beats " + playerSelection + ".";
      computerScore++;
    }
  }

  calcScores(playerScore, computerScore);
  appendComputerPlay(computerSelection);
}

function calcScores(playerScore, computerScore) {

  let winMessage = document.getElementById("winMessage");


console.log("Player; " + playerScore + " | " + "Computer; " + computerScore);



if (playerScore === 5 && computerScore === 5) {
    winMessage.textContent = "This round is a tie. Pick a hand to play next round."
    reset();
  } else if (playerScore === 5 && computerScore < 5) {
    winMessage.textContent = "Player wins this round!! Pick a hand to play next round.";
    winRoundPlayer++;
    reset();
  } else if (playerScore < 5 && computerScore === 5) {
    winMessage.textContent = "Computer wins this round!! Pick a hand to play next round.";
    winRoundComputer++;
    reset();
}

if (playerScore == 1) {
  document.getElementById("userNumber").textContent= "1";

  } else if (playerScore == 2) {
    document.getElementById("userNumber").textContent= "2";

  } else if (playerScore == 3) {
    document.getElementById("userNumber").textContent= "3";

  } else if (playerScore == 4) {
    document.getElementById("userNumber").textContent= "4";

  } else if (playerScore >= 5) {
    document.getElementById("userNumber").textContent= "5";
    
  } else {
    
    document.getElementById("userNumber").textContent= "0";
}

if (computerScore == 1) {
  document.getElementById("computerNumber").textContent= "1";

  } else if (computerScore == 2) {
    document.getElementById("computerNumber").textContent= "2";

  } else if (computerScore == 3) {
    document.getElementById("computerNumber").textContent= "3";

  } else if (computerScore == 4) {
    document.getElementById("computerNumber").textContent= "4";

  } else if (computerScore >= 5) {
    document.getElementById("computerNumber").textContent= "5";
    
  } else {
  
    document.getElementById("computerNumber").textContent= "0";
}

}

function reset(){
  playerScore = 0;
  computerScore = 0;

  let playerRoundWinNumber = document.getElementById("playerRoundWinNumber");
  let computerRoundWinNumber = document.getElementById("computerRoundWinNumber");

  playerRoundWinNumber.innerHTML = winRoundPlayer;
  computerRoundWinNumber.innerHTML = winRoundComputer;
}
