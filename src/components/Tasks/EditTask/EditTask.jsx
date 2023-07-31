import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalState";

const EditTask = () => {
  const { _id } = useParams();
  const { getTaskById, task, editTask } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();//inicializo navigate

  useEffect(() => {
    getTaskById(_id);
  }, []);

  //rellena el input con el titulo de la tarea a editar
  useEffect(() => {
    setTitle(task.title);
  }, [task.title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(_id, { title });
    navigate("/")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title || ""}
        name="title"
      />
      <button type="submit">Edit task</button>
    </form>
  );
};

export default EditTask;
