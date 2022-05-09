import logo from './logo.svg';
import './App.css';
import Step from './components/Step';
import { useState } from "react";


function App() {
  const [steps, setSteps] = useState([
    // {direction:"left",instructions:"turn left at fullerton ave", distance:"1.2"},
    // {direction:"forward",instructions:"cross the river", distance:"2"},
    // {direction:"right",instructions:"turn left at fullerton ave", distance:"1.2"},
    // {direction:"left",instructions:"turn left at fullerton ave", distance:"1.2"},
])

  const [form,setForm] = useState({
    direction: "left",
    instructions: "",
    distance: 1.0
  })

  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]:event.target.value
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    setSteps([...steps,form])
  }

  
  const onDeleteHandler = (id ) => {
    const copySteps = [...steps];
    copySteps.splice(id, 1);
    setSteps(copySteps);
  }

  return (
    <div className="App">
      <h1>directions app</h1>
      <form onSubmit={onSubmitHandler}>
        <select name="direction" onChange={onChangeHandler}>
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="forward">Forward</option>
        </select>
        <input type="text" name="instructions" placeholder="where to?" onChange={onChangeHandler}/>
        <input type="number" step="0.01" name="distance" placeholder="miles?" onChange={onChangeHandler}/>
        <input type="submit"/>
      </form>
      {
        steps.map((item, i)=>{
          return <Step key={i} onDeleteHandler={()=>onDeleteHandler(i)} direction={item.direction} instructions={item.instructions} distance={item.distance}/>
        })
      }
    </div>
  );
}

export default App;
