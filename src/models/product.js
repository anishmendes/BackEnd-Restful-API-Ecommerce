
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({


  //id for the product
  id: { 
    type: String,
     required: true,
      unique: true 
    },

    //name of the product
    name: { 
      type: String, 
      required: true 
    },

  // company: {
  //    type: String, 
  //   required: true 
  // },


  //price for the product
  price: { 
    type: Number, 
    required: true 
  },

  // colors: {
  //    type: [String],
  //     required: true
  //    },

  //image of the pickles 
  image: {
     type: String,
      required: true 
    },


  //desc of the each pickle 
  description: {
     type: String,
      required: true
     },

     //chact of the each pickle it gonna be either veg or nonveg 
     category: {
       type: String,
        required: true 
      },

    //  featured: {
    //    type: Boolean,
    //     default: false 
    //   },
        

    //shipped of add to cart 
     shipping: {
       type: Boolean,
        default: false
       }

})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;