import React from "react";
function Form(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input name="taskName" placeholder="newTask" onChange={props.handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form;