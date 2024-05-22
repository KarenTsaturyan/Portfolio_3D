import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="bg-slate-300/20">
      {/* Hash router is for build */}
      {/* Router */}
      <HashRouter>
        <App />
      </HashRouter>
    </main>
  </React.StrictMode>
);
