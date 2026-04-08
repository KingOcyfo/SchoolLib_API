# 📚 School Library Management API

A RESTful API built with Node.js, Express, and MongoDB for managing a school library system.

---

## 🚀 Tech Stack

- Node.js  
- Express.js  
- MongoDB (Mongoose)  

---

## 📂 Project Structure

```
config/
models/
controllers/
routes/
app.js
server.js
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/YourUsername/school-library-api.git
cd school-library-api
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Create a `.env` file

```
MONGO_URI=mongodb://127.0.0.1:27017/libraryDB
PORT=5000
```

---

### 4. Run the server

```
npm run dev
```

---

## 🌐 Base URL

```
http://localhost:5000
```

---

# 📘 API Documentation

---

## 🔹 Authors

### Create Author  
**POST** `/authors`

```
{
  "name": "Chinua Achebe",
  "bio": "Writer"
}
```

---

### Get All Authors  
**GET** `/authors`

---

### Get Single Author  
**GET** `/authors/:id`

---

### Update Author  
**PUT** `/authors/:id`

---

### Delete Author  
**DELETE** `/authors/:id`

---

## 🔹 Books

### Create Book  
**POST** `/books`

```
{
  "title": "Things Fall Apart",
  "isbn": "123456789",
  "authors": ["AUTHOR_ID"]
}
```

---

### Get All Books  
**GET** `/books`

---

### Get Single Book  
**GET** `/books/:id`

> Returns populated authors, student, and attendant

---

### Update Book  
**PUT** `/books/:id`

---

### Delete Book  
**DELETE** `/books/:id`

---

## 🔗 Relationships

- A Book can have multiple Authors  
- A Book belongs to one Student when borrowed  
- A Book is issued by one Library Attendant  

---

## 📊 Book Status

| Status | Meaning |
|--------|--------|
| IN     | Available |
| OUT    | Borrowed |

---

## ✅ Features

- CRUD operations for Authors  
- CRUD operations for Books  
- Data relationships using ObjectId  
- Data population using Mongoose

