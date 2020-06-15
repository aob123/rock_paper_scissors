function game(){

    

    //Returns a random selection for the computer player 
    function computerPlay() {
      let selection = ["rock", "paper", "scissors"];
      const randomNumber = Math.floor(Math.random()*3);
      return selection[randomNumber];
      
    }
    
    //Prompts the user to enter a choice
      function userPlay() {
      let userChoice = "Hello"; //prompt("Please enter rock, paper or scissors");
      return userChoice; 
    }
    
    let computerChoice = computerPlay();
    const userChoice = userPlay();

    //Conditions for a round
    function playRound(userChoice = "something") {

    if (userChoice === "rock") {

        if (computerChoice === "rock") {
            return "It's a draw";
        } else if (computerChoice === "scissors") {
            return "Rock beats scissors, user wins!";
        } else {
            return "Paper beats rock, you lose!";
        }

    } else if (userChoice === "paper") {
           
        if (computerChoice === "paper") {
            return "It's a draw";
        } else if (computerChoice === "rock") {
            return "Paper beats rock, user wins!";
        } else {
            return "Scissors beats paper, you lose!";
        }

    } else if (userChoice === "scissors") {

        if (computerChoice === "scissors") {
            return "It's a draw";
        } else if (computerChoice === "paper") {
            return "Scissors beats paper, user wins!";
        } else {
            return "Rock beats scissors, you lose!";
        }
         
    } else {
        return "Please make a valid choice (rock, paper or scissors).";
    }
}

    //Line 77 outputs which choices user and computer have made in console.
    console.log("User picks" + " " + userChoice + "," + " computer picks " + computerChoice);
    console.log(playRound(userChoice, computerChoice));

    const rock = document.getElementsByClassName('rock');
    const paper = document.getElementsByClassName('paper');
    const scissors = document.getElementsByClassName('scissors');


    rock[1].addEventListener('click', playRound)


}






 // Game loop
/**for (let i = 1; 
     i < 6; 
     i++) {
     console.log("Round:" + i);
     game();
}
**/

/** const btn = document.getElementsByClassName('rock');

btn[0].addEventListener('click', buttonClicked);

function buttonClicked(ev) {
    console.log("Ive been clicked");
} */




