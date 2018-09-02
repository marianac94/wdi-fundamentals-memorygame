console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

// var cardOne = cards[0];
// var cardTwo = cards[2];
// var cardThree = cards[1];
// var cardFour = cards[3];

var flipCard = function(cardId) {
	cardsInPlay.push(cards[cardId]);

	console.log("User flipped " + cards[cardId]);

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


flipCard(2);
flipCard(0);