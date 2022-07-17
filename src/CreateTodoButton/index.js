import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton() {

  const onClickButton = (msg) => {
    alert(msg);
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={() => onClickButton('hello alert')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };