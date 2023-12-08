import React from "react";
import {useLocalStorage} from './UseLocalStorage';


const TodoContext = React.createContext();
function TodoProvider({children}) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("todosv1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed:false,
    })
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        completeTodo,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

/*
localStorage.removeItem('todosv2') 

const defaultTodos = [
  {text: 'cortar cebolla', completed: true},
  {text: 'hacer un curso', completed: false},
  {text: 'llorar con la llorona', completed: false},
  {text: 'algo escrito', completed: false},
  {text: 'algo escrito 2', completed: true},
  {text: 'algo escrito 3', completed: false},
  {text: 'algo escrito 4', completed: false},
  {text: 'algo escrito 5', completed: true},
];

localStorage.setItem('todosv2', JSON.stringify(defaultTodos));
*/