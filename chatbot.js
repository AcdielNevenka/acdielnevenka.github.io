document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.querySelector(".chat-box");
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");

    const responses = [
        { keywords: ["buenos dias wawita hermosa ❤️", "buenos dias amor", "buenos dias wawita ❤️", "buenos dias wawita", "buenos dias wawa", "buenos dias wawa ❤️", "buenos dias mi amor", "buenos dias miamor"], response: "Buenos dias wawita hermosa 💖, como amaneciste?" },
        { keywords: ["bien", "bien wawa", "bien wawita", "bien wawa y tu", "bien wawita y tu" ], response: "Que bueno wawita, yo bien wawa. Que tengas un hermoso dia mi wawita" },
        { keywords: ["hola", "hola wawa", "hola wawita"], response: "Hola mi wawita hermosa 💖" },
        { keywords: ["cómo nos conocimos", "como nos conocimos", "dime como nos conocimos"], response: "Nos conocimos de una forma muy especial, en un momento perfecto 💕, fue por Tinder donde conocí a mi wawa" },
        { keywords: ["cuál fue nuestra primera cita", "como fue nuestra primera cita", "dime de nuestra primera cita", "cual fue nuestra primera cita"], response: "Nuestra primera cita fue increíble, llena de risas y amor 💖, nos juntamos en el Mall Marina y fuimos a ver la película al cine. Yo estaba esperándote afuera y tú venías atrasada como siempre 😂. Yo estaba viendo un partido en mi celular mientras te esperaba, y cuando subí a donde ti, mirabas hacia abajo todo el rato jaja y andabas tímida. Pero después, cuando estábamos en la película, coincidimos en muchas cosas y nos reíamos mucho, como si nos conociéramos de siempre. Y la tipa de la película corría y corría mientras el hijo estaba en la escuela jaja." },
        { keywords: ["qué es lo que más te gusta de mi", "que es lo que mas te gusta de mi", "dime lo que más te gusta de mi"], response: "Lo que más me gusta de ti es tu sonrisa y la forma en que me haces feliz 🥰" },
        { keywords: ["dime algo bonito", "dime algo lindo", "algo bonito"], response: "Eres lo mejor que me ha pasado, cada día contigo es un regalo 💝" },
        { keywords: ["te amo", "dime te amo", "me amas"], response: "Yo también te amo con todo mi corazón ❤️. Infinito ♾️ a pasitos de tortuga como dice mi wawa" },
        { keywords: ["cuál es nuestra canción", "nuestra canción", "canción especial"], response: "Nuestra canción es 🎶 *[ADMV]* 🎶" },
        { keywords: ["chao wawa", "adiós", "chao wawita", "chao miamor", "chao wawita ❤️", "chao wawa ❤️", "buenas noches wawita ❤️"], response: "Gracias por hablar conmigo, siempre estaré aquí para ti 💖" }
    ];

    function addMessage(sender, message) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("message", sender === "Tú" ? "user-message" : "bot-message");
        msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getResponse(question) {
        question = question.toLowerCase();
        for (let item of responses) {
            if (item.keywords.some(keyword => question.includes(keyword))) {
                return item.response;
            }
        }
        return "No entiendo esa pregunta, pero lo importante es que te amo 💖";
    }

    sendBtn.addEventListener("click", function () {
        let question = userInput.value.trim();
        if (question === "") return;

        addMessage("Tú", question);
        userInput.value = "";

        setTimeout(() => {
            let response = getResponse(question);
            addMessage("Acdiel", response);
        }, 1000);
    });

    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") sendBtn.click();
    });
});
