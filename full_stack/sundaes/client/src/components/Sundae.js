import React from "react";

const Sundae = (props) => {
    const {flavor, toppings, whippedCreamCherry, name, numScoops} = props.sundae;
    return(
        <div className="sundaeBox">
            <h2 className="mb-2">{props.sundae.name}</h2>
            <h3>made with {numScoops} scoops of {props.sundae.flavor},
            {toppings.length > 0 ? toppings.join(", ") : ""}
            {whippedCreamCherry ? " and whipped cream and a cherry!" : " and that's it!"}</h3>
        </div>
    )
}

export default Sundae;