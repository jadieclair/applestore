// // redux/reducers/index.js

// import { combineReducers } from "redux";
// import cartReducer from "./cartReducer";

// const rootReducer = combineReducers({
//   cart: cartReducer,
//   // Add more reducers here if needed
// });

// export default rootReducer;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
