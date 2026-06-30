// --- Obtener Botones Para Votar ---
const topicButtons = document.querySelectorAll(".vote-topic");
const linkButtons  = document.querySelectorAll(".vote-link");


// --- Agregar Votacion A Cada Tema ---
topicButtons.forEach(button => {

    // --- Detectar Click Del Boton ---
    button.addEventListener("click", async () => {

        const id = button.dataset.id;  // Obtener ID del tema.

        // --- Enviar Solicitud De Voto Al Servidor ---
        const response = await fetch(`/topics/${id}/vote`, { method: "POST" });

        // --- Obtener tema actualizado ---
        const topic = await response.json(); 

        // Actualizar Cantidad De Votos A la Vista ---
        document.getElementById(`topic-votes-${id}`).textContent = topic.votes;
    });
});


// --- Agregar Votacion A Cada Link ---
linkButtons.forEach(button => {

        // --- Detectar Click Del Boton ---
    button.addEventListener("click", async () => { 

        const id = button.dataset.id; // Obtener ID del Link.

        // --- Enviar Solicitud De Voto Al servidor ---
        const response = await fetch(`/links/${id}/vote`, { method: "POST" });

        // --- Obtener Link Actualizado ---
        const link = await response.json();
        
        // Actualizar Cantidad De Votos A la Vista ---
        document.getElementById(`link-votes-${id}`).textContent = link.votes;

    });
});