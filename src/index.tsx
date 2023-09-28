import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/css/Style.css";
import "./assets/img/LOGO1.png";
import Layout from "./containers/Layout";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider
import store from "./redux/store"; // Import store

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      {" "}
      {/* Wrap your app with Provider */}
      <Layout />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
