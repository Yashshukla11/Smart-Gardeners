import React, { useState, useEffect, useContext } from "react";
import "./Products.css";
import { CartContext } from "../../Context/CartContext.jsx";
import productsData from "./Products.json";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // Set products from JSON data
  useEffect(() => {
    setProducts(productsData);
  }, []);

  // Function to get quantity of a product in cart
  const getQuantityInCart = (productId) => {
    const cartItem = cartItems.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <>
      <div className="products-container">
        <h1 className="title">Smart Gardener's Shop</h1>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.thumbnail}
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
              <div className="product-actions">
                {/* Display quantity and buttons if the product is in cart */}
                {getQuantityInCart(product.id) > 0 ? (
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
                      {getQuantityInCart(product.id)}
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
