import React from "react";
import Task from "./Task";

function List(props) {
  return (
    <div>
        {/* {console.log(props.state[0].item)} */}
{props.state.map(item => {
return (<Task task={item.item} key={item.id}></Task>);
})}
    </div>
  );
}
export default List;
