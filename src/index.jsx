import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ProviderTheme } from "./Context/Theme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderTheme>
        <App />
      </ProviderTheme>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
