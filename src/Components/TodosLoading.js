import React from "react";
import '../Styles/TodoLoading.css';

function TodosLoading() {
    return(
        // <p>Cargando..</p>
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text"></p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    );
}

export { TodosLoading };