import React, { useState, useEffect, useContext } from "react";
import "./Products.css";
import { CartContext } from "../../Context/CartContext.jsx";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // Set products from JSON data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/product`
        );
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to get quantity of a product in cart
  const getQuantityInCart = (productId) => {
    const cartItem = cartItems.find((item) => item._id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <>
      <div className="products-container">
        <h1 className="title">Smart Gardener's Shop</h1>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="product-info">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-description">
                  {product.description.slice(0, 40)}...
                </p>
                <p className="product-price">${product.price}</p>
              </div>
              <div className="product-actions mt-3">
                {/* Display quantity and buttons if the product is in cart */}
                {getQuantityInCart(product._id) > 0 ? (
                  <div className="quantity-container">
                    <button
                      className="add_remove_text"
                      onClick={() => {
                        removeFromCart(product);
                      }}
                    >
                      -
                    </button>
                    <span className="quantity">
                      {getQuantityInCart(product._id)}
                    </span>
                    <button
                      className="add_remove_text"
                      onClick={() => {
                        addToCart(product);
                      }}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="add-to-cart-button"
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
