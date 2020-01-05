import React from "react";
import Task from "./Task";

function List(props) {
  return (
    <div>
      {props.state&&props.state.map(item => {
        return <Task task={item.item} key={item.id}></Task>;
      })}
    </div>
  );
}
export default List;
