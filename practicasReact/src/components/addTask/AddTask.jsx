import { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      alert("Campo vacio mostro!");
      return;
    }
    addTask(input);
  };
  return (
    <form onSubmit={handleForm}>
      <input
        type="text"
        placeholder="ingresar tarea..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTask;
