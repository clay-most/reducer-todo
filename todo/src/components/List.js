import React from "react";
import Task from "./Task";

function List(props) {
  return (
    <div>
      {props.state&&props.state.map(task => {
        return <Task toggler={props.toggler} task={task} key={task.id}></Task>;
      })}
    </div>
  );
}
export default List;
