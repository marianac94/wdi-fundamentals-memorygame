console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
// var cardOne = cards [0];
// var cardTwo = cards [2];
// var cardThree = cards [1];
// var cardFour = cards [3];

var flipCard = function() {
	var cardId = this.getAttribute
	cardsInPlay.push(cards[cardId]);

	console.log("User flipped " + cards[cardId]);

        checkForMatch();
}

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
		}
};

flipCard(0);
flipCard(2);