import React from "react";
import {TodoContext} from './TodoContext';
import '../Styles/TodoSearch.css'

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);
  return(
    <input
      placeholder="Proximo To Do" 
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
            // console.log('escribiste en el TodoSearch')
            // console.log(event);
            // console.log(event.target);
            // console.log(event.target.value);
      }}
    />
  );
}
  
export { TodoSearch };
  