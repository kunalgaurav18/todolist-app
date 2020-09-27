import React from "react";

function TodoList(props) {
  function completeTask(id) {
    props.completeTask(id);
  }

  if (props.taskList.length > 0) {
    return (
      <>
        <h4>Todo List</h4>
        {props.taskList.map(t => (
          <div key={t.id}>
            <input type="checkbox" onClick={() => completeTask(t.id)} />
            {t.task} &nbsp;&nbsp;&nbsp;&nbsp; {t.completeBy}
          </div>
        ))}
      </>
    );
  } else {
    return null;
  }
}

export default TodoList;
