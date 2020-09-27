import React from "react";
import ReactDOM from "react-dom";

import TodolistApp from "./TodolistApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <TodolistApp />
  </React.StrictMode>,
  rootElement
);
