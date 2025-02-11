document.addEventListener("DOMContentLoaded", function() {
    let popupModal = new bootstrap.Modal(document.getElementById("popupModal"));

    // Mostrar el modal al hacer clic en el botón principal
    document.getElementById("openPopupBtn").addEventListener("click", function() {
        popupModal.show();
    });

    // Redirigir a la página del girasol al hacer clic en el botón "Girasol"
    document.getElementById("sunflowerBtn").addEventListener("click", function() {
        window.location.href = "sunflower.html";
    });

    document.getElementById("chatbotBtn").addEventListener("click", function () {
        window.location.href = "chatbot.html";
    });
    
    document.getElementById("button3").addEventListener("click", function () {
        window.location.href = "memoria.html";
    });
    
    document.getElementById("button4").addEventListener("click", function () {
        window.location.href = "video2.html";
    });
});
