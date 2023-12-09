import React, { useState } from "react";
import "../components/styles/SearchBar.css";

const SearchBar = ({ products, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value); // Automatically update results as the user types
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch(searchQuery);
    }
  };

  return (
    <div className="top-bar">
      <div className="input col-md-8 offset-md-2">
        <div className="label-box"></div>
        <h6 className="label">Search Item</h6>
        <div className="input-field input-group mb-3">
          <div className="input-area">
            <input
              type="text"
              className="placeholder"
              placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
              aria-label="Search for products"
              aria-describedby="button-addon2"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress} // Detect Enter key press
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
