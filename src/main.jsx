import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { provider as reduxProvider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <reduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </reduxProvider>
  </React.StrictMode>
);
