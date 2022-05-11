import React from "react";

const Todo = (props) => {
    const todoClasses = ["italics"];

    if (props.todo.complete) {
      todoClasses.push("line-through");
    }

    return(
        
    <div>
        <input onChange={(event) => {props.handleToggleComplete(props.i);}} checked={props.todo.complete} type="checkbox" />
        <span className={todoClasses.join(" ")}>{props.todo.text}</span>
        <button onClick={(event) => {props.handleTodoDelete(props.i)}} style={{marginLeft: "8px"}}>Delete</button>
    </div>
    );
}

export default Todo;