//a view is just a component that gets sent to a route

import React from "react";
import { useParams } from "react-router-dom";

const Second = (props) => {
    const {repeatMe} = useParams();
    return (
        <div>
            <h1>Second page here</h1>
            <h2>Repeat: {repeatMe}</h2>
        </div>
    )
}

export default Second;