// Import necessary dependencies from React and other packages.
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import Bag from "./pages/Bag";
import { BagProvider } from "./components/BagContext";
import Checkout from "./pages/Checkout";
import ChangeUserInfo from "./components/ChangeUserInfo";
import ChangePaymentInfo from "./components/ChangePaymentInfo";
import OrderSuccess from "./pages/OrderSuccess";
import data from "./components/data";
import { AnimatePresence } from "framer-motion";

// Define the main function component named App.
function App() {
  // Define a state variable to hold the filtered product data.
  const [filteredProducts] = useState(data);

  // Render the component tree.
  return (
    // Wrap the entire application in the BagProvider context.
    <BagProvider>
      {/* Set up routing using the Router component */}
      <Router>
        {/* Apply animations for route transitions */}
        <AnimatePresence mode="wait">
          {/* Define the routing configuration */}
          <Routes>
            {/* Define a route for the home page */}
            {/* Pass the filteredProducts as a prop to HomePage */}
            <Route
              path="/"
              element={<HomePage filteredProducts={filteredProducts} />}
            />
            {/* Define a route for displaying product details */}
            <Route path="/product/:id" element={<ProductDetails />} />
            {/* Define a route for the shopping bag */}
            <Route path="/Bag" element={<Bag />} />
            {/* Define a route for the checkout page */}
            <Route path="/Checkout" element={<Checkout />} />
            {/* Define a route for changing user information */}
            <Route path="/ChangeUserInfo" element={<ChangeUserInfo />} />
            {/* Define a route for changing payment information */}
            <Route path="/ChangePaymentInfo" element={<ChangePaymentInfo />} />
            {/* Define a route for order success */}
            <Route path="/OrderSuccess" element={<OrderSuccess />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </BagProvider>
  );
}

// Export the App component as the default export of this module.
export default App;
