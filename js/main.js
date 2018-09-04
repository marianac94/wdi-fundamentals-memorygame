console.log("Up and running!");


var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen", 
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king", 
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];


var cardsInPlay = [];
	// var cardOne = cards[0];
	// var cardTwo = cards[2];
	// var cardThree = cards[1];
	// var cardFour = cards[3];


var flipCard = function(cardId) {
	cardsInPlay.push(cards[cardId].rank);

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

  checkForMatch();
};


var checkForMatch = function() {
 if (cardsInPlay.length > 1) {
   if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again.");
	} else {
		alert("You found a match!");
	}
 }
};


flipCard(0);
flipCard(2);