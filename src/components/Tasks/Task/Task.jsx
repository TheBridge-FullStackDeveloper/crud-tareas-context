import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { Link } from "react-router-dom";

const Task = () => {
  const { tasks, getTasks, deleteTask } = useContext(GlobalContext);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task._id}>
            <p>{task.title}</p>
            <button>
              <Link to={"/task/" + task._id}>Editar</Link>
            </button>
            <button onClick={() => deleteTask(task._id)}>Eliminar</button>
          </div>
        );
      })}
    </div>
  );
};

export default Task;
