import { useState } from "react";
import PropTypes from "prop-types";

const TaskItem = ({ task, editTask, markAsDone, deleteTask }) => {
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");

  const saveChanges = () => {
    if (input.trim() === "") {
      alert("Campo vacio mostro!");
      return;
    }
    editTask(task.id, input);
    setShowInput(false);
  };

  const handleChangeComplete = (e) => {
    markAsDone(task.id, e.target.checked);
  };
  return (
    <li>
      {showInput ? (
        <div>
          <input
            type="text"
            placeholder="modificar tarea..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button onClick={saveChanges}>Guardar</button>
        </div>
      ) : (
        <div>
          {task.completed ? (
            <span style={{ textDecorationLine: "line-through" }}>
              {task.name}
            </span>
          ) : (
            <span>{task.name}</span>
          )}

          <button onClick={() => setShowInput(true)}>Editar</button>
          <button onClick={() => deleteTask(task.id)}>Borrar</button>
          <input
            type="checkbox"
            name="complete"
            onChange={handleChangeComplete}
          />
        </div>
      )}
    </li>
  );
};
TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  editTask: PropTypes.func.isRequired,
  markAsDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
export default TaskItem;
