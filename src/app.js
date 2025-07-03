import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";
import "./assets/img/rigo-baby.jpg";

// Sonido de clic
const clickSound = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

window.onload = () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    updateCard(card); // Inicializa
    card.addEventListener("click", () => {
      clickSound.play();
      flipCard(card);
    });
  });
};

const generateRandomNumber = () => {
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  return numbers[Math.floor(Math.random() * numbers.length)];
};

const generateRandomSuit = () => {
  const suits = ["diamond", "spade", "heart", "club"];
  return suits[Math.floor(Math.random() * suits.length)];
};

const updateCard = card => {
  const suit = generateRandomSuit();
  const number = generateRandomNumber();

  card.className = "card " + suit;
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-front">
        <span class="number">${number}</span>
      </div>
      <div class="card-face card-back"></div>
    </div>
  `;
};

const flipCard = card => {
  card.classList.add("flip");

  setTimeout(() => {
    updateCard(card);
    card.classList.remove("flip");
  }, 600); // tiempo sincronizado con la animación
};