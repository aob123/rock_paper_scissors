//const playerOne = "One";
const playerCPU = "CPU";

//Outputs a random number between 1 & 3.
function randomNumber(number) {
     return Math.ceil(Math.random()*3);  
}

const random = randomNumber();

console.log(random);

//Defines random as rock, paper or scissors.
function computerPlay() {
     
     if (random == 1) {
         return("Rock");
         } else if (random == 2) {
         return("Paper");
         } else {
         return("Scissors");
     }  
}

console.log(computerPlay());

//Allows the player to select rock, paper or scissors.
function playerSelection() {
    
 let playerRps = prompt("Please choose rock, paper or scissors");
 
     if (playerRps == "rock") {
         return("You choose rock");
         } else if (playerRps == "scissors") {
         return("You choose scissors");
         } else if (playerRps == "paper") {
         return("You choose paper");
     }
 }

 console.log(playerSelection());
 
 const computerSelection = computerPlay();

 function playRound(computerSelection, playerSelection) {
     
     if (playerSelection == "rock") {
         
         if (computerSelection == playerSelection) {
             return("It's a tie! Please play again..");
             } else if (computerSelection == "scissors") {
             return("You win! Rock beats scissors.");
             } else {
             return("You loose.. paper beats scissors");
         }
        
     }
     
 }
 
 console.log(playRound(computerSelection, playerSelection));
 