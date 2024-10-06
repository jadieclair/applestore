import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/OrderSummary.css";

const OrderSummary = ({ total }) => {
  const navigate = useNavigate();

  const redirectToOrderSuccess = () => {
    // Redirect to the success page
    navigate("/Ordersuccess");
  };

  const formattedTotal = typeof total === "number" ? total.toFixed(2) : "0.00";

  return (
    <>
      <div className="order-summary-sidebar">
        <h6 className="order-sum-head">Order Summary</h6>
        <div className="order-summary-container">
          <div className="sum-con">
            <p>Items:</p>
            <p> $ {formattedTotal}</p>
          </div>
          <div className="sum-con">
            <p>Shipping:</p>
            <p> $ 0.00</p>
          </div>
          <div className="sum-con">
            <p>Estimated GST:</p>
            <p> $ 0.00</p>
          </div>
          <div className="sum-con">
            <p>Gift card:</p>
            <p>$ 0.00</p>
          </div>
          <hr />
          <p className="order-total">Order Total: $ {formattedTotal}</p>
          <hr />
          <button
            className="place-order-button"
            onClick={redirectToOrderSuccess}
          >
            Place Your Order
          </button>
        </div>
      </div>
      <Link to="/">
        <svg
          className="goback-btn"
          width="111"
          height="40"
          viewBox="0 0 111 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.375 13.25L32.625 20L39.375 26.75"
            stroke="#1A1F16"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M57.28 25.5V14.3H60.816C61.8187 14.3 62.6053 14.5267 63.176 14.98C63.7467 15.428 64.032 16.1133 64.032 17.036C64.032 17.66 63.896 18.2093 63.624 18.684C63.352 19.1587 62.944 19.468 62.4 19.612L62.624 19.356C63.4027 19.484 64.0053 19.796 64.432 20.292C64.8587 20.7827 65.072 21.452 65.072 22.3C65.072 23.2813 64.7547 24.06 64.12 24.636C63.4907 25.212 62.6187 25.5 61.504 25.5H57.28ZM58.8 24.124H61.376C61.9947 24.124 62.488 23.9693 62.856 23.66C63.224 23.3507 63.408 22.8813 63.408 22.252C63.408 21.548 63.2187 21.052 62.84 20.764C62.4667 20.476 61.9787 20.332 61.376 20.332H58.8V24.124ZM58.8 18.956H60.624C61.168 18.956 61.6107 18.8467 61.952 18.628C62.2933 18.4093 62.464 17.9693 62.464 17.308C62.464 16.652 62.2933 16.2147 61.952 15.996C61.6107 15.772 61.168 15.66 60.624 15.66H58.8V18.956ZM68.0269 25.66C67.5415 25.66 67.1175 25.5613 66.7549 25.364C66.3922 25.1667 66.1095 24.8973 65.9069 24.556C65.7095 24.2147 65.6109 23.8253 65.6109 23.388C65.6109 22.9453 65.7069 22.5667 65.8989 22.252C66.0962 21.932 66.3575 21.668 66.6829 21.46C67.0135 21.2467 67.3815 21.0787 67.7869 20.956C68.1922 20.828 68.6109 20.7373 69.0429 20.684C69.4802 20.6253 69.8989 20.5933 70.2989 20.588C70.2989 19.8413 70.1522 19.3533 69.8589 19.124C69.5655 18.8947 69.1415 18.78 68.5869 18.78C68.2935 18.78 67.9789 18.8253 67.6429 18.916C67.3122 19.0067 66.9389 19.196 66.5229 19.484L66.3149 18.316C66.6295 18.076 67.0215 17.8813 67.4909 17.732C67.9602 17.5773 68.4535 17.5 68.9709 17.5C69.6322 17.5 70.1655 17.6173 70.5709 17.852C70.9762 18.0813 71.2722 18.4707 71.4589 19.02C71.6455 19.5693 71.7389 20.316 71.7389 21.26V22.86C71.7389 23.2333 71.7549 23.5427 71.7869 23.788C71.8242 24.028 71.9042 24.2093 72.0269 24.332C72.1549 24.4493 72.3575 24.508 72.6349 24.508H72.7789L72.5549 25.66H72.4429C71.9789 25.66 71.6189 25.6147 71.3629 25.524C71.1122 25.4333 70.9202 25.3027 70.7869 25.132C70.6535 24.9613 70.5335 24.7533 70.4269 24.508C70.1335 24.8493 69.7869 25.1267 69.3869 25.34C68.9869 25.5533 68.5335 25.66 68.0269 25.66ZM68.2989 24.508C68.6829 24.508 69.0535 24.412 69.4109 24.22C69.7735 24.028 70.0695 23.772 70.2989 23.452V21.58C69.5362 21.6067 68.9175 21.6813 68.4429 21.804C67.9735 21.9267 67.6295 22.1107 67.4109 22.356C67.1922 22.6013 67.0829 22.9187 67.0829 23.308C67.0829 23.7293 67.1949 24.036 67.4189 24.228C67.6482 24.4147 67.9415 24.508 68.2989 24.508ZM77.1704 25.66C76.285 25.66 75.541 25.4813 74.9384 25.124C74.341 24.7613 73.8877 24.276 73.5784 23.668C73.2744 23.0547 73.1224 22.3747 73.1224 21.628C73.1224 20.8493 73.269 20.148 73.5624 19.524C73.861 18.9 74.317 18.4067 74.9304 18.044C75.5437 17.6813 76.3277 17.5 77.2824 17.5C77.693 17.5 78.0797 17.5427 78.4424 17.628C78.8104 17.708 79.1384 17.82 79.4264 17.964L79.2024 19.228C78.909 19.0893 78.597 18.98 78.2664 18.9C77.941 18.82 77.6024 18.78 77.2504 18.78C76.3864 18.78 75.7277 19.0253 75.2744 19.516C74.821 20.0067 74.5944 20.6893 74.5944 21.564C74.5944 22.4173 74.8104 23.1027 75.2424 23.62C75.6744 24.1373 76.333 24.396 77.2184 24.396C77.581 24.396 77.9277 24.3533 78.2584 24.268C78.5944 24.1827 78.9144 24.0653 79.2184 23.916L79.4104 25.068C79.197 25.2173 78.885 25.3533 78.4744 25.476C78.0637 25.5987 77.629 25.66 77.1704 25.66ZM80.5 25.5V13.5H81.94V21.196L84.82 17.66H86.58L83.46 21.308L86.66 25.5H84.9L81.94 21.516V25.5H80.5Z"
            fill="#1A1F16"
          />
          <rect
            x="0.5"
            y="0.5"
            width="110"
            height="39"
            rx="10.5"
            stroke="#1A1F16"
          />
        </svg>
      </Link>
    </>
  );
};

export default OrderSummary;