import React, { useContext, useState } from "react";
import { ToDoContext } from "./ToDoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

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
            <p
              contentEditable={index === updatingIndex}
              onBlur={(e) => {
                setUpdatedTodo(e.target.textContent);
                handleUpdateConfirm(index);
              }}
            >
              {todo}
            </p>
            <FontAwesomeIcon
              className="delete"
              icon={faTrashCan}
              onClick={() => handleDelete(index)}
            />
            <FontAwesomeIcon
              className="update"
              onClick={() => handleUpdate(index)}
              icon={faPenToSquare}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
