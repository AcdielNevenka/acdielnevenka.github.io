let canvas = document.getElementById("sunflowerCanvas");
let ctx = canvas.getContext("2d");

function drawCenter() {
    ctx.fillStyle = "#8B4513"; 
    ctx.beginPath();
    ctx.arc(200, 200, 40, 0, Math.PI * 2);
    ctx.fill();
}

function drawPetal(x, y, angle) {
    ctx.fillStyle = "#FFD700"; 
    ctx.beginPath();
    ctx.ellipse(x, y, 30, 15, angle, 0, Math.PI * 2);
    ctx.fill();
}

function drawStem() {
    ctx.fillStyle = "#228B22"; 
    ctx.fillRect(190, 240, 20, 150);
}

function drawLeaves() {
    ctx.fillStyle = "#228B22";
    ctx.beginPath();
    ctx.moveTo(200, 320);
    ctx.quadraticCurveTo(250, 350, 220, 380);
    ctx.quadraticCurveTo(190, 350, 200, 320);
    ctx.fill();
}

function animateSunflower() {
    let step = 0;
    let petalCount = 20;

    function stepAnimation() {
        if (step === 0) {
            drawStem();
        } else if (step === 1) {
            drawLeaves();
        } else if (step === 2) {
            drawCenter();
        } else if (step >= 3 && step < 3 + petalCount) {
            let angle = (Math.PI * 2 * (step - 3)) / petalCount;
            let x = 200 + Math.cos(angle) * 80;
            let y = 200 + Math.sin(angle) * 80;
            drawPetal(x, y, angle);
        }

        step++;
        if (step < 3 + petalCount) {
            setTimeout(stepAnimation, 400);
        }
    }

    stepAnimation();
}

animateSunflower();
