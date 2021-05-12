let cardList = new Array('angularCard', 'jsCard', 'flutterCard', 'javaCard', 'laravelCard', 'reactCard', 'sprinCard', 'vueCard',
  'angularCard', 'jsCard', 'flutterCard', 'javaCard', 'laravelCard', 'reactCard', 'sprinCard', 'vueCard');
let firstCardContent = '', secondCardContent = '', secondCardElement, firstCardElement; counterMatches = 0; clickDisabled = true,
  gameStarted = false, playerCounter = 0, scorePlayer1 = 0, scorePlayer2 = 0;
cardList = shuffle(cardList);

function hideButton() {
  let buttonElement = document.getElementById(`buttonPlay`);
  buttonElement.style.display = "none";
}
function showPlayButton() {
  let buttonElement = document.getElementById(`buttonPlay`);
  buttonElement.innerHTML = "Reiniciar";
  buttonElement.style.display = "inline-block";
}
function restartGame() {
  cardList = shuffle(cardList);
  firstCardContent = '', secondCardContent = '', counterMatches = 0, clickDisabled = true,
    playerCounter = 0, scorePlayer1 = 0, scorePlayer2 = 0;
  var element = document.getElementById(`score`);
  element.innerHTML = `Pontuação Jogador 1: ${scorePlayer1}<br>Pontuação Jogador 2: ${scorePlayer2}`;
}
function startGame() {
  if (gameStarted) {
    restartGame();
  }
  hideButton();
  setTimeout(() => {
    for (let i = 0; i < 16; i++) {
      console.log(cardList[i])
      console.log(i)
      const card = document.getElementById(`card ${i}`);
      console.log(card)
      card.src = `./assets/${cardList[i]}.png`;
    }
  }, 100);
  setTimeout(() => {
    for (let i = 0; i < 16; i++) {
      const card = document.getElementById(`card ${i}`);
      card.src = "./assets/backcard.jpg";
    }
  }, 2000);
  clickDisabled = false;
  gameStarted = true;
}
function cardClicked(cardId) {
  if (clickDisabled)
    return;
  const card = document.getElementById(`card ${cardId}`);
  const cardNotClicked = card.src.match("backcard")
  if (cardNotClicked) {
    turnCard();
    const firstCardNotClicked = firstCardContent === ''
    const secondCardNotClicked = secondCardContent === ''
    if (firstCardNotClicked) {
      firstCardContent = cardList[cardId];
      firstCardElement = card;
    } else if (secondCardNotClicked) {
      secondCardContent = cardList[cardId];
      secondCardElement = card;
    }
  }
  const bothCardClicked = firstCardContent !== '' && secondCardContent !== '';
  if (bothCardClicked) {
    playerCounter++;
    if (firstCardContent !== secondCardContent) {
      clickDisabled = true;
      setTimeout(function () {
        untapCards();
        resetCardsContent();
        clickDisabled = false;
      }, 700);
    }
    else {
      if (playerCounter % 2 === 0)
        scorePlayer2++;
      else
        scorePlayer1++;
      counterMatches++;
      resetCardsContent();
      displayScoreMessage();
    }
    if (counterMatches === 8) {
      displayGameOverMessage();
    }
  }

  function untapCards() {
    firstCardElement.src = "./assets/backcard.jpg";
    secondCardElement.src = "./assets/backcard.jpg";
  }

  function turnCard() {
    card.src = `./assets/${cardList[cardId]}.png`;
  }

  function resetCardsContent() {
    firstCardContent = '';
    secondCardContent = '';
  }

  function displayScoreMessage() {
    let score = document.getElementById(`score`);
    score.innerHTML = `Pontuação Jogador 1: ${scorePlayer1}<br>Pontuação Jogador 2: ${scorePlayer2}`;
  }

  function displayGameOverMessage() {
    setTimeout(function () {
      if (scorePlayer1 > scorePlayer2)
        alert(`Fim do Jogo\nJogador 1 ganhou!!\nResultado do jogo: ${scorePlayer1} a ${scorePlayer2}`);
      else if (scorePlayer1 < scorePlayer2)
        alert(`Fim do Jogo\nJogador 2 ganhou!!\nResultado do jogo: ${scorePlayer2} a ${scorePlayer1}`);
      else
        alert("Fim do Jogo\nEmpate.");
      showPlayButton();
    }, 1200);
  }
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
} 