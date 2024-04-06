import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ToastContextProvider } from "./context/ToastContext";

ReactDOM.render(
  <React.StrictMode>
    <ToastContextProvider>
      <App />
    </ToastContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
