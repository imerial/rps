// 1 = Rock
// 2 = Paper
// 3 = Scissors

// Rock > Scissors, Rock < Paper, Rock = Rock, Paper

// let playerSelection = parseInt(prompt("Choose Rock 1 , paper 2 or Scisors 3"));
// let playerSelection = Math.floor(Math.random() * 3 + 1);
const playerSelection = () => {
  choice = Math.floor(Math.random() * 3 + 1);
  //   choice = 1;
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else if (choice === 3) {
    return "scissors";
  }
};
const computerPlay = () => {
  choice = Math.floor(Math.random() * 3 + 1);
  //   choice = 3;
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else if (choice === 3) {
    return "scissors";
  }
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return "draw";
  } else {
    return "nothing yet";
  }
};

console.log("Player selection = ", playerSelection());
console.log("Computer Selection = ", computerPlay());
console.log(
  "The winner is ",
  playRound(playerSelection().toString(), computerPlay().toString())
);
