import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserData from "./UserData";
import "./styles/ChangeUserInfo.css";
import { Link } from "react-router-dom";

const ChangeUserInfo = () => {
  const user = UserData[0];
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [street, setStreet] = useState(user.shippingAddress.street);
  const [city, setCity] = useState(user.shippingAddress.city);
  const [state, setState] = useState(user.shippingAddress.state);
  const [country, setCountry] = useState(user.shippingAddress.country);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      name,
      shippingAddress: {
        street,
        city,
        state,
        country,
      },
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    navigate("/checkout");
  };

  return (
    <div className="change-user-info-container">
      <div className="name-box">
        <form onSubmit={handleSubmit}>
          <div className="ship-name">
            <label htmlFor="name">Shipping Name</label>
            <div className="input-field">
              <input
                type="text"
                id="name"
                className="input-area"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="ship-name">
            <label className="ship-name" htmlFor="street">
              Street Name
            </label>
            <div className="input-field">
              <input
                type="text"
                id="street"
                className="input-area"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
          </div>
          <div className="ship-name">
            <label className="ship-name" htmlFor="city">
              City
            </label>
            <div className="input-field">
              <input
                type="text"
                id="city"
                className="input-area"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className="ship-name">
            <label className="ship-name" htmlFor="state">
              State / Province
            </label>
            <div className="input-field">
              <input
                type="text"
                id="state"
                className="input-area"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div className="ship-name">
            <label className="ship-name" htmlFor="country">
              Country
            </label>
            <div className="input-field">
              <input
                type="text"
                id="country"
                className="input-area"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <p className="checkbox-group">
            <svg
              className="checkbox-ship"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="16"
                height="16"
                rx="2"
                stroke="#60695C"
                stroke-linejoin="round"
              />
              <rect x="3" y="3" width="12" height="12" rx="1" fill="#12805D" />
            </svg>
            <span className="check-text">
              Save this as your default address
            </span>
          </p>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary save-changes-button"
            >
              Add Address
            </button>
            <div className="bottom-section">
              <Link to="/checkout" className="back-btn">
                <u>Back</u>
              </Link>
              <div className="secure-connection">
                <span className="secure-connect">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.25 9.5H16.5V5.75C16.5 4.55653 16.0259 3.41193 15.182 2.56802C14.3381 1.72411 13.1935 1.25 12 1.25C10.8065 1.25 9.66193 1.72411 8.81802 2.56802C7.97411 3.41193 7.5 4.55653 7.5 5.75V9.5H6.75C5.95462 9.50087 5.19206 9.81722 4.62964 10.3796C4.06722 10.9421 3.75087 11.7046 3.75 12.5V20.75C3.75087 21.5454 4.06722 22.3079 4.62964 22.8704C5.19206 23.4328 5.95462 23.7491 6.75 23.75H17.25C18.0454 23.7491 18.8079 23.4328 19.3704 22.8704C19.9328 22.3079 20.2491 21.5454 20.25 20.75V12.5C20.2491 11.7046 19.9328 10.9421 19.3704 10.3796C18.8079 9.81722 18.0454 9.50087 17.25 9.5ZM15 9.5H9V5.75C9 4.95435 9.31607 4.19129 9.87868 3.62868C10.4413 3.06607 11.2044 2.75 12 2.75C12.7956 2.75 13.5587 3.06607 14.1213 3.62868C14.6839 4.19129 15 4.95435 15 5.75V9.5Z"
                      fill="#02D693"
                    />
                  </svg>
                  Secure Connection
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeUserInfo;