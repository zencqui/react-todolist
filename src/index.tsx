import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.scss";
import { App } from "./App";
//import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";

const rootNode = document.getElementById("root");

//const root = ReactDOM.createRoot(document.getElementById("root"));
if (rootNode) {
  createRoot(rootNode).render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
