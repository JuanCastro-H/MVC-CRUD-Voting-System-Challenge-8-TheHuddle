// --------------------------------------------
// --- Activar Botones De Votacion (Temas) ---
// --------------------------------------------
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
            const topics = await response.json(); 
    
            // Actualizar Cantidad De Votos A la Vista ---
            renderTopics(topics);
        });
    });
    
}


// --------------------------------------------
// --- Recargar Botones De Votacion (Links) ---
// --------------------------------------------

function activateLinkButtons() {
    
    // --- Obtener Botones De Votaciones Para Links ---
    const linkButtons  = document.querySelectorAll(".vote-link");

    linkButtons.forEach(button => {
    
         // --- Detectar Click Del Boton ---
        button.addEventListener("click", async () => { 
            
            // --- Obtener ID del Link ---
            const id = button.dataset.id; 

            // --- Obtener ID Del Tema Desde La URL ---
            const topicId = window.location.pathname.split("/")[2];

            // --- Voto Al servidor ---
            await fetch(`/links/${id}/vote`, { method: "POST" });
            
            // --- Obtener Lista de Links Actualizada ---
            const response = await fetch(`/topics/${topicId}/links/json`);

            // --- Convertir Respuesta A JSON ---
            const links = await response.json();
            
            renderLinks(links)
    
        });
    });
}


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
                    Votos:
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


// ----------------------------------------
// --- Recargar Los Links ---
// ----------------------------------------
function renderLinks (links) {

    // --- Obtener La Lista De Links ---
    const linksList = document.getElementById("links-list");

    // --- Borrar Lista De Links Vieja ---
    linksList.innerHTML = "";

    // --- Obtener El ID Del Tema Desde la URL ---
    const topicId = window.location.pathname.split("/")[2];

    links.forEach(link => {

        linksList.innerHTML += `

            <!-- Link -->
            <div>

                <!-- Titulo Del Link -->
                <h3>${link.title}</h3>

                <!-- Descripcion Del Link -->
                <p>
                    ${link.description}
                </p>

                <!-- Cantidad De Votos -->
                <p>
                    Votos:
                    <span id="link-votes-${link.id}">${link.votes}</span>
                </p>

                <!-- Boton Para Votar -->
                <button class="vote-link" data-id="${link.id}">Votar Link</button>

                <br><br>

                <!-- Enlace Para Editar -->
                <a href="/links/${link.id}/edit">Editar</a>

                <!-- Formulaario Para Eliminar -->
                <form action="/link/${link.id}?_method=DELETE" method="POST">
                    <button>Eliminar</button>
                </form>

            </div>

            <!-- Separador Entre Links -->
            <hr>
                        
        `;
    });
    // --- Reactivar Los Botones De Votacion ---
}

activateTopicButtons();
activateLinkButtons();
