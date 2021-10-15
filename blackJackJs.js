let sum 
let hasBlackJack = false
let isAlive = false
let message = ""
let ask = document.getElementById("ask")
let sumS = document.getElementById("sum-el")
let cards = document.getElementById("cards-el")
let allCards = []
let player = document.getElementById("player-ml")

let playerObject = {
     point:  100,
     name: "Player A"
}
player.textContent = playerObject.name + ": " + playerObject.point + "$" 
function getRandomCard () {
    let randomNum = Math.floor(Math.random()*13)+1
    if (randomNum == 1) {
        return 11;
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard =getRandomCard()
    sum = firstCard + secondCard
    allCards = [firstCard, secondCard]
    renderGame()
}
function renderGame() {
    sumS.textContent = "Sum: " + sum
    cards.textContent = "Cards: " 
    for (let i=0; i<allCards.length; i++) {       // display cards along with new number that we are adding
        cards.textContent += allCards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? 😐"
    } else if (sum === 21) {       
        message = "You got the Black jack Mate! 🥳"
        hasBlackJack==true
    } else {
        message = "Sorry! You are out of the game. ☹️"
        isAlive = false
    }
    ask.textContent = message
}
function newCard() {
    if (isAlive===true && hasBlackJack===false) {
        let card = getRandomCard()
        sum += card
        allCards.push(card)
        renderGame()
    }
}

