import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Experience from "./experience/Experience";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

setTimeout(() => {
  const experience = new Experience(document.querySelector(".experience-canvas"));

})
