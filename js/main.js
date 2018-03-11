console.log("Up and runnnnning");


var cards = [
{
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png',
},
{
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png',  
},
{
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png',
},
{
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png',   
},
];

var cardsInPlay = [];

var checkForMatch = function () {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("It's a match! Do you also ski?");
	} else {
		alert("Nope, not a match here. Thanks for playing.");
	}	
}
var flipCard = function () {

	var cardId = this.getAttribute('data-id');

	//console.log("User flipped a: " + cards[cardId].rank);
	//console.log("It is of the suit: " + cards[cardId].suit);
	//console.log("Here is a pretty pic: " + cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);
	
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {

		checkForMatch();
	}
}

var createBoard = function () {

	for (var i = 0; i < cards.length; i++) {

		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}

}
/*
flipCard();
console.log(cards);
console.log(cards.length);*/

	 //flipCard(0);
	 //flipCard(1);
	 createBoard();
	 //flipCard();
