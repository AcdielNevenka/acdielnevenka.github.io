function calcularDiasJuntos() {
    const fechaInicio = new Date(2022, 3, 28); // Meses en JS empiezan desde 0 (abril es 3)
    const fechaActual = new Date();
    const diferenciaTiempo = fechaActual - fechaInicio;
    const diasJuntos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

    document.getElementById("diasJuntos").textContent = diasJuntos;
}

document.addEventListener("DOMContentLoaded", function() {
    calcularDiasJuntos();
    
    let popupModal = new bootstrap.Modal(document.getElementById("popupModal"));
    let popupBienvenida = document.getElementById("popupBienvenida");

    // Mostrar popup al cargar la página
    popupBienvenida.style.display = "flex";

    // Función para mostrar la animación de carga
    window.mostrarCarga = function() {
        document.getElementById("botonesPopup").style.display = "none";
        document.getElementById("pantallaCarga").classList.remove("oculto");

        let progressBar = document.getElementById("barraCarga");
        let progress = 0;
        
        let intervalo = setInterval(function() {
            progress += 10;
            progressBar.style.width = progress + "%";

            if (progress >= 100) {
                clearInterval(intervalo);
                setTimeout(() => {
                    popupBienvenida.style.display = "none"; // Ocultar popup
                }, 500);
            }
        }, 300);
    };

    // Mostrar el modal al hacer clic en el botón principal
    document.getElementById("openPopupBtn").addEventListener("click", function() {
        popupModal.show();
    });

    document.getElementById("songButton").addEventListener("click", function() {
        window.location.href = "cancion.html";
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

    document.getElementById("button5").addEventListener("click", function () {
        window.location.href = "momentos.html";
    });

    // Función para cerrar el popup inicial
    window.cerrarPopup = function() {
        document.getElementById("valentine-popup").style.display = "none";
    }

    
});
