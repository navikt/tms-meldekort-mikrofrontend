import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import LanguageProvider from "./providers/LanguageProvider";
import "./App.css";

const Mikrofrontend = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <LanguageProvider defaultSprak="nb">
        <App />
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default Mikrofrontend;
