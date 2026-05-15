# Premium Item Display - MEAN Stack Application

A beautifully designed, full-stack web application built using the MEAN stack (MongoDB, Express.js, Angular, Node.js). This project demonstrates a clean architecture for fetching and displaying a premium curated list of items.

## Features

*   **Modern Frontend**: Built with Angular 17+, featuring a responsive, dynamic UI with glassmorphism aesthetics, fluid micro-animations, and modern typography.
*   **Robust Backend**: Express.js REST API providing seamless data retrieval.
*   **Zero-Setup Database**: Utilizes `mongodb-memory-server` to automatically spin up a fully functional, in-memory MongoDB instance on launch. No local database installation or configuration is required to run this project!
*   **Automated Seeding**: The database automatically populates with sample premium product data upon startup.

## Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   [npm](https://www.npmjs.com/) (Node Package Manager)
*   [Angular CLI](https://angular.io/cli) (Optional, but recommended for development)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <your-repository-directory>
```

### 2. Start the Backend Server

The backend requires dependencies to be installed first. Once started, it will automatically download the necessary MongoDB binaries (only on the very first run), start the in-memory database, seed the data, and listen for incoming API requests.

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the Express server
npm start
```

The backend server will run on `http://localhost:3000`.

### 3. Start the Frontend Application

Open a new terminal window/tab to start the Angular frontend.

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the Angular development server
npm start
```

The frontend application will compile and become available at `http://localhost:4200`.

## Tech Stack

*   **MongoDB**: In-memory NoSQL database (`mongodb-memory-server`)
*   **Express.js**: Backend web application framework
*   **Angular**: Frontend framework
*   **Node.js**: JavaScript runtime environment
