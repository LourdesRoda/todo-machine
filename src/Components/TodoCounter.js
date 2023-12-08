import React from "react";
import { TodoContext } from "./TodoContext";
import '../Styles/TodoCounter.css'

function TodoCounter() {
    const {
      completedTodos,
      totalTodos,
    } = React.useContext(TodoContext);
    return (
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> ToDos
      </h1>
      // total === completed ?
      // <h1 className='TodoCounter'>
      //   Completaste <span>todos</span> los ToDos
      // </h1>
      // :
      // <h1 className='TodoCounter'>
      // Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> ToDos
      // </h1>
    );
  }
  
  export {TodoCounter} //export nombrado