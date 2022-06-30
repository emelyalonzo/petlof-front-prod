import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StaticContext } from "./context/StaticContext";
import './App.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StaticContext>
      <App />
    </StaticContext>
  </React.StrictMode>
);
