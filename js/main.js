const [paper, scissors, rock] = document.querySelectorAll("[data-pick]"),
  elScorePlayer = document.querySelector("[data-player-score]"),
  elScoreComputer = document.querySelector("[data-computer-score]"),
  elPlayerResult = document.querySelector("[data-player-result]"),
  elComputerResult = document.querySelector("[data-computer-result]"),
  elResultText = document.querySelector("[data-result-text]");

let scorePlayer = 0,
  scoreComputer = 0;

if (window.innerWidth <= 576) {
  elScoreComputer.previousElementSibling.textContent = "Phone Score";
} else {
  elScoreComputer.previousElementSibling.textContent = "Computer Score";
}

document.addEventListener("click", (evt) => {
  clickPlayerChoice(evt);
  restartBtnClick(evt);
  resetBtnClick(evt);
});

function clickPlayerChoice(evt) {
  const el = evt.target.closest("[data-pick]");

  if (!el) return;

  const playerChoice = getPlayerChoice(el);
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, playerChoice, computerChoice);
}

function getComputerChoice() {
  const randomNum = Math.trunc(1 + Math.random() * 3);
  if (randomNum === 1) return "paper";
  else if (randomNum === 2) return "scissors";
  else return "rock";
}

function getPlayerChoice(el) {
  if (el === paper) {
    return "paper";
  } else if (el === scissors) {
    return "scissors";
  } else if (el === rock) {
    return "rock";
  } else return;
}

function getWinner(player, computer) {
  if (player === computer && computer !== "") {
    return "draw";
  } else if (player === "paper") {
    if (computer === "rock") {
      return "player";
    } else {
      return "computer";
    }
  } else if (player === "scissors") {
    if (computer === "paper") {
      return "player";
    } else {
      return "computer";
    }
  } else if (player === "rock") {
    if (computer === "paper") {
      return "computer";
    } else {
      return "player";
    }
  }
}

function showWinner(winner, playerChoice, computerChoice) {
  elComputerResult.parentElement.parentElement.classList.remove("hidden");
  elComputerResult.parentElement.parentElement.previousElementSibling.classList.add(
    "hidden"
  );

  elPlayerResult.src = `images/icon-${playerChoice}.svg`;
  elComputerResult.src = `images/icon-${computerChoice}.svg`;
  elPlayerResult.parentElement.className = `pick pick--${playerChoice}`;
  elComputerResult.parentElement.className = `pick pick--${computerChoice}`;

  if (winner === "player") {
    scorePlayer++;
    elScorePlayer.textContent = scorePlayer;
    elResultText.textContent = `YOU WIN`;
  } else if (winner === "computer") {
    scoreComputer++;
    elScoreComputer.textContent = scoreComputer;
    elResultText.textContent = `YOU LOSE`;
  } else if (winner === "draw") {
    elResultText.textContent = `DRAW`;
  }

  if (scoreComputer > 0 || scorePlayer > 0) {
    console.log(scoreComputer);
    console.log(scorePlayer);
    elComputerResult.parentElement.parentElement.nextElementSibling.classList.remove(
      "hidden"
    );
  }
}

function restartBtnClick(evt) {
  const el = evt.target.closest("[data-restart-btn]");

  if (!el) return;

  el.parentElement.parentElement.classList.add("hidden");
  el.parentElement.parentElement.previousElementSibling.classList.remove(
    "hidden"
  );
}

function resetBtnClick(evt) {
  const el = evt.target.closest("[data-reset-btn]");

  if (!el) return;

  scorePlayer = 0;
  scoreComputer = 0;
  elScorePlayer.textContent = scorePlayer;
  elScoreComputer.textContent = scoreComputer;
  elPlayerResult.parentElement.parentElement.classList.add("hidden");
  elPlayerResult.parentElement.parentElement.previousElementSibling.classList.remove(
    "hidden"
  );
  el.classList.add("hidden");
}
