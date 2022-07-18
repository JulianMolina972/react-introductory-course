import React from "react";
import './EmptyTodos.css';


function EmptyTodos() {
  return (
    <div className="emptyTodos">
      <p>Create your first TODO!</p>
      <img src="https://source.unsplash.com/random/200x200?sig=1" alt="ramdom" />
    </div>
  )
}

export { EmptyTodos };