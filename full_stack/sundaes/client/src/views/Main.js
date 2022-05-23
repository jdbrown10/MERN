import React, {useState, useEffect} from "react";
import axios from "axios";
import Sundae from "../components/Sundae";

const Main = (props) => {
    const [sundaes, setSundaes] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/sundaes/all")
            .then(res=>{
                // console.log(res.data)
                setSundaes(res.data);
            })
            .catch(err=>console.log(err));
    },[])

    return(
        <div className="sundaeList">
            {
                sundaes.map((sundae,i)=>{
                    return <Sundae key={sundae._id} sundae={sundae}/>
                })
            }
        </div>
    )
}

export default Main;