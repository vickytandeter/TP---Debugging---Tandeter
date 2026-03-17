const input = document.getElementById("guessInput")
const button = document.getElementById("guessBtn")
const message = document.getElementById("message")
const attemptsText = document.getElementById("attempts")
const resetBtn = document.getElementById("resetBtn")

let secretNumber = Math.floor(Math.random() * 100) + 1
let attempts = 0

button.addEventListener("click", checkGuess)
resetBtn.addEventListener("click", resetGame)
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkGuess()
  }
})

function checkGuess(){

  const guess = Number(input.value)

  attempts = attempts + 1

  attemptsText.innerText = attempts

  if(guess === secretNumber){
    message.innerText = "¡Ganaste!"
  }else if(guess < secretNumber && guess >= 0){
    message.innerText = "El número es mayor"
  }else if (guess > secretNumber && guess <= 100){
    message.innerText = "El número es menor"
  } else {
    message.innerText = "El número no es válido"
  }
}

function resetGame()
{
  secretNumber = Math.floor(Math.random() * 100) + 1
  attempts = 0

  attemptsText.innerText = 0
  message.innerText = ""
  input.value = ""
}