import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState();

  const getInfo = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1127")
      .then(data => data.json())
      .then(res=>{
        console.log(pokemon);
        setPokemon(res);
      })
      .catch(err=>console.log(err));
  }

  return (
    <div className="App">
      <br />
      <button onClick={getInfo} className="btn btn-primary btn-lg">Get pokemon!</button>
      <br />
      <ul>
        {
          pokemon.results.map((item, i)=>{
            return <li key={i}>{item.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
