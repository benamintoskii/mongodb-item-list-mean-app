# Premium Item Display - MEAN Stack Application

A simple full-stack web application built with the MEAN stack (MongoDB, Express.js, Angular, and Node.js).

This project demonstrates how to fetch and display a list of items stored in a MongoDB database through a REST API using an Angular frontend.

---

## Features

- Angular frontend for displaying item data
- Express.js REST API backend
- MongoDB integration using `mongodb-memory-server`
- Automatic database seeding with sample data
- Responsive and clean UI
- Simple MEAN stack project structure

---

## Tech Stack

- MongoDB (`mongodb-memory-server`)
- Express.js
- Angular
- Node.js

---

## Prerequisites

Before running the project, make sure you have installed:

- Node.js (v18 or later recommended)
- npm
- Angular CLI (optional but recommended)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/benamintoskii/mongodb-item-list-mean-app.git
cd mongodb-item-list-mean-app
```

---

### 2. Start the Backend

```bash
cd backend
npm install
npm start
```

The backend server will run on:

```bash
http://localhost:3000
```

---

### 3. Start the Frontend

Open a new terminal window and run:

```bash
cd frontend
npm install
npm start
```

The Angular frontend will run on:

```bash
http://localhost:4200
```

---

## API Endpoint

```http
GET /api/items
```

Returns a list of sample items from the MongoDB database.

---

## Project Structure

```bash
mongodb-item-list-mean-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   └── src/
│
└── README.md
```

---

## Notes

- The project uses `mongodb-memory-server`, so no external MongoDB installation is required.
- Sample data is automatically seeded when the backend server starts.

---

## Author

GitHub:  
https://github.com/benamintoskii
