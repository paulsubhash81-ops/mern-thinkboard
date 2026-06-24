# 🧠 Thinkboard - Productivity Notes App.

> A modern, collaborative thought management platform built with the MERN stack. Organize, visualize, and share your ideas seamlessly.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)

---

## 🎯 Overview

**MERN Thinkboard** is a full-stack web application designed to help users capture, organize, and collaborate on ideas in real-time. Whether you're brainstorming for a project, managing team initiatives, or building personal knowledge bases, Thinkboard provides an intuitive interface and robust backend to support your workflow.

### Use Cases
- 💡 Personal idea management and note-taking
- 🤝 Team collaboration and brainstorming sessions
- 📊 Project planning and task organization
- 🎓 Learning and knowledge documentation

---

## ✨ Key Features

✅ **Intuitive UI** - Clean, modern interface for effortless idea organization  
✅ **Responsive Design** - Optimized for desktop and mobile devices  
✅ **Secure Backend** - Robust API with CRUD Functionality.  
✅ **Data Persistence** - MongoDB for reliable data storage  
✅ **Scalable Architecture** - Built with modularity and performance in mind  

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | React.js, HTML5, CSS3 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Language Composition** | JavaScript (98%), HTML (1.7%), CSS (0.3%) |
| **Runtime** | Node.js |

---

## 📁 Project Structure

```
mern-thinkboard/
├── frontend/              # React-based client application
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/               # Express.js server & API
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── package.json
├── package.json           # Root-level dependencies
└��─ README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (local or cloud instance)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/paulsubhash81-ops/mern-thinkboard.git
   cd mern-thinkboard
   ```

2. **Install Root Dependencies**
   ```bash
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

5. **Configure Environment Variables**
   Create a `.env` file in the backend directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```

---

## ▶️ Running the Application

### Development Mode

1. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

2. **Run the Full Stack**
   ```bash
   npm run dev
   ```
   
   Or run frontend and backend separately:
   
   **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm start
   ```
   
   **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm start
   ```

3. **Access the Application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

---

**Happy Thinking! 🧠✨**
