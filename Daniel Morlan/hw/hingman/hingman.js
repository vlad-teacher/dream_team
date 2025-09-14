const words = ["javascript", "frontend", "react", "python", "async"];
let selectedWord = "";
let imageNumber = 0;
const maxFails = 5;

const wordDiv = document.getElementById("word");
const letterInput = document.getElementById("letterInput");
const guessBtn = document.getElementById("guessBtn");
const image = document.getElementById("image");
const message = document.getElementById("message");
const newGameBtn = document.getElementById("newGameBtn");

function startGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  wordDiv.innerHTML = "";
  imageNumber = 0;
  image.src = `${imageNumber}.jpg`;
  message.textContent = "";
  letterInput.value = "";
  newGameBtn.style.display = "none";

  for (let i = 0; i < selectedWord.length; i++) {
    const span = document.createElement("span");
    span.textContent = "_";
    wordDiv.appendChild(span);
  }
}

guessBtn.addEventListener("click", () => {
  const letter = letterInput.value.toLowerCase().trim();
  if (!letter || !/[a-zа-яё]/i.test(letter)) {
    alert("Введите одну букву!");
    return;
  }

  let found = false;
  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === letter) {
      wordDiv.children[i].textContent = letter;
      found = true;
    }
  }

  if (!found) {
    imageNumber++;
    image.src = `${imageNumber}.jpg`;
  }

  checkGameStatus();
  letterInput.value = "";
  letterInput.focus();
});

function checkGameStatus() {
  const letters = [...wordDiv.children];
  const won = letters.every(span => span.textContent !== "_");

  if (won) {
    message.textContent = "🎉 Победа!";
    guessBtn.disabled = true;
    newGameBtn.style.display = "inline-block";
  } else if (imageNumber >= maxFails) {
    message.textContent = `💀 Проигрыш! Слово: ${selectedWord}`;
    guessBtn.disabled = true;
    for (let i = 0; i < selectedWord.length; i++) {
      if (wordDiv.children[i].textContent === "_") {
        wordDiv.children[i].textContent = selectedWord[i];
      }
    }
    newGameBtn.style.display = "inline-block";
  }
}

newGameBtn.addEventListener("click", () => {
  guessBtn.disabled = false;
  startGame();
});

startGame();
