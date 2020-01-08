const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = {
        item: action.payload,
        completed: false,
        id: Math.random()
      };
      return { ...state, tasks: [...state.tasks, newTask] };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return { ...task, completed: !task.completed };
          } else {
            return task;
          }
        })
      };
    case "CLEAR":
      return {
        ...state,
        tasks: state.tasks.filter(task => {
          return !task.completed;
        })
      };
    default:
      return state;
  }
};

export { reducer };

const initialState = {
  tasks: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};
export { initialState };
