import React, { useContext, useState } from "react";
import { ToDoContext } from "./ToDoContext";

const ToDoList = () => {
  const { todos, deleteTodo, updateTodo } = useContext(ToDoContext);
  const [updatingIndex, setUpdatingIndex] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState("");

  const handleDelete = (index) => {
    deleteTodo(index);
  };

  const handleUpdate = (index) => {
    setUpdatingIndex(index);
    setUpdatedTodo(todos[index]);
  };

  const handleUpdateConfirm = (index) => {
    updateTodo(index, updatedTodo);
    setUpdatingIndex(null);
    setUpdatedTodo("");
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleUpdate(index)}>Update</button>
            {index === updatingIndex && (
              <div>
                <input
                  type="text"
                  value={updatedTodo}
                  onChange={(e) => setUpdatedTodo(e.target.value)}
                />
                <button onClick={() => handleUpdateConfirm(index)}>Confirm</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
