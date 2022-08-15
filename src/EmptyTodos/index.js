import React from "react";
import { FcTodoList } from "react-icons/fc";
import './EmptyTodos.css';


function EmptyTodos() {
  return (
    <div className="emptyTodos">
      <p>Create your first TODO!</p>
      <FcTodoList className="emptyTodos-icon"/>
    </div>
  )
}

export { EmptyTodos };