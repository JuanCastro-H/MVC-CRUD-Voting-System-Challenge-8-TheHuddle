// --- Obtener Botones De Votaciones Para Links ---
const linkButtons  = document.querySelectorAll(".vote-link");

// ----------------------------------------
// --- Activar Botones De Votacion ---
// ----------------------------------------
function activateTopicButtons() {

    // --- Obtener Todos Los Botones De Votar ---
    const topicButtons = document.querySelectorAll(".vote-topic");
    
    // --- Recorrer Cada Boton ---
    topicButtons.forEach(button => {
        
        // --- Detectar Click Del Boton ---
        button.addEventListener("click", async () => {
            
            // --- Obtener ID Del Tema.
            const id = button.dataset.id;  
    
            // --- Enviar Voto Al Servidor ---
            await fetch(`/topics/${id}/vote`, { method: "POST" });
            
            // --- Soliciar Listaa De Temas Actualizada ---
            const response = await fetch("topics/json");

            // --- Convertir Respuesta A JSON ---
            const topic = await response.json(); 
    
            // Actualizar Cantidad De Votos A la Vista ---
            renderTopics(topics);
        });
    });

}


// ----------------------------------------
// --- Recargar LINKS ---
// ----------------------------------------
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


// ----------------------------------------
// --- Recargar Los Temas ---
// ----------------------------------------

function renderTopics(topics) {

    //  --- Obtener la Lista De Temas ---
    const topicsList =  document.getElementById("topics-list");

    // --- Borrar Lista De Temas Vieja ---
    topicsList.innerHTML = "";

    // --- Crear Nuevamente La lista
    topics.forEach(topic => {

        topicsList.innerHTML += `
            <!-- Tema -->
            <li>
                <!-- Enlace Al Tema -->
                <a href="/topics/${topic.id}">${topic.title}</a>

                <!-- Cantidad De Votos -->
                <p>
                    votos:
                    <span id="topic-votes-${topic.id}">${topic.votes}</span>
                </p> 

                <!-- Boton Para Votar -->
                <button class="vote-topic" data-id="${topic.id}">Votar</button>

                <!-- Enlace Para Editar --> 
                <a href="/topics/${topic.id}/edit">Editar</a>

                <!-- Formulario Para Eliminar -->
                <form action="/topics/${topic.id}?_method=DELETE" method="POST">
                    <button>Eliminar</button>
                </form>
            <li>
        `;
    });

    // --- Reactivar Botones Eliminados ---
    activateTopicButtons();

}