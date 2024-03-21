import './App.css';
import React from 'react';
import ToDoList from './ToDoList';
import ToDoActions from './ToDoActions';
import { ToDoProvider } from './ToDoContext';

function App() {
  return (
    <div className="App">
      <h1>ToDo List App</h1>
      <ToDoProvider>
        <ToDoActions />
        <ToDoList />
      </ToDoProvider>
    </div>
  );
}

export default App;
