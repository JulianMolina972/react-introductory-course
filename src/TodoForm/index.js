import React from "react";
import './TodoForm.css';


function TodoForm({addTodo, setOpenModal}) {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>You write a new TODO</label>
      <textarea
        required
        value={newTodoValue}
        onChange={onChange}
        placeholder="Exercise for 10 minutes"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="submit"
          className="TodoForm-button TodoForm-button-add"
        >
          Create
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export { TodoForm };