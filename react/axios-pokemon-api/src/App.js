import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from "react";
import axios from "axios";
import PokeList from './components/PokeList';

function App() {
  const [pokemon, setPokemon] = useState([]);

  return (
    <div className="App">

      {/* <form onSubmit={getInfo}>
      <button type="submit" className='btn btn-info btn-lg d-block mx-auto my-2'>Fetch pokemon!</button>
      </form> */}
      <ul>
        <PokeList/>
      </ul>
    </div>
  );
}

export default App;
