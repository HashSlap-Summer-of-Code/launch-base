# HEADING
A complete authentication system built with Node.js, Express, MongoDB, React, and JWT tokens.
# 📁 Project Structure
fullstack-auth-template/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── ProtectedRoute.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
├── README.md
└── .gitignore


# 📋 Features
# Backend Features

✅ User registration with email validation
✅ User login with JWT token generation
✅ Password hashing with bcrypt
✅ Protected routes with JWT middleware
✅ User profile retrieval
✅ MongoDB integration with Mongoose
✅ Input validation and sanitization
✅ Error handling middleware
✅ CORS configuration

# Frontend Features

✅ React with hooks (useState, useEffect, useContext)
✅ User registration form
✅ User login form
✅ Protected dashboard
✅ JWT token management
✅ Automatic token refresh
✅ Route protection
✅ Global authentication state
✅ Responsive design
✅ Form validation

# Run Application

1 Backend
cd backend
npm install
.env    MONGODB_URI=
        JWT_SECRET=
        PORT=
npm run dev

2 Frontend
cd frontend
npm install
.env    REACT_APP_API_URL=
npm start