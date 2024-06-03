
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

  id: { 
    type: String,
     required: true,
      unique: true 
    },

    
})