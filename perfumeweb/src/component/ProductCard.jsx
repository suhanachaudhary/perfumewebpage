
import { Link } from 'react-router-dom';
import '../App.css';

const ProductCard = ({ product }) => {
  return (
    <div>
          <div className="card product-card mb-5">
            <img src={product.image} alt="" className="card-img-top"/>
            <div className="card-body">
              <div className="d-flex justify-content-between">
              <h5 className="card-title">{product.name}</h5>
              <p className="h6">{product.price} Rs.</p></div>
              <p className="card-text">{product.line}</p>
              <Link to={`/product/${product._id}`} className="btn btn-primary btn-sm">View Details</Link>
            </div>
          </div>
    </div>
  );
};

export default ProductCard;
