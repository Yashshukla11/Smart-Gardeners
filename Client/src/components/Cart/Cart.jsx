import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../Context/CartContext";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const checkOutCart = async () => {
    try {
      const cartItems_ = cartItems.map((product) => ({
        productId: product._id,
        quantity: product.quantity,
      }));
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/product/purchase`,
        {
          userId: user._id,
          cart: cartItems_,
        }
      );

      if (response.status === 200) {
        alert("Thank you for shopping with us!");
        clearCart();
        navigate("/shop");
        na;
      } else {
        console.error("Checkout failed:", response.data);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-container">
        <h1 className="cart-title cart_empty">Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="cart-container flex flex-col md:flex-row justify-center">
      <div className="cart-items-container">
        <h1 className="cart-title">Cart</h1>
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-info-container flex flex-col md:flex-row justify-center">
              <img src={item.image} alt={item.title} className="item-image" />
              <div className="item-details">
                <h1 className="item-title">{item.title}</h1>
                <p className="item-price">${item.price}</p> {/* Added $ */}
                <div className="quantity-container mb-5 md:mb-0">
                  <button
                    className="add_remove_text"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="add_remove_text"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          className="add-to-cart-button_right"
          onClick={() => {
            clearCart();
          }}
        >
          Clear cart
        </button>
      </div>

      <div className="side_checkout md:px-[50px]">
        {/* <h1 className="cart-total">Total: ${getCartTotal()}</h1> {/* Added $ */}
        {cartItems.map((item) => (
          <div className="cart-item_right" key={item.id}>
            <div className="item-info-container">
              {/* <img
                src={item.thumbnail}
                alt={item.title}
                className="item-image"
              /> */}
              <div className="item_details_right">
                <h1 className="item-title">{item.title}</h1>
                <p className="item-price">Qty. {item.quantity}</p>{" "}
                {/* Added $ */}
                <p className="item-price">Price: ${item.price}</p>{" "}
                {/* Added $ */}
                {/* <div className="quantity-container">
                  <button
                    className="quantity-button"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="quantity-button"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    +
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
        <h1 className="cart-total">Total: ${getCartTotal()}</h1>
        <button
          className="add-to-cart-button_right"
          onClick={() => {
            checkOutCart();
          }}
        >
          Checkout
        </button>
      </div>
      {/* {cartItems.length > 0 ? (
        <div className="cart-total-container">
          <h1 className="cart-total">Total: ${getCartTotal()}</h1>
          <button
            className="clear-cart-button"
            onClick={() => {
              clearCart();
            }}
          >
            Clear cart
          </button>
        </div>
      ) : (
        <h1 className="empty-cart-message">Your cart is empty</h1>
      )} */}
    </div>
  );
};

export default Cart;
