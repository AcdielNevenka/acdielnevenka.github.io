// Esperar a que la página cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    let popup = document.getElementById("popup");
    let openPopupBtn = document.getElementById("openPopupBtn");
    let closePopupBtn = document.querySelector(".close-btn");

    // Ocultar popup al inicio
    popup.style.display = "none";

    // Mostrar el popup solo al hacer clic en el botón principal
    openPopupBtn.addEventListener("click", function() {
        popup.style.display = "flex";
    });

    // Cerrar el popup al hacer clic en la "X"
    closePopupBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // Redirigir a la página del girasol al hacer clic en el botón "Girasol"
    document.getElementById("sunflowerBtn").addEventListener("click", function() {
        window.location.href = "sunflower.html";
    });
});
