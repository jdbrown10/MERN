import React, {useState, useEffect} from "react";
import axios from "axios";
import Author from "../components/Author";
import {useHistory} from "react-router-dom"

const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const history = useHistory();

    const onDeleteHandler = (_id) => {
        axios.delete(`http://localhost:8000/api/authors/${_id}/delete`)
                .then(res=>{
                    console.log(res);
                    history.push("/");
                })
                .catch(err=>console.log(err))
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/all")
            .then(res=>{
                // console.log(res.data);
                setAuthors(res.data);
            })
            .catch(err=>console.log(err));
    }, [])
    return(
        <div>
            <ul>
                {
                    authors.map((author,i)=>{
                        return <li><Author key={author._id} author={author}/></li> 
                    })
                }
            </ul>
        </div>
    )
}

export default Main;