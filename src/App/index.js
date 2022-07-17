import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: 'Hacer ejercicio', completed: true },
  { text: 'Tomar el curso intro a react', completed: true },
  { text: 'Learning english', completed: false },
]

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorageTodos.setItem('TODOS_V1', JSON.stringify((defaultTodos)))  
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }


  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

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
    const todosIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos[todosIndex].completed = true;
    saveTodos(newTodos);
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }


  return (
    <AppUI 
      total={totalTodos}
      completed={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
