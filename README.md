
# Job Portal - MERN Stack Web Application

A complete job portal built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. This platform provides features for both employers and job seekers, including job listings, applications, and admin-level controls.

---

## 🔧 Folder Structure

```
job-portal/
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── node_modules/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   ├── auth/
│   │   │   └── shared/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── redux/
│   │   ├── utils/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── components.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── jsconfig.json
│   ├── package.json
│   └── package-lock.json
```

---

## ⚙️ Tech Stack

- **Frontend**: React.js, Redux Toolkit, TailwindCSS or plain CSS, Axios
- **Backend**: Node.js, Express.js, MongoDB with Mongoose
- **Authentication**: JWT, bcrypt, Protected Routes
- **API**: RESTful services for jobs, users, applications, and companies

---

## 🌟 Key Features

### 👤 Job Seeker Functionality
- Register & login
- Browse and search jobs
- Apply for jobs
- View applied jobs
- Edit profile

### 🏢 Employer/Admin Functionality
- Post new jobs
- View applicants
- Manage companies (create, edit, setup)
- Job overview table and dashboard

### 🔒 Authentication & Authorization
- Role-based access (admin/job seeker)
- JWT-protected routes (`ProtectedRoute.jsx`)

---

## 🚀 Getting Started

### Backend Setup
```bash
cd backend
npm install
# Add a `.env` file with variables:
# PORT=5000
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev  # or npm start
```

Visit `http://localhost:5173` for the frontend and `http://localhost:5000` for backend APIs.

---

## 🧠 Frontend Components Breakdown

- **components/admin**: Jobs, companies, applicants, admin dashboards
- **components/auth**: Login & signup flows
- **components/shared**: Footer, Navbar
- **lib/**: Utility helpers (e.g., axios interceptors)
- **redux/**: State management slices (auth, job, company, application)
- **hooks/**: Custom hooks for data fetching (e.g., useGetAllJobs)
- **utils/**: Constants and reusable helpers

---

## 📌 Example Environment Variables

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/jobportal
JWT_SECRET=myverysecurejwtkey
```

---

---

## 📄 License

This project is released under the MIT License.

---

## 🤝 Contribution

Pull requests and suggestions are welcome! Fork the repo, make your changes, and submit a PR.

---

## 👨‍💻 Author

Developed by **Abhishek Kumar** — [GitHub Profile](https://github.com/abhishekgh9)
