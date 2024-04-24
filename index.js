

const startButton = document.getElementById('start-btn');
const humanCard = document.getElementById('human-card');
const computerCard = document.getElementById('computer-card');
const result = document.getElementById('result');
const humanScoreElement = document.getElementById('human-score');
const computerScoreElement = document.getElementById('computer-score');
const humanElement = document.getElementById('human');
const scoreboardClass = document.getElementsByClassName('scoreboard');




let deckId;
let humanScore = 0;
let computerScore = 0;

startButton.addEventListener('click', startNewGame);


function startNewGame() {
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => response.json())
    .then(data => {
      deckId = data.deck_id;
      startButton.disabled = false;
      startGame();
    });
}

function startGame() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(response => response.json())
    .then(data => {
      const cards = data.cards;
      humanCard.innerHTML = `<img src="${cards[0].image}" alt="${cards[0].value} of ${cards[0].suit}">`;
      computerCard.innerHTML = `<img src="${cards[1].image}" alt="${cards[1].value} of ${cards[1].suit}">`;
      checkWinner(cards[0], cards[1]);
    });
}

function checkWinner(card1, card2) {
  const humanValue = getValue(card1.value);
  const computerValue = getValue(card2.value);

  if (humanValue > computerValue) {
    result.textContent = 'Congrats Human, you win!';
    humanScore++;
  } else if (humanValue < computerValue) {
    result.textContent = 'Uh oh, Computer wins!';
    computerScore++;
  } else {
    result.textContent = 'It\'s a tie!';
  }

  updateScores();

  if (humanScore < 10 && computerScore < 10) {
    startButton.disabled = false;
  } else {
    endGame();
  }
}


document.addEventListener("keydown", function() {
  humanScoreElement.textContent = 'Good Guy';
});

document.addEventListener("keyup", function() {
  humanScoreElement.textContent = "Human";
});

startButton.addEventListener("mouseover", function(event) {
  event.target.style.backgroundColor = "blue";
});

startButton.addEventListener("mouseout", function(event) {
  event.target.style.backgroundColor = "red";
});


function endGame() {
  if (humanScore === 10) {
    alert('HUMAN WINS! You should be proud. Go get yourself some ice cream!');
    resetScoreboard();
  } else if (computerScore === 10) {
    alert('YOU LOSE. There\'s always next time!')
    resetScoreboard();
  }
}

function resetScoreboard() {
  humanScore = 0;
  computerScore = 0;
  updateScores();
}

function updateScores() {
  humanScoreElement.textContent = `Human: ${humanScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
}

function getValue(cardValue) {
  if (cardValue === 'KING') return 13;
  if (cardValue === 'QUEEN') return 12;
  if (cardValue === 'JACK') return 11;
  if (cardValue === 'ACE') return 14;
  return parseInt(cardValue);
}
