import React from "react";

const Step = (props) => {

    return(
        <div className="stepBox">
            <span className="arrow"> 
            {
                props.direction === "left" ? "⬅️" 
                : props.direction === "right" ? "➡️"
                : "⬆️"
            }
            </span>
            <h1 className="instructions">instructions: {props.instructions}</h1>
            <h2 className="distance">distance: {props.distance} miles</h2>

            <button onClick={props.onDeleteHandler}>X</button>

        </div>
    )
}

export default Step;