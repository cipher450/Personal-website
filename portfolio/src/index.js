import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./timeline.css";
import App from "./App";

function toggleDarkmod() {
  let body = document.getElementsByClassName("body");
  body.classList.add("dark");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App toggleDarkmod={toggleDarkmod} />
  </React.StrictMode>
);
