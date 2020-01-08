import React, { useReducer, useState } from "react";
import "./App.css";
import { initialState } from "./reducers/reducers";
import { reducer } from "./reducers/reducers";

import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [taskName, setTaskName] = useState("");

  const addAction = { type: "ADD_TASK", payload: taskName };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addAction);
  };

  const handleChange = event => {
    event.preventDefault();
    setTaskName(event.target.value);
    ;
  };

  const toggler = id => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };
  
  const clear = ()=>{
    dispatch({ type: "CLEAR" })
  }

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} handleChange={handleChange}></Form>
      <button onClick={()=>{clear()}} >Clear</button>
      <List toggler={toggler} state={state.tasks}></List>
    </div>
  );
}

export default App;
