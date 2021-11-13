const playingTo = document.querySelector("#playingTo")
// Track what score is being played to via the selectedIndex property.
const player1Button = document.querySelector("#p1")
const player2Button = document.querySelector("#p2")
const reset = document.querySelector("#reset")
const p1LiveScore = document.querySelector("#p1LiveScore")
const p2LiveScore = document.querySelector("#p2LiveScore")
const Winner = document.querySelector("#winner")

let playerOneScore = 0;
let playerTwoScore = 0;
let winScore = 3;

player1Button.addEventListener("click", () => {
    playerOneScore += 1;
    p1LiveScore.innerText = playerOneScore;
    if (playerOneScore === winScore) {
        player1Button.disabled = true;
        player2Button.disabled = true;
        Winner.innerText = " Player 1!";
    }
})
player2Button.addEventListener("click", () => {
    playerTwoScore += 1;
    p2LiveScore.innerText = playerTwoScore;
    if (playerTwoScore === winScore) {
        player1Button.disabled = true;
        player2Button.disabled = true;
        Winner.innerText = " Player 2!";
    }
})
//Win effects + Score updaters

reset.addEventListener("click", () => {
    playerOneScore = 0;
    playerTwoScore = 0;
    p1LiveScore.innerText = playerOneScore;
    p2LiveScore.innerText = playerTwoScore;
    player1Button.disabled = false;
    player2Button.disabled = false;
    Winner.innerText = ""
})
// Resets

playingTo.addEventListener("change", () => {
    switch(playingTo.selectedIndex) {
    case 0:
        winScore = 3;
        break;
    case 1:
        winScore = 5;
        break;
    case 2:
        winScore = 6;
        break;
    case 3:
        winScore = 7;
        break;
    case 4:
        winScore = 8;
        break;
    case 5:
        winScore = 9;
        break;
    case 6:
        winScore = 10;
        break;
    case 7:
        winScore = 11;
        break;
    }
})