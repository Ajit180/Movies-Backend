# 🎬 Movies CRUD API

A simple RESTful API to manage movies, built using **Node.js**, **Express**, and **MongoDB (Mongoose)**.

---

## 📦 Features

- Create a new movie
- Get all movies
- Get a single movie by ID
- Update a movie
- Delete a movie

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Environment:** ES Modules, CORS enabled

---

## 📁 Folder Structure

```
project-root/
├── model/
│   └── movieschema.js
├── services/
│   └── movieServices.js
├── controller/
│   └── moviescontroller.js
├── routes/
│   └── moviesRoutes.js
├── index.js (entry point)
```

---

## 📄 API Endpoints

| Method | Endpoint               | Description           |
|--------|------------------------|-----------------------|
| POST   | `/api/movies/create`   | Create a new movie    |
| GET    | `/api/movies`          | Get all movies        |
| GET    | `/api/movies/:id`      | Get movie by ID       |
| PUT    | `/api/movies/:id`      | Update movie by ID    |
| DELETE | `/api/movies/:id`      | Delete movie by ID    |

---

## 🧾 Movie Schema

```js
{
  name: String (required),
  releaseyear: Number (required),
  rating: Number (required),
  genre: String (optional)
}
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone your-repo-link
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run the Server

```bash
npm start
```

---

## 📬 Sample Request Body (POST /api/movies/create)

```json
{
  "name": "Inception",
  "releaseyear": 2010,
  "rating": 9,
  "genre": "Sci-Fi"
}
```

---

## 📮 Error Handling

The API returns structured error messages like:

```json
{
  "success": false,
  "message": "Movie not found"
}
```

---

## ✅ Example Success Response

```json
{
  "success": true,
  "message": "Movie created successfully",
  "data": {
    "_id": "64fabc123456...",
    "name": "Interstellar",
    "releaseyear": 2014,
    "rating": 9,
    "genre": "Sci-Fi"
  }
}
```

---

## 💬 Author

Developed by **Ajit Yadav** 🚀  
[GitHub](https://github.com/ajit180)