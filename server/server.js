const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product');

const app = express();
const PORT = process.env.PORT || 5000;