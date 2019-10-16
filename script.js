let cardList = new Array('angularCard', 'jsCard', 'flutterCard', 'javaCard', 'laravelCard', 'reactCard', 'sprinCard', 'vueCard',
  'angularCard', 'jsCard', 'flutterCard', 'javaCard', 'laravelCard', 'reactCard', 'sprinCard', 'vueCard');
let cardsInfo = new Array('Angular é um Framework da linguagem de programação Javascript que foi feito com o intuito de ajudar a desenvolver o front-end dos sites, ou seja, a parte que roda no navegador do usuário. A primeira versão do Angular que até então se chamava AngularJS tinha alguns problemas, então a a equipe de Angular na Google se dividiu e reescreveu todo o Angular. Da primeira versão até a atual houveram muitas modificações, quem desenvolvia desde o inicio talvez não tenha gostado, mas houveram várias melhorias.',
  'JavaScript não tem nada a ver com Java. Java é uma linguagem que roda do lado do servidor, como PHP, Ruby, Python e tantas outras. A única coisa parecida entre eles é o nome. JavaScript é uma linguagem de programação client-side(lado do usuário). Ela é utilizada para controlar o HTML e o CSS para manipular comportamentos na página. O que isso Significa? Significa que quando você clica em uma carta neste jogo só é possível virar a carta ou saber se uma carta é igual a outra por causa do JavaScript.',
  'O Flutter é um framework para Dart construído pela Google para facilitar o desenvolvimento multiplataforma. Muitos desenvolvedores sofriam porque aprendiam a criar aplicativos para Android, mas não sabiam criar para iOS, ou mesmo que soubessem, tinham que trabalhar dobrado para lançar nos dois diferentes Sistemas Operacionais, o Flutter veio para resolver isso, bem na verdade existem outras tecnologias com esta mesma proposta. Mas o Flutter se destaca porque é fácil de aprender, rápido para criar os aplicativos e possui desempenho superior a aplicativos hibridos.',
  'Java é uma linguagem de programação lançada pela Sun Microsystems em 1995. Como ela funciona sobre uma máquina virtual, ela é multiplataforma(pode ser executada em diferentes Sistemas Operacionais). Existem muitas aplicações e sites que não funcionarão, a menos que você tenha o Java instalado e o motivo é que eles rodam sobre a Máquina Virtual Java e você precisa ter ela instalada para conseguir executa-los.',
  'Laravel é um framework para desenvolvimento de sistemas web que utilizam o padrão MVC. livre e de código aberto. É um dos mais populares frameworks para PHP, sendo listado como o mais popular no ano de 2015.',
  'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros. Algo interessante é que é possível criar apps para smartphones com o React Native que é basicamente uma adaptação do React para desenvolvimento mobile(celulares, tablets).',
  'O Spring é um framework da linguagem de programação Java de código aberto, criado com o objetivo de facilitar o desenvolvimento de aplicações. Ele foi criado por causa das dificuldades que os programadores enfrentavam ao criar determinado tipo de aplicação, mais precisamente, aplicações corporativas.',
  'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única. É de fácil aprendizado comparado a outras tecnologias que tem a mesma ideia.');
let firstCard = 0, secondCard = 0, secondCardId, firstCardId; counterMatches = 0; clickDisabled = true,
  gameStarted = false, playerCounter = 0, scorePlayer1 = 0, scorePlayer2 = 0;
cardList = shuffle(cardList);

function displayMetaInfo() {
  alert("Desenvolvido por Lucas Cunha na disciplina de Tecnologias pra Internet II da Estácio Fic Moreira Campos.\nEmail: lukkzmaverick@gmail.com\nTelefone: (85)98990-6278");
}
function displayInfoFramework() {
  alert("Um Framework tem como principal objetivo resolver problemas recorrentes com uma abordagem genérica, permitindo ao desenvolvedor focar seus esforços na resolução do problema em si, e não ficar reescrevendo software. Pode-se dizer que Framework é um conjunto de bibliotecas ou componentes que são usados para criar uma base onde sua aplicação será construída. Por isso existem diferentes frameworks para diferentes propósitos, frameworks para o front-end de aplicações, frameworks para o back-end das aplicações, frameworks para desenvolvimento de aplicativos para smartphones e muito mais. E por que tudo isso? Para facilitar a vida do desenvolvedor, seria muito dificil criar tudo do zero, a proposta dos frameworks é dar uma base para o desenvolvedor ter menos trabalho.");
}
function hideButton() {
  let btnElement = document.getElementById(`buttonPlay`);
  btnElement.style.display = "none";
}
function showButton() {
  let btnElement = document.getElementById(`buttonPlay`);
  btnElement.innerHTML = "Reiniciar";
  btnElement.style.display = "inline-block";
}
function restartGame() {
  cardList = shuffle(cardList);
  firstCard = 0, secondCard = 0, counterMatches = 0, clickDisabled = true,
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
      var element = document.getElementById(`carta ${i}`);
      element.src = `./assets/${cardList[i]}.png`;
    }
  }, 100);
  setTimeout(() => {
    for (let i = 0; i < 16; i++) {
      var element = document.getElementById(`carta ${i}`);
      element.src = "./assets/backcard.jpg";
    }
  }, 2000);
  clickDisabled = false;
  gameStarted = true;
}

function displayInfoCard(cardName) {
  switch (cardName) {
    case "angularCard": alert(cardsInfo[0]); break;
    case "jsCard": alert(cardsInfo[1]); break;
    case "flutterCard": alert(cardsInfo[2]); break;
    case "javaCard": alert(cardsInfo[3]); break;
    case "laravelCard": alert(cardsInfo[4]); break;
    case "reactCard": alert(cardsInfo[5]); break;
    case "sprinCard": alert(cardsInfo[6]); break;
    case "vueCard": alert(cardsInfo[7]); break;
  }
}

function cardClick(a) {
  if (clickDisabled)
    return;
  var element = document.getElementById(`carta ${a}`);
  if (element.src.match("backcard")) {
    element.src = `./assets/${cardList[a]}.png`;
    if (firstCard === 0) {
      firstCard = cardList[a];
      firstCardId = element;
    } else if (secondCard === 0) {
      secondCard = cardList[a];
      secondCardId = element;
    }
  }
  if (firstCard !== 0 && secondCard !== 0) {
    playerCounter++;
    if (firstCard !== secondCard) {
      clickDisabled = true;
      setTimeout(function () {
        firstCardId.src = "./assets/backcard.jpg";
        secondCardId.src = "./assets/backcard.jpg";
        firstCard = 0;
        secondCard = 0;
        clickDisabled = false;
      }, 700);
    }
    else {
      if (playerCounter % 2 === 0)
        scorePlayer2++;
      else
        scorePlayer1++;
      counterMatches++;
      var element = document.getElementById(`score`);
      element.innerHTML = `Pontuação Jogador 1: ${scorePlayer1}<br>Pontuação Jogador 2: ${scorePlayer2}`;
      setTimeout(function () {
        displayInfoCard(firstCard);
        firstCard = 0;
        secondCard = 0;
      }, 0);
    }
    if (counterMatches === 8) {
      setTimeout(function () {
        if (scorePlayer1 > scorePlayer2)
          alert(`Fim do Jogo\nJogador 1 ganhou!!\nResultado do jogo: ${scorePlayer1} a ${scorePlayer2}`);
        else if (scorePlayer1 < scorePlayer2)
          alert(`Fim do Jogo\nJogador 2 ganhou!!\nResultado do jogo: ${scorePlayer2} a ${scorePlayer1}`);
        else
          alert("Fim do Jogo\nEmpate.");
        showButton();
      }, 1200)
    }
  }
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
} 