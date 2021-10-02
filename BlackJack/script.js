let cards = [];
let sum = 0;
let message = "";
let greetingEl = document.getElementById("greeting-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let isAlive = false;
let hasBlackJack = false;
let playerEl = document.getElementById("player-el");
let player = {
    name: "User",
    chips: 150
};


playerEl.innerHTML = `${player.name}: £${player.chips}`

let getRandomNumber = () => {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1;
    if(randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
    return randomNumber;
    }
};

let startGame = () => {
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();

};

let renderGame = () => {

    if (player.chips <= 0) {
        document.body.innerHTML = "Game Over, refresh the page to play again."
    } else {

    cardsEl.innerHTML = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += `${cards[i]} `;
    }

    sumEl.innerHTML = `Sum: ${sum}  `;
    if(sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got BlackJack!!";
        hasBlackJack = true;
        player.chips += 30;
    } else {
        message = "You're out of the game.. Start a new game?"
        isAlive = false
        player.chips -= 30;
    }
    greetingEl.innerHTML = message;
    playerEl.innerHTML = `${player.name}: £${player.chips}`
}
};

let newCard = () => {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomNumber();
        sum += card;
        cards.push(card);
        renderGame();
    }
};
