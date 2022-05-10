import logo from './logo.svg';
import './App.css';
import Box from './components/box';
import { useState } from "react";


function App() {
  const [boxes, setBoxes] = useState([
    {color:"blue"}
])

  const [form,setForm] = useState({
    color: "",

  })

  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]:event.target.value
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    setBoxes([...boxes,form])
  }

  
  const onDeleteHandler = (id ) => {
    const copyBoxes = [...boxes];
    copyBoxes.splice(id, 1);
    setBoxes(copyBoxes);
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
