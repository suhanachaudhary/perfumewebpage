const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product');
const Review = require('./models/review');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://suhanachaudhary212:LHUQTrYZRnd9piaq@cluster0.t385e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("Mongodb connected");
}).catch((err)=>{
  console.log("some error occur");
})

// Product Route
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Product Route
app.get('/api/reviews', async (req, res) => {
  const review=await Review.find();
  res.json(review);
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

app.get('/api/reviews/:id', async (req, res) => {
  try {
    const productId = req.params.id;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: 'Invalid product ID format' });
    }

    // Convert to ObjectId
    const objectId = new mongoose.Types.ObjectId(productId);

    console.log('Fetching reviews for product ID:', objectId);

    // Fetch reviews
    const reviews = await Review.find({ productId: objectId });
    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: 'No reviews found for this product' });
    }

    res.json(reviews);
  } catch (err) {
    console.error('Error fetching reviews:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


// Start Server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
