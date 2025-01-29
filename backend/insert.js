const mongoose = require('mongoose');
const Product = require('./models/product');
const Review = require('./models/review');

// Connect to MongoDB
mongoose.connect('mongodb+srv://suhanachaudhary212:LHUQTrYZRnd9piaq@cluster0.t385e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

const insertData = async () => {
  try {
    // Insert 5 perfumes into the database
    const products = await Product.insertMany([
      {
        name: 'Lavender Perfume',
        image: 'https://techmoduler.com/wp-content/uploads/2023/08/Perfume-Promotion.jpg', // Replace with actual image URL or path
        line: 'A soothing lavender fragrance',
        description:' Immerse yourself in the delicate harmony of fresh jasmine petals and warm amber. This perfume is a timeless ode to elegance, perfect for every moment worth cherishing.A crisp and refreshing scent inspired by sea breezes and sunlit waves. Notes of aquatic florals and zesty citrus awaken your senses with every spritz',
        price: 599,
        sizes: ['50ml', '100ml'],
      },
      {
        name: 'Rose Perfume',
        image: 'https://editorialist.com/wp-content/uploads/2022/02/Best-Rose-Perfume-_-Holding_-Hero.jpg',
        line: 'A romantic and floral fragrance',
        description:'A romantic fusion of blooming roses, sweet lychee, and soft powdery musk. This scent embodies the essence of love and elegance in every spray.A sensual mix of dark plum, black orchid, and smoky patchouli. The perfect companion for evenings filled with intrigue and allure.',
        price: 600,
        sizes: ['50ml', '100ml'],
      },
      {
        name: 'Jasmine Perfume',
        image: 'https://www.perfume.com/blog/wp-content/uploads/2023/06/best-jasmine-perfumes-scaled.jpeg',
        line: 'A sweet, floral, and exotic scent',
        description:"A dreamy combination of lavender, bergamot, and warm cedarwood. Perfect for winding down your evening with a touch of grace and serenity.A sensual mix of dark plum, black orchid, and smoky patchouli. The perfect companion for evenings filled with intrigue and allure.",
        price: 550,
        sizes: ['50ml', '100ml'],
      },
      {
        name: 'Vanilla Perfume',
        image: 'https://i5.walmartimages.com/asr/c20bf60f-ad88-4072-ab66-82afa898d80f.44b1d9b926dea3d22221d7937ad3c848.jpeg',
        line: 'A warm and comforting fragrance',
        description:'A luxurious blend of creamy vanilla, golden honey, and rich musk. This perfume evokes warmth and comfort, enveloping you in a golden glow that lingers all day.A sensual mix of dark plum, black orchid, and smoky patchouli. The perfect companion for evenings filled with intrigue and allure.',
        price: 300,
        sizes: ['50ml', '100ml'],
      },
      {
        name: 'Citrus Perfume',
        image: 'https://www.hergamut.com/wp-content/uploads/2019/10/Best-citrus-perfumes.jpg',
        line: 'A fresh and invigorating citrus scent',
        description:'A bold explosion of exotic florals, juicy berries, and earthy vetiver. Let your adventurous spirit run free with this captivating fragrance.',
        price: 500,
        sizes: ['50ml', '100ml'],
      },
      {
        name: 'Sauvage Perfune',
        image: 'https://staticg.sportskeeda.com/editor/2024/01/359f6-17050473443874-1920.jpg',
        line: 'A fresh and invigorating citrus scent',
        description:'A warm and cozy blend of golden amber, caramel, and soft vanilla. This scent wraps you in comfort and leaves a lasting impression wherever you go.A sensual mix of dark plum, black orchid, and smoky patchouli. The perfect companion for evenings filled with intrigue and allure.',
        price: 400,
        sizes: ['50ml', '100ml'],
      },
    ]);

    console.log('Inserted products:', products);

    // Insert 6 reviews (you can adjust productId to match the actual product inserted)
    const reviews = await Review.insertMany([
      {
        productId: products[0]._id,  // Reference to the first product inserted
        rating: 5,
        comment: 'Amazing fragrance! I love it.',
      },
      {
        productId: products[1]._id,
        rating: 4,
        comment: 'Smells great, but a bit strong.',
      },
      {
        productId: products[2]._id,
        rating: 5,
        comment: 'My favorite perfume! Very long-lasting.',
      },
      {
        productId: products[3]._id,
        rating: 3,
        comment: 'The scent is good, but not as strong as I expected.',
      },
      {
        productId: products[4]._id,
        rating: 4,
        comment: 'Fresh and citrusy, perfect for summer.',
      },
      {
        productId: products[0]._id,
        rating: 5,
        comment: 'This lavender perfume is perfect for calming moments.',
      },
      {
        productId: products[5]._id,
        rating: 5,
        comment: 'This lavender perfume is perfect for calming moments.',
      },
      {
        productId: products[5]._id,
        rating: 5,
        comment: 'This lavender perfume is perfect for calming moments.',
      },
      {
        productId: products[1]._id,
        rating: 5,
        comment: 'This lavender perfume is perfect for calming moments.',
      },
      {
        productId: products[2]._id,
        rating: 5,
        comment: 'This lavender perfume is perfect for calming moments.',
      },
      {
        productId: products[3]._id,
        rating: 5,
        comment: 'This lavender perfume is perfect for calming moments.',
      },
    ]);

    console.log('Inserted reviews:', reviews);
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    mongoose.disconnect();
  }
};

// const deleteData = async () => {
//   try {
//     // Delete all products
//     const productDeleteResult = await Product.deleteMany({});
//     console.log('Deleted products:', productDeleteResult);

//     // Delete all reviews
//     const reviewDeleteResult = await Review.deleteMany({});
//     console.log('Deleted reviews:', reviewDeleteResult);
//   } catch (err) {
//     console.error('Error deleting data:', err);
//   } finally {
//     mongoose.disconnect();
//   }
// };
// deleteData();


insertData();
