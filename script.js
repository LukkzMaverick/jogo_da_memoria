let cardList = new Array('angularCard', 'jsCard', 'flutterCard', 'javaCard', 'laravelCard', 'reactCard', 'sprinCard', 'vueCard',
  'angularCard', 'jsCard', 'flutterCard', 'javaCard', 'laravelCard', 'reactCard', 'sprinCard', 'vueCard');
let firstCardContent = '', secondCardContent = '', secondCardElement, firstCardElement; counterMatches = 0; clickDisabled = true,
  gameStarted = false, playerCounter = 0, scorePlayer1 = 0, scorePlayer2 = 0;
cardList = shuffle(cardList);

function hideButton() {
  let btnElement = document.getElementById(`buttonPlay`);
  btnElement.style.display = "none";
}
function showPlayButton() {
  let btnElement = document.getElementById(`buttonPlay`);
  btnElement.innerHTML = "Reiniciar";
  btnElement.style.display = "inline-block";
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
      const carta = document.getElementById(`carta ${i}`);
      carta.src = `./assets/${cardList[i]}.png`;
    }
  }, 100);
  setTimeout(() => {
    for (let i = 0; i < 16; i++) {
      const carta = document.getElementById(`carta ${i}`);
      carta.src = "./assets/backcard.jpg";
    }
  }, 2000);
  clickDisabled = false;
  gameStarted = true;
}
function cardClick(idCarta) {
  if (clickDisabled)
    return;
  const carta = document.getElementById(`carta ${idCarta}`);
  const cartaNaoClicada = carta.src.match("backcard")
  if (cartaNaoClicada) {
    virarCarta();
    const firstCardNotClicked = firstCardContent === ''
    const secondCardNotClicked = secondCardContent === ''
    if (firstCardNotClicked) {
      firstCardContent = cardList[idCarta];
      firstCardElement = carta;
    } else if (secondCardNotClicked) {
      secondCardContent = cardList[idCarta];
      secondCardElement = carta;
    }
  }
  const ambasCartasClicadas = firstCardContent !== '' && secondCardContent !== '';
  if (ambasCartasClicadas) {
    playerCounter++;
    if (firstCardContent !== secondCardContent) {
      clickDisabled = true;
      setTimeout(function () {
        desvirarCartas();
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
      exibirMensagemPontuacao();
    }
    if (counterMatches === 8) {
      mostrarMensagemFimDoJogo();
    }
  }

  function desvirarCartas() {
    firstCardElement.src = "./assets/backcard.jpg";
    secondCardElement.src = "./assets/backcard.jpg";
  }

  function virarCarta() {
    carta.src = `./assets/${cardList[idCarta]}.png`;
  }

  function resetCardsContent() {
    firstCardContent = '';
    secondCardContent = '';
  }

  function exibirMensagemPontuacao() {
    let pontuacao = document.getElementById(`score`);
    pontuacao.innerHTML = `Pontuação Jogador 1: ${scorePlayer1}<br>Pontuação Jogador 2: ${scorePlayer2}`;
  }

  function mostrarMensagemFimDoJogo() {
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