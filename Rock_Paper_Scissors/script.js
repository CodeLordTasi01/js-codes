let computerScore = 0;
let userScore = 0;

// DOM Elements
const computerScoreSpan = document.querySelector(".computer-score");
const userScoreSpan = document.querySelector(".user-score");
const userChoiceBtns = document.querySelectorAll(".user-choice-btn");
const result = document.querySelector(".result");

// Computer's choice function
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Game logic
function playRound(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("User:", userChoice, "Computer:", computerChoice);

  if (userChoice === computerChoice) {
    result.textContent = `It's a tie! Both chose ${userChoice}.`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    result.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    result.textContent = `Computer wins! ${computerChoice} beats ${userChoice}.`;
  }

  computerScoreSpan.textContent = computerScore;
  userScoreSpan.textContent = userScore;
}

// Add event listeners
userChoiceBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const userChoice = btn.getAttribute("data-choice");
    console.log("User Choice from Button:", userChoice); // Debugging line
    playRound(userChoice);
  });
});
