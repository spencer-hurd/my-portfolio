import React from "react";
import ReactDOM from "react-dom/client";
import { FormspreeProvider } from "@formspree/react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormspreeProvider>
      <App />
    </FormspreeProvider>
  </React.StrictMode>
);
