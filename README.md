# 🍽️ Restaurant Reservation Website

A full-stack Restaurant Reservation Website built using the MERN stack. Customers can submit reservation requests through a responsive frontend, and the reservation details are stored securely in MongoDB Atlas.

---

## 🚀 Features

- Make restaurant reservations
- Store reservation details in MongoDB Atlas
- View all reservations
- REST API using Express.js
- Responsive React frontend
- Cross-Origin Resource Sharing (CORS) enabled
- Environment variables for sensitive credentials

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- MongoDB Atlas
- dotenv
- express-async-handler
- CORS

---

## 📂 Project Structure

```
restaurants-website/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── API/
│   │    └── reservationapi.js
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Backend

```bash
cd backend
npm install
```

Create a `.env` file.

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

Start the server

```bash
npm start
```

Server runs on

```
http://localhost:4000
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## 📡 API Endpoints

### Add Reservation

```
POST /reservation-details-api/post
```

Request Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "date": "2026-07-20",
  "time": "19:30",
  "numberOfSeats": 4
}
```

---

### Get All Reservations

```
GET /reservation-details-api/get
```

---

## 🌐 Database

This project uses **MongoDB Atlas** as the cloud database.

Database:

```
Restraunt
```

Collection:

```
User-details
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_connection_string
```

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/Restraunt?retryWrites=true&w=majority
```

---

## 📦 Backend Dependencies

```bash
express
mongodb
cors
dotenv
express-async-handler
```

---

## 📦 Frontend Dependencies

```bash
react
axios
vite
```

---

## ▶️ Running the Project

Start backend

```bash
cd backend
npm start
```

Start frontend

```bash
cd frontend
npm run dev
```

Open

```
http://localhost:5173
```

---

## 📸 Screenshots

You can add screenshots here.

Example:

- Home Page
- Reservation Form
- Success Page
- Reservation Details Page

---

## 👨‍💻 Author

**Harsha Vardhan**

GitHub: https://github.com/OWAIZ2005

---

## 📄 License

This project is created for learning purposes.
