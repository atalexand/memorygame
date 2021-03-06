console.log("Up and running!");
score = 0;
gameRound = 0;
var cards = [
  {rank:"queen" ,suit:"hearts" , cardImage:"images/queen-of-hearts.png"},
  {rank:"queen",suit:"diamonds",cardImage:"images/queen-of-diamonds.png"},
  {rank:"king",suit:"hearts",cardImage:"images/king-of-hearts.png"},
  {rank:"king",suit:"diamonds",cardImage:"images/king-of-diamonds.png"}
];
var cardsInPlay = [];

var reset = function(){
  document.getElementById("game-board").innerHTML = "";
createBoard();
cardsInPlay = [];
};

var checkForMatch = function() {
  gameRound = gameRound+1
  if (cardsInPlay[0] === cardsInPlay[1]) {
    score++;
    alert("You found a match! "+score+" wins in "+ gameRound + " Games");
    reset();
  } else {
    alert("Try Again. "+score +" wins in "+ gameRound + " Games");
    reset();
  };

};
var flipCard = function(){
  var cardId=this.getAttribute("data-id");
  console.log(this + "lll");
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute("src",cards[cardId].cardImage);
  this.removeEventListener('click',flipCard);
  if (cardsInPlay.length === 2) {
  setTimeout(function(){checkForMatch();},500);
}
  ;
};

var createBoard = function() {
  var ran = [0,1,2,3].sort(function() {
    return .5 - Math.random();
  });
  console.log(ran);
  for(i=0;i<4;i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src',"images/back.png");
    cardElement.setAttribute('data-id',ran[i]);
    cardElement.addEventListener('click',flipCard);
    document.getElementById("game-board").appendChild(cardElement); 
    //delete rand[randomItem]
  };
};

createBoard();
//checkForMatch();
