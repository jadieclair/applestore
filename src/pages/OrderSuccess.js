import React from "react";
import "../components/styles/SuccessPage.css";

const SuccessPage = () => {
  return (
    <div className="success-vid">
      <div className="video-container">
        <div className="giphy-image">
          <img
            src="https://media.giphy.com/media/5xtDarqPCe4BofVSz3W/giphy.gif"
            alt="GIF"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="text-box">
        <p className="text-suc">
          <h2 className="text-suc-head">
            Your Order has been placed Successfully!
          </h2>
          <br />
          Thank you for shopping with us and we hope to see you again soon!
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;