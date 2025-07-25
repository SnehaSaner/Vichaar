# 📚 Vichaar – Research & Innovation Management System

**Vichaar** is a comprehensive web-based platform that centralizes the management and tracking of research, innovation, and start-up activities. It is designed to help institutions, universities, and government bodies monitor progress, manage mentorships, track funding, and enable smooth collaboration between students and mentors.

---

## 🚀 Key Features

- 🔍 Search & filter research, innovations, and startups
- 👨‍🏫 Mentor assignment & progress tracking
- 💸 Research funding & usage monitoring
- 💬 Commenting & collaboration
- 📊 Visual progress updates
- 🔐 Secure authentication & role-based access

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Version Control:** Git & GitHub

---

## ⚙️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/SnehaSaner/Vichaar.git
   cd Vichaar
## ⚙️ Getting Started

2. **Install backend dependencies**
   ```bash
   npm install

3. **Set up environment variables in .env**
4. PORT=5000
DB_NAME=your_mongodb_database_name
JWT_SECRET=your_jwt_secret_key

4.**Start the development server**
npm start

##  Project Structure
Vichaar/
├── controllers/        # Business logic
├── models/             # Mongoose schemas
├── routes/             # API routes
├── middleware/         # Auth middleware (e.g., JWT)
├── server.js           # Entry point
└── .env                # Environment variables
