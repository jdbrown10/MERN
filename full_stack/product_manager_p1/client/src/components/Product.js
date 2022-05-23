import React from "react";

const Product = (props) => {
    const {title, price, description} = props.product;
    return(
        <div className="productBox">
            <h2 className="mb-2">{title}</h2>
            <h3>Price: {price}</h3>
            <h3>Description: {description} </h3>
        </div>
    )
}

export default Product;