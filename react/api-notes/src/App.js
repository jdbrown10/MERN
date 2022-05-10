import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from "react";

function App() {
  const [breweries, setBreweries] = useState([]);

  const [city, setCity] = useState("");
  
  const getInfo = (event ) => {
    event.preventDefault();

    fetch("https://api.openbrewerydb.org/breweries?by_city=" + city)
    .then(data => data.json())
    .then(res=>{
      console.log(res); //this is where we can use the data, assign it to state, etc etc
      setBreweries(res);
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className="App">
      <h1>get brewery info!</h1>

      <form onSubmit={getInfo}>
      <input type="text" placeholder="city" onChange={(event)=>setCity(event.target.value)} className="form-control w-25 d-block mx-auto my-2" />
      <button type="submit" className='btn btn-info btn-lg d-block mx-auto my-2'>Get info</button>
      </form>

      <ul>
        {
          breweries.map((item, i)=>{
            return <li key={i}>{item.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
