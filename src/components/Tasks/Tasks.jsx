import React from "react";
import Task from "./Task/Task";
import AddTask from "./AddTask/AddTask";

const Tasks = () => {
  return (
    <div>
      Tasks
      <AddTask/>
      <Task />
    </div>
  );
};

export default Tasks;
