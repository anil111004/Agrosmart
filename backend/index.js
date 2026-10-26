const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const loginRoutes = require('./routes/loginroutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.set('trust proxy', 1);
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || 'http://localhost:8080',
  credentials: true
}));
app.use(express.json());

// 🧠 Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    collectionName: 'sessions',
    ttl: 60 * 60 // 1 hour
  }),
  cookie: {
    maxAge: 1000 * 60 * 60, // 1 hour
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  }
}));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/auth', loginRoutes);

app.get('/', (req, res) => {
  res.send('Server running 🚀');
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
  });
});