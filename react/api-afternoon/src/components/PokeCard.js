import React, {useEffect, useState} from 'react';
import axios from "axios";

const PokeCard = (props) => {
    const [pokeData, setPokeData] = useState();
    
    //takes 2 parameters: a function and an array
    //runs under 3 scenarios:
        //when component mounts <-- this is the most relevant one for now
        //run return when unmount
        //when dependency array changes
    //what renders on the page depends on this API call-> that's what the dependency array is for. when any value in the dependency array changes, the function will run again
    useEffect(()=>{ 
        console.log("use effect is running for the pokemon " + props.name);
        axios.get("https://pokeapi.co/api/v2/pokemon/" + props.name)
        .then(res =>  {
            console.log(res.data);
            setPokeData(res.data);
        })
        .catch(err=>console.log(err))
    }, []) //this is the dependency array. you can put as many values inside of it as you want.

    return(
        <div className="pokeCard">
            <img src={pokeData ? pokeData.sprites.front_default : ""} alt="{props.name}" />
            <h1>{props.name}</h1>
            <h2>Types: </h2>
            {
                pokeData &&
                pokeData.types.map((item,i) => {
                    return <li key={i}>{item.type.name}</li>
                })
            }
        </div>
    )
}

export default PokeCard;