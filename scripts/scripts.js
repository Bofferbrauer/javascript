let hello = "Want to play a game of rock-paper-scissors in the console?";
alert(hello)


let player = prompt("Rock, Paper or Scissors? :");
playerSelection = player.toLowerCase();
 console.log(playerSelection);

const choices = ["rock", "paper", "scissors"];
computerSelection = choices[Math.floor(Math.random() * choices.length)];
console.log(computerSelection);

      

function game() {
      for (let rounds = 5; rounds > 0; rounds--) {
            if (computerSelection == playerSelection) {
                  return "It's a Draw"
            }

            else if (computerselection = "rock" && (playerSelection = "paper")) {
                  return "You won! Paper beats Rock."
            }
            else if (computerselection = "rock" && (playerSelection = "scissors")) {
                  return "You lost! Rock beats Scissors."
            }
            else if (computerselection = "paper" && (playerSelection = "rock")) {
                  return "You lost! Paper beats Rock."
            }
            else if (computerselection = "paper" && (playerSelection = "scissors")) {
                  return "You won! Scissors beat Paper."
            }
            else if (computerselection = "scissors" && (playerSelection = "rock")) {
                  return "You won! Rock beats Scissors."
            }
            else if (computerselection = "scissors" && (playerSelection = "paper")) {
                  return "You lost! Scissors beat Paper."
            }
            else return "wrong input"

            
      }
      
}