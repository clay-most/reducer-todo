const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return { ...state, tasks: [state.tasks, newTask] };
  }
};
export { reducer };

const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];
export {initialState}