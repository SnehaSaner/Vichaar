console.log("====== Starting server.js ======");
require('dotenv').config();
console.log("Loaded .env");
console.log("PORT is", process.env.PORT);
console.log("DB_NAME is", process.env.DB_NAME);

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

// MySQL DB Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('✅ Connected to MySQL!');
  }
});

// API Routes
const userRoutes = require('./backend/routes/userRoutes');
const projectRoutes = require('./backend/routes/projectRoutes');
const publicationRoutes = require('./backend/routes/publicationRoutes');
const progressRoutes = require('./backend/routes/progressRoutes');
const fundingRoutes = require('./backend/routes/fundingRoute');
const mentorshipRoutes = require('./backend/routes/mentorshipRoutes'); 
const authRoutes = require('./backend/routes/authRoute');


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/publications', publicationRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/fundings', fundingRoutes);
app.use('/api/mentorships', mentorshipRoutes);

// 👉 Serve frontend build
const frontendPath = path.join(__dirname, '../Vichaaar.main/dist');
app.use(express.static(frontendPath));

// 👉 Catch-all for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
