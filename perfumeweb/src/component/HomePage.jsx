import axios from 'axios';
import { useEffect, useState } from 'react';
import Banner from './Banner';
import ProductCard from './ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Banner />
      <div className="container">
      <h2 className="text-center mt-4">Our Products</h2>
      {/* Flex container */}
      <div className="d-flex flex-wrap justify-content-between mt-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
      {/* <div className="product-list">
        {products.map(product => <ProductCard key={product._id} product={product} />)}
      </div> */}
    </div>
  );
};

export default HomePage;
