import React, { useState, useContext } from 'react';
import { ToDoContext } from './ToDoContext';

const ToDoActions = () => {
  const [todo, setTodo] = useState('');
  const { addTodo } = useContext(ToDoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };

  return (
    <div>
      <h2>Add ToDo</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='Enter' type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button class="button">
          Add
        </button>      
      </form>
    </div>
  );
};

export default ToDoActions;
