import React from "react";
import { useLocalStorage } from "./useLocalStorage";



function useTodos() {
  
  const {
    item: todos,
    saveItem : saveTodos,
    synchronizeItem : synchronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [completeCheck, setCompleteCheck] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  (!searchValue.length >= 1) 
  ? searchedTodos = todos 
  : searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });


  const completeTodo = (text) => {

    console.log(text);
  
    const todosIndex = todos.findIndex(todo => todo.text === text);
    console.log(todosIndex);
    const newTodos = [...todos];
    newTodos[todosIndex].completed = !newTodos[todosIndex].completed;
    saveTodos(newTodos);

  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  }

  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  const states = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
    completeCheck,
  };
  const stateUpdate = {
    setSearchValue,
    completeTodo,
    addTodo,
    deleteTodo,
    setOpenModal,
    setCompleteCheck,
    synchronizeTodos,

  };

  return {states, stateUpdate};
      
}

export { useTodos };