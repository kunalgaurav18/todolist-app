import React from "react";

function Completed(props) {
  if (props.showCompleted && props.taskList.length > 0) {
    return (
      <>
        <h4>Completed Tasks</h4>
        {props.taskList.map(t => (
          <div key={t.id}>
            &#9635; {t.task} &nbsp;&nbsp;&nbsp;&nbsp; {t.completedOn}
          </div>
        ))}
      </>
    );
  } else {
    return null;
  }
}

export default Completed;
