const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  line:String,
  description: String,
  price: Number,
  sizes: [String],
});

module.exports = mongoose.model('Product', productSchema);
