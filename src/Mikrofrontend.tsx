import React from "react";
import App from "./App";
import LanguageProvider from "./providers/LanguageProvider";
import "./App.css";

const Mikrofrontend = () => {
  return (
    <LanguageProvider defaultSprak="nb">
      <App />
    </LanguageProvider>
  );
};

export default Mikrofrontend;
