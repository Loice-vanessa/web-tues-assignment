# Clinic Management System

One project with two parts:

- `backend/`  – Spring Boot + PostgreSQL REST API (port 8082)
- `frontend/` – React + Vite user interface (port 5173)

## Run the backend
1. Create a PostgreSQL database called `clinic`.
2. Check the username/password in `backend/src/main/resources/application.properties`.
3. In `backend/`: `./mvnw spring-boot:run` (Windows: `mvnw.cmd spring-boot:run`)

## Run the frontend
In `frontend/`: `npm install` then `npm run dev`, and open http://localhost:5173

## Office API
| Method | URL | What it does |
|---|---|---|
| POST | /api/office/save | Save an office `{ "name": "...", "officeNumber": 1 }` |
| GET | /api/office/all | List all offices |
| DELETE | /api/office/deleteByNumber/{officeNumber} | Delete an office by its number |
