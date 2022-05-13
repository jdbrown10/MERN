import React, { useState } from 'react';
import axios from "axios";

const PokeList = (props) => {
    const [pokeData, setPokeData] = useState([]);
    const fetchInfo = () => {


        axios.get("http://pokeapi.co/api/v2/pokemon/?limit=908")
            .then(res => {
                console.log(res.data.results)
                setPokeData(res.data.results);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {/* component here: {props.name} */}
            <br />
            <button className="btn btn-primary btn-lg" onClick={fetchInfo}>Get Pokemon</button>
            <br />
            <br />
            <ul>
                {
                    pokeData &&
                    pokeData.map((item, i)=>{
                        return <li key={i}>{item.name}</li>
                    })
                }
            </ul>
        </div>
)
}

export default PokeList;