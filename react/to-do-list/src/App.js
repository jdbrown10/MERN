import React, { useState} from "react";
import './App.css';

function App() {

  const [newTodo, setNewTodo] = useState("");
  const[todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  return (
    <div style={{textAlign: "center"}}>
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
          <div key={i}>
            <span>{todo}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
