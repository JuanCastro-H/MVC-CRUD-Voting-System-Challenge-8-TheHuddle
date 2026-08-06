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

# 🇪🇸 Resumen en Español

Proyecto CRUD desarrollado con Node.js y Express que permite administrar temas y recursos de aprendizaje mediante una arquitectura MVC. Incluye un sistema de votación con actualización dinámica usando Fetch API y persistencia en un archivo JSON. Como evolución futura se planea incorporar autenticación, mejoras visuales con CSS, mayor seguridad y una base de datos relacional como MySQL o PostgreSQL.
