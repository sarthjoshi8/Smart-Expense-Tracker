# 💰 SmartExpenseTracker

SmartExpenseTracker is a full-stack expense management application built using React, Node.js, Express.js, and MongoDB. The application helps users track their daily expenses, organize spending by categories, and manage financial records through complete CRUD operations.

---

## 🚀 Features

- Add new expenses
- View all expenses
- Update existing expenses
- Delete expenses
- Categorize expenses
- Search and filter records
- Monthly expense tracking
- Responsive user interface
- RESTful API integration
- MongoDB database storage

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- React Router DOM
- CSS / Bootstrap / Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Development Tools
- Git
- GitHub
- Postman
- VS Code

---

## 📂 Project Structure

```text
SmartExpenseTracker
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
├── server
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   └── expenseController.js
│   │
│   ├── models
│   │   └── Expense.js
│   │
│   ├── routes
│   │   └── expenseRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
├── .env
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/SmartExpenseTracker.git
cd SmartExpenseTracker
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the server directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Start Backend Server

```bash
npm run dev
```

or

```bash
npm start
```

Server will run at:

```text
http://localhost:5000
```

---

### 5. Install Frontend Dependencies

```bash
cd client
npm install
```

### 6. Start Frontend

```bash
npm start
```

Application will run at:

```text
http://localhost:3000
```

---

## 🔌 API Endpoints

### Create Expense

```http
POST /api/expenses
```

### Get All Expenses

```http
GET /api/expenses
```

### Get Expense By ID

```http
GET /api/expenses/:id
```

### Update Expense

```http
PUT /api/expenses/:id
```

### Delete Expense

```http
DELETE /api/expenses/:id
```

---

## 🗄️ Database Schema

```javascript
const ExpenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
```

---

## 📸 Screenshots

Add your project screenshots here.

### Dashboard

![Dashboard Screenshot](screenshots/dashboard.png)

### Add Expense Page

![Add Expense Screenshot](screenshots/add-expense.png)

---

## 🎯 Future Improvements

- JWT Authentication
- Expense Analytics Dashboard
- Charts and Graphs
- Budget Management
- PDF/Excel Export
- Dark Mode
- Multi-user Support
- Email Notifications

---

## 📚 Learning Outcomes

This project demonstrates:

- Full-Stack Web Development
- React Component Architecture
- State Management
- REST API Development
- MongoDB Integration
- CRUD Operations
- MVC Architecture
- Client-Server Communication

---

## 👨‍💻 Author

**Sarth Joshi**

B.Tech Computer Science Engineering

GitHub: https://github.com/your-username

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you like this project, don't forget to star the repository.
