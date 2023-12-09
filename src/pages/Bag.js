import React from "react";
import { useBag } from "../components/BagContext";
import { useLocation } from "react-router-dom";
import "../components/styles/Bag.css";
import SideBar from "../components/SideBar";
import BagPage from "../components/BagPage";

const Bag = () => {
  // Access bagItems, removeFromBag, and updateQuantity functions from BagContext
  const { bagItems, removeFromBag, updateQuantity } = useBag();

  // Get the current location from react-router-dom
  const location = useLocation();

  // Handle decreasing or removing the quantity of an item in the bag
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      // Remove the item from the bag if quantity becomes 0
      removeFromBag(bagItems.find((item) => item.id === itemId));
    } else {
      // Update the quantity of the item in the bag
      const product = bagItems.find((item) => item.id === itemId);
      updateQuantity(product, newQuantity);
    }
  };

  // Check if the current page is the Checkout page
  const isCheckoutPage = location.pathname === "/Checkout";

  return (
    <div className="bag-container">
      {/* Render the Sidebar and BagPage only if not on the Checkout page */}
      {!isCheckoutPage && <SideBar />}
      {!isCheckoutPage && <BagPage />}

      {/* List the bag items */}
      <ul className="bag-list">
        <h1 className="product-heading">Check Your Bag Items</h1>
        {bagItems.map((item, index) => (
          <li key={index} className="bag-item">
            <div className="bag-item-content">
              {/* Display item image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="bag-item-img"
              />
              <div className="bag-item-details">
                {/* Display item details */}
                <h2 className="product-title">{item.title}</h2>
                <p className="product-description">{item.description}</p>
                <p className="product-description">{item.brief}</p>
                <p
                  className="product-description-r"
                  style={{ color: "#12805D" }}
                >
                  {item.rating}
                </p>
                <p className="product-description">
                  {item.currency} {item.price.toFixed(2)}
                </p>

                {/* Decrease item quantity */}
                <button
                  className="quantity-button-minus"
                  onClick={() =>
                    handleQuantityChange(
                      item.id,
                      Math.max(0, item.quantity - 1)
                    )
                  }
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                {/* Increase item quantity */}
                <button
                  className="quantity-button-plus"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bag;
