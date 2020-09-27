import React from "react";
import Actions from "./components/Actions";

function TodolistApp() {
  return (
    <div style={{ width: "70%", margin: "20px auto", textAlign: "center" }}>
      <h3>Todo List</h3>
      <p><b>Note:</b> Data will be lost on page refresh.</p>
      <Actions />
    </div>
  );
}

export default TodolistApp;
