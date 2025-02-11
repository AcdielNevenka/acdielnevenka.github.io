document.addEventListener("DOMContentLoaded", function () {
    const videoPlayer = document.getElementById("videoPlayer");
    const videoContainer = document.getElementById("video-container");
    const searchInput = document.getElementById("searchInput");

    // Diccionario de palabras clave y sus videos
    const videoDictionary = {
        "año nuevo": "videos/año nuevo.mp4",
        "autos chocadores": "videos/autos chocadores.mp4",
        "realidad virtual": "videos/realidad virtual.mp4",
        "halloween": "videos/halloween.mp4",
        "tubo sur": "videos/tubo sur.mp4",
        "sur": "videos/sur.mp4",
        "caravana navidad": "videos/caravana navidad.mp4",
        "plataforma": "videos/plataforma.mp4",
        "gorila": "videos/gorila.mp4",
        "estudiando": "videos/estudiando.mp4"
    };

    window.searchVideo = function () {
        const query = searchInput.value.trim().toLowerCase();
        
        if (videoDictionary[query]) {
            videoPlayer.src = videoDictionary[query];
            videoContainer.style.display = "block"; // Mostrar el video
            videoPlayer.play();
            
            // Asegurar que la vista no se mueva al video
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            alert("No hay un video para esta palabra.");
        }
    };

    // Generar lista de palabras disponibles
const wordList = document.getElementById("wordList");

Object.keys(videoDictionary).forEach(word => {
    const li = document.createElement("li");
    li.textContent = word;
    li.onclick = () => {
        searchInput.value = word; // Rellenar el input
        searchVideo(); // Buscar el video
    };
    wordList.appendChild(li);
});

    
});
