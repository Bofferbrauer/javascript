let hello = "Want to play a game of rock-paper-scissors in the console?";
alert(hello)

function playRound(playerSelection, computerSelection) {

      let player = prompt("Rock, Paper or Scissors? :");
      playerSelection = player.toLowerCase();
      console.log(playerSelection);

      const choices = ["rock", "paper", "scissors"];
      computerSelection = choices[Math.floor(Math.random() * choices.length)];
      console.log(computerSelection);

      
}

function game() {
      for (let i = 5; i > 0; i--) {
            

            
      }
      
}