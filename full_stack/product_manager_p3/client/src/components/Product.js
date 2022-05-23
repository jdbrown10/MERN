import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
    const {title, price, description, _id} = props.product;
    return(
        <div className="productBox">
            <h2 className="mb-2"><Link to={`/products/${_id}`}>{title}</Link></h2>
            <h3>Price: {price}</h3>
            <h3>Description: {description} </h3>
        </div>
    )
}

export default Product;