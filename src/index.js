import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoggedStatus from "./LoggedStatus";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="sachin" last="nishalka" />
    <App name="janith" />
    <App name="bibile" />
    <App name="jmir" />

    <LoggedStatus isLoggedIn="true"></LoggedStatus>
  </React.StrictMode>
);
