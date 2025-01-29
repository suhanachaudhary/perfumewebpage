import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook

const ProductPage = () => {
  const handleShare = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const pageUrl = window.location.href; // Get current page URL

    // Build share URLs
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      pageUrl
    )}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      pageUrl
    )}`;
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      pageUrl
    )}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(pageUrl)}`;

    // Prompt user for a choice
    const platform = window.prompt(
      "Choose a platform to share on:\n1. Facebook\n2. Twitter\n3. LinkedIn\n4. WhatsApp\nEnter the number of your choice:"
    );

    switch (platform) {
      case "1":
        window.open(facebookUrl, "_blank");
        break;
      case "2":
        window.open(twitterUrl, "_blank");
        break;
      case "3":
        window.open(linkedinUrl, "_blank");
        break;
      case "4":
        window.open(whatsappUrl, "_blank");
        break;
      default:
        alert("Invalid choice or action canceled.");
    }
  };

  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch product details by ID
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((err) => console.log(err));

    // Fetch reviews for the product by ID
    axios
      .get(`http://localhost:5000/api/reviews/${id}`)
      .then((response) => setReviews(response.data))
      .catch((err) => console.log(err));
  }, [id]); // Re-fetch data if the ID changes

  if (!product) return <div>Loading...</div>;

  function changeImage(event, src) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    event.target.classList.add('active');
}

  return (
    <div>
      <div className="container mt-3">
        <h2 className="text-center mb-5">Product Details</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src={product.image}
              alt="Product"
              className="img-fluid rounded mb-3 product-image"
              id="mainImage"
            />
            <div className="d-flex justify-content-between">
              <img
                src={product.image}
                alt="Thumbnail 1"
                className="thumbnail rounded active"
                onClick={(e) => changeImage(e, product.image)}
              />
              <img
                src={product.image}
                alt="Thumbnail 2"
                className="thumbnail rounded"
                onClick={(e) => changeImage(e, product.image)}
              />
              <img
                src={product.image}
                alt="Thumbnail 3"
                className="thumbnail rounded"
                onClick={(e) => changeImage(e, product.image)}
              />
              <img
                src={product.image}
                alt="Thumbnail 4"
                className="thumbnail rounded"
                onClick={(e) => changeImage(e, product.image)}
              />
            </div>
          </div>
          <div className="col-md-6 mt-7">
            <h3
              className="text-center"
              style={{ color: "rgb(0,132,216)" }}
            >
              {product.name}
            </h3>
            <div className="mb-3">
              <p className="mt-3">
                <b>Description: </b>
                {product.description}
              </p>
              <br />
              <p>
                <b>Sizes: </b>
                {product.sizes?.[0]}, {product.sizes?.[1]}
              </p>
            </div>
            <div className="mb-3">
              <span className="h5 me-2">
                <b className="h6 me-2">Price: </b>
                {product.price} Rs.
              </span>
              <span className="badge bg-danger ms-2 me-2">10% OFF</span>
            </div>
            <div className="mt-4">
                <h5>Key Features:</h5>
                <ul>
                    <li>Long-lasting fragrance that stays fresh for 8–12 hours.</li>
                    <li>Strong and enduring scent.</li>
                    <li>Highly concentrated, luxurious, and skin-friendly.</li>
                    <li>Scents designed to uplift mood, reduce stress, or boost confidence.</li>
                </ul>
            </div>

            <a
              href="#"
              className="col-12 btn btn-primary btn-lg me-2 mt-3"
              onClick={handleShare}
            >
              Share on Social Media
            </a>
          </div>
        </div>
      </div>

      <h2 className="text-center mt-5 mb-3">Reviews</h2>
      <div className="container reviews">
        {reviews.length === 0 ? (
          <p>No reviews available for this product.</p>
        ) : (
          reviews.map((review) => (
            <div key={review._id} className="card col-6 py-3 px-3 review">
              <h5 className="card-title">{review.rating} Stars</h5>
              <p>{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;
