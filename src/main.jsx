import React from "react";
import ReactDOM from "react-dom/client";
import { GamesApp } from "./GamesApp.jsx";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GamesApp />
    </BrowserRouter>
  </React.StrictMode>
);
