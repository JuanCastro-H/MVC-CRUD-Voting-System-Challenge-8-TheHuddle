# ☕ CRUD, Códigos y Votos

> "The best topics rise to the top. The rest wait their turn."

CRUD platform for learning topics and resources built with Node.js, Express, EJS and vanilla JavaScript.

---

## 🎬 Description

This project simulates a learning platform where users can create programming topics and attach useful resources to them.

The platform follows a classic MVC architecture and allows users to create, edit, delete and vote for both topics and links. Voting dynamically reorders the content without reloading the page.

---

## 🧠 Objective

- Express routing and middleware
- HTTP request/response handling
- Server-side rendering with EJS
- MVC architecture
- CRUD operations
- Fetch API
- JSON persistence

---

## 🛠️ Technologies Used

### Backend
- Node.js
- Express

### Frontend
- EJS
- Vanilla JavaScript
- Fetch API

### Persistence
- JSON (`data/db.json`)

### Middleware
- method-override

---

## 🧩 Project Architecture

```text
Routes
   ↓
Controllers
   ↓
Models
   ↓
db.json
   ↓
EJS Views
```

---

## ⚙️ How It Works

1. Browse topics.
2. Create/Edit/Delete topics and links.
3. Vote using Fetch API.
4. Server updates `db.json`.
5. UI refreshes without reloading.

---

## 📦 Data Model

Data is stored in `data/db.json` using two collections:

- topics
- links

Each link references its parent topic through `topicId`.

---

## 📂 Project Structure

```text
crud-codigos-y-votos/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── data/
├── app.js
└── README.md
```

---

## 📡 Application Modules

| Module | Functionality |
|---|---|
| Topics | CRUD + Voting |
| Links | CRUD + Voting |
| JSON Endpoints | Dynamic updates |

---

## 🚀 Installation

```bash
git clone <repository-url>
cd crud-codigos-y-votos
npm install
```

Create `data/db.json`:

```json
{
  "topics": [],
  "links": []
}
```

Run:

```bash
node app.js
```

Open:

http://localhost:3000/topics

---

## 📈 Key Features

- Full CRUD
- Voting system
- Dynamic updates
- MVC architecture
- EJS
- Fetch API
- JSON persistence

---

## 🧃 Possible Improvements

- User authentication
- CSS and responsive UI
- Additional security features
- Migration to MySQL or PostgreSQL
- Validation
- Automated testing

---

## 👨‍💻 Author

**Juan Castro**

---

# Resumen en Español

CRUD, Códigos y Votos es una aplicación web desarrollada con Node.js y Express que permite gestionar temas de aprendizaje y los recursos asociados a cada uno mediante operaciones CRUD completas.

La plataforma incorpora un sistema de votación que permite valorar tanto los temas como los enlaces, reordenando automáticamente el contenido según su popularidad sin necesidad de recargar la página.

El proyecto fue diseñado siguiendo el patrón de arquitectura MVC, separando claramente rutas, controladores, modelos y vistas para mantener una estructura organizada y escalable.

---

## 🎯 Objetivo

El proyecto fue desarrollado para practicar conceptos fundamentales del desarrollo backend, entre ellos:

- arquitectura MVC con Node.js y Express,
- desarrollo de APIs y manejo de rutas HTTP,
- operaciones CRUD completas,
- renderizado del lado del servidor mediante EJS,
- comunicación asíncrona utilizando Fetch API,
- actualización dinámica de la interfaz sin recargar la página,
- organización y persistencia de datos utilizando archivos JSON.

---

## ⚙️ Funcionamiento

- Los usuarios pueden crear, editar y eliminar temas de aprendizaje.
- Cada tema puede contener múltiples enlaces o recursos relacionados.
- Tanto los temas como los enlaces pueden recibir votos positivos.
- Cada voto actualiza la información almacenada y reorganiza automáticamente el contenido según la cantidad de votos obtenidos.
- Las actualizaciones de la interfaz se realizan mediante peticiones Fetch, evitando recargar la página completa y ofreciendo una experiencia más fluida.

---

## 📊 Características destacadas

- CRUD completo de Temas
- CRUD completo de Links asociados a cada Tema
- Sistema de votación para Temas y Links
- Reordenamiento dinámico según la cantidad de votos
- Arquitectura MVC con Express
- Vistas renderizadas mediante EJS
- Interactividad utilizando JavaScript puro y Fetch API
- Persistencia de datos mediante archivos JSON
- Eliminación en cascada de los recursos asociados a un tema

---

## 🚀 Próximas mejoras

Este proyecto continuará evolucionando incorporando nuevas funcionalidades propias de aplicaciones web reales, entre ellas:

- Sistema de autenticación y autorización de usuarios.
- Base de datos relacional (PostgreSQL o MySQL) en reemplazo del almacenamiento en JSON.
- Mejoras visuales mediante CSS y un diseño de interfaz más moderno.
- Validaciones y medidas adicionales de seguridad tanto en cliente como en servidor.
- Persistencia más robusta y preparada para múltiples usuarios concurrentes.

---

## 🧠 Conclusión

CRUD, Códigos y Votos demuestra cómo construir una aplicación web completa utilizando tecnologías fundamentales del ecosistema Node.js.

El proyecto combina una arquitectura organizada con una interfaz dinámica, permitiendo implementar operaciones CRUD, votaciones en tiempo real y una clara separación de responsabilidades entre cada capa de la aplicación.

Además de servir como práctica del patrón MVC y del desarrollo con Express, constituye una base sólida sobre la cual continuar incorporando nuevas funcionalidades propias de aplicaciones web modernas, como autenticación, bases de datos relacionales y mejoras en seguridad y experiencia de usuario.
