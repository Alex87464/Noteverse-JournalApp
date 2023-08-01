import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { StockApp } from "./StockApp";
import "./styles.css";
import { Provider } from "react-redux";
import {store} from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StockApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
