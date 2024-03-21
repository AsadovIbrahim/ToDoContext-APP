import React,{createContext,useState} from "react";

export const ToDoContext=createContext();

export const ToDoProvider=({children})=>{
    const [todos,setTodos]=useState([]);
    const addTodo=(todo)=>{
        setTodos([...todos,todo]);
    };

    const deleteTodo=(index)=>{
        const newTodos=[...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    }

    const updateTodo=(index,updatedTodo)=>{
        const newTodos=[...todos];
        newTodos[index]=updatedTodo;
        setTodos(newTodos);
    }

    return(
        <ToDoContext.Provider value={{todos,addTodo,deleteTodo,updateTodo}}>
            {children}
        </ToDoContext.Provider>
    )
}