import { useState } from "react";
import TaskItem from "../taskItem/TaskItem";
import AddTask from "../addTask/AddTask";

const TaskList = () => {
  const [tasksList, setTasksList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addTask = (name) => {
    const newTask = {
      id: tasksList.length + 1,
      name: name,
      completed: false,
    };
    setTasksList([...tasksList, newTask]);
    setShowForm(false);
  };

  const editTask = (id, name) => {
    const newTaskList = tasksList.map((task) => {
      if (task.id === id) {
        task.name = name;
      }
      return task;
    });
    setTasksList(newTaskList);
  };

  const markAsDone = (id, value) => {
    const newTaskList = tasksList.map((task) => {
      if (task.id === id) {
        task.completed = value;
      }
      return task;
    });
    setTasksList(newTaskList);
  };
  const deleteTask = (id) => {
    const newTaskList = tasksList.filter((task) => task.id !== id);
    setTasksList(newTaskList);
  };
  return (
    <div>
      <ul>
        {showForm ? (
          <AddTask addTask={addTask}></AddTask>
        ) : (
          <button onClick={() => setShowForm(true)}>Agregar tarea</button>
        )}

        {tasksList.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            markAsDone={markAsDone}
            deleteTask={deleteTask}
          ></TaskItem>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
