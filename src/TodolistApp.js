import React from "react";
import Actions from "./components/Actions";

function TodolistApp() {
  return (
    <div style={{ width: "70%", margin: "20px auto", textAlign: "center" }}>
      <h3>Todo List</h3>
      <Actions />
    </div>
  );
}

export default TodolistApp;
