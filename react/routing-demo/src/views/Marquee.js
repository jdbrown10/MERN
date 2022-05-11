//a view is just a component that gets sent to a route

import React from "react";
import { useParams } from "react-router-dom";

const Marquee = (props) => {
    const {times} = useParams();
    
    return (
        <div>
            {
                [...Array(parseInt(times))].map((item, i) =>{
                    return <marquee key={i}><h1>wacky waving inflatable arm flailing marquee text</h1></marquee>
                })
            }
            
        </div>
    )
}

export default Marquee;