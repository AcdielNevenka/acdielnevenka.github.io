document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("sunflowerCanvas");
    const ctx = canvas.getContext("2d");

    function drawSunflower() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 🌱 Dibujar el tallo primero
        drawStem(ctx);

        // 🌻 Dibujo progresivo de pétalos
        let petals = 0;
        let interval = setInterval(() => {
            petals++;
            drawPetal(ctx, petals);

            if (petals >= 12) {
                clearInterval(interval);
                drawCenter(ctx); // Dibuja el centro del girasol al final
            }
        }, 300);
    }

    function drawStem(ctx) {
        ctx.strokeStyle = "green";
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(150, 180);
        ctx.lineTo(150, 350);
        ctx.stroke();

        // 🍃 Dibujar hojas en el tallo
        ctx.fillStyle = "green";

        // Hoja izquierda
        ctx.beginPath();
        ctx.ellipse(120, 250, 25, 40, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();

        // Hoja derecha
        ctx.beginPath();
        ctx.ellipse(180, 300, 25, 40, -Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
    }

    function drawPetal(ctx, petalNumber) {
        ctx.fillStyle = "#FFD700";
        ctx.beginPath();
        let angle = (Math.PI / 6) * petalNumber;
        let x = 150 + Math.cos(angle) * 60;
        let y = 150 + Math.sin(angle) * 60;
        ctx.ellipse(x, y, 30, 15, angle, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawCenter(ctx) {
        ctx.fillStyle = "#8B4513";
        ctx.beginPath();
        ctx.arc(150, 150, 30, 0, Math.PI * 2);
        ctx.fill();
    }

    drawSunflower();
});
