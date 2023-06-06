import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from ".././redux/todoSlice"; 
import Toodo from "./TodoApp";

const MyTodoList = () => {

    const [value, setValue] = useState()

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    
   

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasTodo = todos.find((id) => id.todo === value);

        if (!hasTodo && value !== "") {
        dispatch(
            addTodo({
                title: value,
            })
        );  
        setValue("");
        } 
    };

    

  
  return (
    <div className="todoContainer">
        <h1>Mis tareas</h1>
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={(e)=> setValue(e.target.value)} 
            className="todoInput" 
            placeholder="Ingresa una tarea" 
            value={value}/>
            <input 
            onClick={handleSubmit} 
            type="submit" 
            placeholder="Ingresa una tarea"
            value="crear tarea" 
            className="buttonCreate"/>
           
            
        </form>
        <div className="todosContainer">
        {todos.map((item) => (
                <Toodo key={item.id} item = {item}/>
            ))}    
        
    </div>
 </div>
  );
}
 
export default MyTodoList

