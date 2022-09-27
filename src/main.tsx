import React from "react";
import ReactDOM from "react-dom";
import Mikrofrontend from "./Mikrofrontend";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <main className="main">
      <div className="app">
        <Mikrofrontend />
      </div>
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);
