import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleProduct = (props) => {
    const {_id} = useParams();
    const [product, setProduct] = useState({});
    const history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+_id)
            .then(res=>{
                console.log(res.data);
                setProduct(res.data)
            })
            .catch(err=>console.log(err))
    }, [])

    const onDeleteHandler = () => {
        if (window.confirm(`Are you sure you want to delete ${product.title}?`)){
            axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
            .then(res=>{
                history.push("/")
            .catch(err=>console.log(err));
            })
        }
    }

    return(
        <div>
            Product: {product.title}
            <br />
            Price: {product.price}
            <br />
            Description: {product.description}
            <br />
            <div>
            <Link to={`/products/${_id}/edit`} className="btn btn-lg m-3 btn-info">Edit</Link>
            <button onClick={onDeleteHandler} className="btn btn-lg btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default SingleProduct;