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
  const addTask = event => {
    event.preventDefault();
    dispatch(addAction);
  };

  return (
    <div className="App">
      <Form></Form>
      <List state={state}></List>
    </div>
  );
}

export default App;
