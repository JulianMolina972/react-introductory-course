import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import {TodosError} from "../TodosError";
import { TodoForm } from "../TodoForm";
import {TodosLoading} from "../TodosLoading";
import {EmptyTodos} from "../EmptyTodos";
import { CreateTodoButton } from "../CreateTodoButton";
import {Modal} from "../Modal";
import { ChangeAlert } from "../ChangeAlert";


function App() {
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    synchronizeTodos,
    
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList 

        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue }
        onError= {() => <TodosError />} 
        onLoading= {() => <TodosLoading />}
        onEmptyTodos= {() => <EmptyTodos />} 
        onEmptySearchResults= {(searchText) => <p>There isn't results to {searchText}</p>} 
        render={todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}   
      /> 
      {/* {
      todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ) } */}
      
        
      

      {!!openModal && (
        <Modal>
          <TodoForm 
          addTodo={addTodo}
          setOpenModal={setOpenModal}
          />
      </Modal>
      )}
  
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      /> 

      
      <ChangeAlert
        synchronize={synchronizeTodos} 
      />
        
    
    </React.Fragment>
  );
}

export default App;