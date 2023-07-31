const tasks = (state, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload._id), //id tarea eliminada
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks /*resto de tareas*/],
      };
    case "GET_TASK_BY_ID":
      return {
        ...state,
        task: action.payload, //la respuesta de la petición (res.data)
      };
    default:
      return state;
  }
};
export default tasks;
