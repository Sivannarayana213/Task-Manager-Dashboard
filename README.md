# Task-Manager-Dashboard
✅ Task Management

Create new tasks

Update existing tasks

Delete tasks

View tasks with pagination

Live search by title or description

✅ Audit Logs

Logs every CREATE / UPDATE / DELETE action

Shows timestamp, action type, task ID, and updated content

Color-coded action pills (Green/Yellow/Red)

Paginated UI identical to assignment PDF

✅ Frontend (React)

Modern UI with custom dark theme

Reusable components (TaskModal, Layout, Sidebar)

Axios API integration

Auto-search debounce

Fully responsive design

✅ Backend (Spring Boot)

RESTful API architecture

Basic Authentication

JPA + H2

Clean service + controller layers

Automatic audit logging

🛠 Technology Stack
Frontend

React + Vite

Axios

Custom CSS

React Router

Backend

Java 17

Spring Boot

Spring Security

Spring Data JPA

H2 / PostgreSQL

Maven

📂 Project Structure
/frontend
   /src
      /components
      /pages
      /api
      tasks.css
      logs.css

/backend
   /src/main/java/com/example/taskmanager
      /controller
      /service
      /repository
      /model
      /config
   application.properties

🔧 Installation & Setup
1️⃣ Backend Setup
cd backend/taskmanager
mvn spring-boot:run


Backend runs on:
👉 http://localhost:8090

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:
👉 http://localhost:5173

🔐 Authentication

The backend is protected with Basic Auth.

Username: admin
Password: password123


Axios automatically sends credentials for every request.

