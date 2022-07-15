import React from "react";
import './TodoCounter.css';

const styles = {
  color: "red",
  backgroundColor: "blue",
};

function TodoCounter() {
  return (
    <h2  className="TodoCounter" >Has completado 2 de 4 TODOs</h2>
  );
}

export { TodoCounter };