import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from "react";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  const getInfo = (event) => {
    axios.get("http://pokeapi.co/api/v2/pokemon/?limit=908")
    .then(res =>  {
        console.log(res.data);
        setPokemon(res.data);
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className="App">

      <form onSubmit={getInfo}>
      <button type="submit" className='btn btn-info btn-lg d-block mx-auto my-2'>Fetch pokemon!</button>
      </form>

      <ul>
        {
          pokemon.map((item, i)=>{
            return <li key={i}>{item}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
