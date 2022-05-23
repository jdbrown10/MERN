import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const SingleProduct = (props) => {
    const {_id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+_id)
            .then(res=>{
                console.log(res.data);
                setProduct(res.data)
            })
            .catch(err=>console.log(err))
    }, [])

    return(
        <div>
            Product: {product.title}
            <br />
            Price: {product.price}
            <br />
            Description: {product.description}
        </div>
    )
}

export default SingleProduct;