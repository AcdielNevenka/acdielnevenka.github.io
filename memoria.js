let attemptsLeft = 0;
let flippedCards = [];
let matchedPairs = 0;
const flipSound = new Audio("flip.mp3");
const winSound = new Audio("win.mp3");

function startGame(difficulty) {
    const images = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.jpeg", "img7.jpeg", "img8.jpeg", "img9.jpeg"];
    let selectedImages = [];

    switch (difficulty) {
        case "facil": selectedImages = images.slice(0, 3); break;
        case "intermedio": selectedImages = images.slice(0, 6); break;
        case "dificil": selectedImages = images.slice(0, 9); break;
        case "extremo":
            selectedImages = images.slice(0, 9);
            attemptsLeft = 3;
            document.getElementById("attempts").textContent = `Intentos restantes: ${attemptsLeft}`;
            break;
    }

    let cards = [...selectedImages, ...selectedImages];
    cards.sort(() => Math.random() - 0.5);

    document.getElementById("difficultySelection").classList.add("d-none");
    document.getElementById("gameContainer").classList.remove("d-none");
    document.getElementById("restartButton").style.display = "none";

    const grid = document.querySelector(".grid-container");
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${selectedImages.length <= 3 ? 3 : 4}, 100px)`;

    flippedCards = [];
    matchedPairs = 0;

    cards.forEach((image) => {
        const card = document.createElement("div");
        card.classList.add("card", "flipped"); // Se muestran al inicio
        card.dataset.image = image;
        card.innerHTML = `<div class="front"></div><div class="back" style="background-image: url('${image}')"></div>`;
        grid.appendChild(card);
    });

    // Voltear las cartas después de 3 segundos
    setTimeout(() => {
        document.querySelectorAll(".card").forEach(card => card.classList.remove("flipped"));
        document.querySelectorAll(".card").forEach(card => card.addEventListener("click", () => flipCard(card)));
    }, 3000);
}

function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
        flipSound.play();
        card.classList.add("flipped");
        flippedCards.push(card);
    }

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    if (flippedCards[0].dataset.image === flippedCards[1].dataset.image) {
        flippedCards = [];
        matchedPairs++;

        if (matchedPairs === document.querySelectorAll(".card").length / 2) {
            winSound.play();
            document.getElementById("message").textContent = "¡Felicidades! Has ganado. 🎉";
            explodeHearts();
            document.getElementById("restartButton").style.display = "block";
        }
    } else {
        flippedCards.forEach(card => card.classList.remove("flipped"));
        flippedCards = [];

        if (attemptsLeft > 0) {
            attemptsLeft--;
            document.getElementById("attempts").textContent = `Intentos restantes: ${attemptsLeft}`;

            if (attemptsLeft === 0) {
                document.getElementById("message").textContent = "💔 ¡Perdiste! Inténtalo de nuevo.";
                document.getElementById("restartButton").style.display = "block";
                disableGame();
            }
        }
    }
}

function disableGame() {
    document.querySelectorAll(".card").forEach(card => card.removeEventListener("click", flipCard));
}

function explodeHearts() {
    const container = document.getElementById("gameContainer");

    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart-explosion");
        heart.innerHTML = "💖";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        container.appendChild(heart);

        setTimeout(() => heart.remove(), 1000);
    }
}

function restartGame() {
    document.getElementById("difficultySelection").classList.remove("d-none");
    document.getElementById("gameContainer").classList.add("d-none");
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("restartButton").style.display = "none"; // 🔹 Oculta el botón al volver al menú
}
