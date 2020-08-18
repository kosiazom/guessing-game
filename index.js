let computerGuess;
const gameArea = document.getElementById('gameArea')

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("The DOM is here!")
    init()
    easyMode()
    hardMode()
})

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1)
  let newGame = document.getElementById('newGameButton')
  newGame.style.display = "none"

//   let gameArea = document.getElementById('gameArea')
  gameArea.style.display = "none"
}

function startGameView() {
    let start = document.getElementById('welcomeScreen')
    start.style.display = "none"

    
    gameArea.style.display = "block"
}

function easyMode() {
let easy = document.getElementById('easy')
easy.addEventListener('click', (e) => {
    startGameView()
})
}

function hardMode() {
    let hard = document.getElementById('hard')
    hard.addEventListener('click',(e) => {
        startGameView();
    })

}