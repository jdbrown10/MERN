import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PokeCard from './components/PokeCard';
import {useState} from 'react';

function App() {
  const [pokeList, setPokeList] = useState([
    // "bidoof", "klefki", "magikarp", "abra"
  ])

  const [input, setInput] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setPokeList([...pokeList, input]);
    setInput("")
  }

  return (
    <div className="App">
      <h1>Make A Pokemon Team</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder='add to your team' onChange={event=>setInput(event.target.value)} />
        <input type="submit" className='btn btn-info btn-lg'/>
      </form>
      {
        pokeList.map((item, i) => {
          return <PokeCard name={item}/>
        })
      }
    </div>
  );
}

export default App;
