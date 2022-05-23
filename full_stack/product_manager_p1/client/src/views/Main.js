import React, {useState, useEffect} from "react";
import axios from "axios";
import Product from "../components/Product";

const Main = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/all")
            .then(res=>{
                // console.log(res.data)
                setProducts(res.data);
            })
            .catch(err=>console.log(err));
    },[])

    return(
        <div className="productList">
            {
                products.map((product,i)=>{
                    return <Product key={product._id} product={product}/>
                })
            }
        </div>
    )
}

export default Main;