import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.scss";
import AppCore from "./views/App/AppCore";
// import reportWebVitals from './reportWebVitals';

const rootDom = document.getElementById("root");

if (rootDom) {
  const root = ReactDOM.createRoot(rootDom);
  root.render(
    <React.StrictMode>
      <AppCore />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your App, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
