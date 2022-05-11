import React, { useState} from "react";
import './App.css';
import Todo from "./components/todo";

function App() {

  const [newTodo, setNewTodo] = useState("");
  const[todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length == 0) {
      return;
    }

    const todoitem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoitem]);
    setNewTodo("");
  }

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((_todo, i) => {
      return i != delIdx;
    });

    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx == i) {
        todo.complete =!todo.complete;
        // const updatedTodo = {...todo, complete: !todo.complete};
        // return updatedTodo;
      }

      return todo;
    })

    setTodos(updatedTodos);
  }

  return (
    
    <div style={{textAlign: "center"}}>
      <br />
      <h1>To Do List</h1>
      <br /> 
      <form onSubmit={(event) => {handleNewTodoSubmit(event);}}>
        <div>
          <input onChange={(event) => {setNewTodo(event.target.value)}} type="text" value={newTodo}/>
        </div>
        <div> 
          <input type="submit" value="submit"/>
        </div>
      </form>
      {todos.map((todo, i) => {

        return (
          <Todo key={i} todo={todo} handleToggleComplete={handleToggleComplete} handleTodoDelete={handleTodoDelete} i={i}/>
        );
      })}
    </div>
  );
}

export default App;
