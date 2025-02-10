document.addEventListener("DOMContentLoaded", function () {
    const images = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.jpeg"];
    let cards = [...images, ...images]; // Duplicamos para hacer los pares
    let flippedCards = [];
    let matchedPairs = 0;

    // Mezclar las cartas
    cards = cards.sort(() => Math.random() - 0.5);

    const grid = document.querySelector(".grid-container");

    // Crear las cartas en el grid
    cards.forEach((image, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.image = image;
        card.innerHTML = `
            <div class="front"></div>
            <div class="back" style="background-image: url('${image}')"></div>
        `;
        card.addEventListener("click", flipCard);
        grid.appendChild(card);
    });

    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
            this.classList.add("flipped");
            flippedCards.push(this);
        }

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }

    function checkMatch() {
        if (flippedCards[0].dataset.image === flippedCards[1].dataset.image) {
            flippedCards = [];
            matchedPairs++;

            if (matchedPairs === images.length) {
                document.getElementById("message").textContent = "¡Felicidades! Has encontrado todas las parejas. 🎉";
            }
        } else {
            flippedCards.forEach(card => card.classList.remove("flipped"));
            flippedCards = [];
        }
    }
});
