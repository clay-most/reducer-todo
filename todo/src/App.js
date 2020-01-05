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

  const handleChange=(event)=>{
    event.preventDefault();
    setTaskName(event.target.value)
    console.log(state)
  }

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} handleChange={handleChange}></Form>
      <List state={state.tasks}></List>
    </div>
  );
}

export default App;
