let cardList = new Array('angularCard','jsCard','flutterCard','javaCard','laravelCard','reactCard','sprinCard','vueCard',
'angularCard','jsCard','flutterCard','javaCard','laravelCard','reactCard','sprinCard','vueCard');
let firstCard=0, secondCard=0, secondCardId, firstCardId; c=0;clickDisabled = true, 
gameStarted = false, playerCounter = 0, scorePlayer1 = 0, scorePlayer2 = 0;

function hideButton(){
  let btnElement=document.getElementById(`buttonPlay`);
  btnElement.style.display = "none";
}
function showButton(){
  let btnElement=document.getElementById(`buttonPlay`);
  btnElement.innerHTML = "Reiniciar";
  btnElement.style.display = "inline-block";
}
function restartGame(){
  cardList = shuffle(cardList);
  firstCard=0, secondCard=0, c = 0, clickDisabled = true, 
  playerCounter = 0, scorePlayer1 = 0, scorePlayer2 = 0;
  var element=document.getElementById(`score`);
  element.innerHTML = `Pontuação Jogador 1: ${scorePlayer1}<br>Pontuação Jogador 2: ${scorePlayer2}`;
}
function startGame(){
  if(gameStarted){
    restartGame();
  }
  hideButton();
    setTimeout(() => {
      cardList = shuffle(cardList);
      for(let i =0; i < 16; i++){
        var element=document.getElementById(`carta ${i}`);  
        element.src = `./assets/${cardList[i]}.png`;
      } 
    }, 100);
  setTimeout(() => {
    for(let i =0; i < 16; i++){
      var element=document.getElementById(`carta ${i}`);
      element.src = "./assets/backcard.jpg";
    }  
  }, 2000);
  clickDisabled = false;
  gameStarted = true;
}
function cardClick(a){
  if(clickDisabled)
    return;
    var element=document.getElementById(`carta ${a}`);
    if(element.src.match("backcard")){
        element.src = `./assets/${cardList[a]}.png`;
        if (firstCard === 0){
          firstCard = cardList[a];
          firstCardId = element;
        }else if(secondCard === 0 ){
          secondCard = cardList[a];
          secondCardId = element;
        }      
    }
    if(firstCard !== 0 && secondCard !== 0){
      playerCounter++;
      if(firstCard !== secondCard){
        clickDisabled = true;
        setTimeout( function() {
          firstCardId.src = "./assets/backcard.jpg";
          secondCardId.src = "./assets/backcard.jpg";
          firstCard=0;
          secondCard=0;
          clickDisabled = false;
        }, 700 );
      }
      else{
        if(playerCounter % 2 === 0)
          scorePlayer2++;
        else
          scorePlayer1++;
        c++;
        firstCard = 0;
        secondCard = 0;
        var element=document.getElementById(`score`);
        element.innerHTML = `Pontuação Jogador 1: ${scorePlayer1}<br>Pontuação Jogador 2: ${scorePlayer2}`;
        console.log(`Pontuação player 1 ${scorePlayer1}`);
        console.log(`Pontuação player 2 ${scorePlayer2}`);
      }
      if (c === 8){
        setTimeout(function(){
          if(scorePlayer1 > scorePlayer2)
            alert(`Fim do Jogo\nJogador 1 ganhou!!\nResultado do jogo: ${scorePlayer1} a ${scorePlayer2}`);
          else if(scorePlayer1 < scorePlayer2)
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