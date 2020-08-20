let computerGuess;
let userGuesses = [];
const gameArea = document.getElementById('gameArea');
let attempts = 0;
let maxGuesses;

let low = 1;
let high = 100; 


document.addEventListener("DOMContentLoaded", (e) => {
    console.log("The DOM is here!")
    init();
    easyMode();
    hardMode();
    compareGuess();
    newGame()
    
})

function updateRange() {
const rangeOutput = document.getElementById('rangeOutput')
rangeOutput.innerText= `${low} - ${high}`;
rangeOutput.style.marginLeft =  low + '%';
rangeOutput.style.marginRight = 100 - high + '%';
rangeOutput.classList.add('flash')


const lowValue = document.getElementById('low')

lowValue.style.flex = low + '%';
lowValue.style.background = "#ef7b54"


const space = document.getElementById('space')
space.style.flex = high - low + '%';
space.style.background = "#83e1d0"

const highValue = document.getElementById('high')
highValue.style.flex = 100 - high + '%';
highValue.style.background = "#ef7b54"
}

function gameEnded() {
    let newGame = document.getElementById('newGameButton');
    newGame.style.display = "inline";
    document.getElementById("inputBox").setAttribute('readonly', 'readonly')
}

function newGame() {
    let newGameButton = document.getElementById('newGameButton');
    newGameButton.addEventListener('click', (e) => {
        window.location.reload();
    })
}
function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    console.log(computerGuess);
  let newGame = document.getElementById('newGameButton');
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
    maxGuesses = 10;
    startGameView()
    })
}

function hardMode() {
      
    let hard = document.getElementById('hard')
    hard.addEventListener('click',(e) => {
        maxGuesses = 5;
        startGameView();
    
    })
}

function compareGuess() {
    let userInput = document.getElementById("inputBox")
    userInput.addEventListener("change", (e)=> {
        let userInputValue = Number(userInput.value);
      
        userGuesses.push(" " + userInputValue);
        console.log(userGuesses);
        let guesses = document.getElementById("guesses");
        guesses.innerHTML = userGuesses;
        console.log(guesses)
       document.getElementById('attempts').innerHTML = attempts +=1


        if(attempts < maxGuesses) {
          
            if (userInputValue > computerGuess) {
                if (userInputValue < high)  high = userInputValue
            let yourGuess = document.getElementById("textOutput");
            yourGuess.innerHTML = " Your guess is too high";
            document.getElementById("inputBox").value = "";
        }

        else if(userInputValue < computerGuess) {
            if (userInputValue > low) low = userInputValue;
            let yourGuess = document.getElementById("textOutput");
            yourGuess.innerHTML = " Your guess is too low";
            document.getElementById("inputBox").value = "";

        }

        else {
            let yourGuess = document.getElementById("textOutput");
            yourGuess.innerHTML = "Correct! You Got it in " + attempts + " attempts!";
            gameEnded();
        }
    }
    else {
        if (userInputValue > computerGuess) {
            let yourGuess = document.getElementById("textOutput");
            yourGuess.innerHTML = " YOU LOSE!, <br> The number was " + computerGuess;
            gameEnded();
          
        }

        else if(userInputValue < computerGuess) {
            let yourGuess = document.getElementById("textOutput");
            yourGuess.innerHTML = " YOU LOSE!, <br> The number was " + computerGuess;
            gameEnded();
          
        }

        else {
            let yourGuess = document.getElementById("textOutput");
            yourGuess.innerHTML = "Correct! You Got it in " + attempts + " attempts!";
            gameEnded();
        }
    }
    updateRange()
})

    
}