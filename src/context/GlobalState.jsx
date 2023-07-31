import { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer.js";

const initialState = {
  tasks: [],
  task: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTasks = async () => {
    const res = await axios.get("http://localhost:3000/tasks/get");

    dispatch({
      type: "GET_TASKS",
      payload: res.data.tasks,
    });
  };

  const deleteTask = async (_id) => {
    try {
      const res = await axios.delete(
        "http://localhost:3000/tasks/delete/" + _id
      );
      dispatch({
        type: "DELETE_TASK",
        payload: res.data.task, //tarea que hemos eliminado
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async (task) => {
    try {
      const res = await axios.post("http://localhost:3000/tasks", task);
      dispatch({
        //modifica el estado de Tasks para que aparezca la nueva tarea creada
        type: "ADD_TASK",
        payload: res.data.task, //tarea que hemos creado
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getTaskById = async (_id) => {
    try {
      const res = await axios.get(
        "http://localhost:3000/tasks/getTaskById/" + _id
      );
      
      dispatch({
        type: "GET_TASK_BY_ID",
        payload:res.data.taskById
      });
    } catch (error) {
      console.error(error);
    }
  };

  const editTask = async (_id, task) => {
    try {
      await axios.put("http://localhost:3000/tasks/titleUpdate/" + _id, task);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        task:state.task,
        getTasks,
        deleteTask,
        addTask,
        getTaskById,
        editTask
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
