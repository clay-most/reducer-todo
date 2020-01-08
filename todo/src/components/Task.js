import React from "react";
function Task(props) {
  return (
    <div className={`task${props.task.completed ? "Completed" : ""}`} onClick={()=>{
        props.toggler(props.task.id)
    }}>
      {props.task.item}
    </div>
  );
}
export default Task;
