const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017/trekking', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});