import React from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

const Author = (props) => {
    const history = useHistory();
    const onDeleteHandler = () =>{
        if (window.confirm(`Are you sure you want to delete ${props.author.name}`)) {
            axios.delete(`http://localhost:8000/api/authors/${props.author._id}/delete`)
                .then(res=>{
                    history.push("/")
                })
                .catch(err=>console.log(err));
        }
    }

    return(
        <div>
            {props.author.name} | <Link to={`/authors/${props.author._id}`}>Edit</Link> | <button className="btn" onClick={onDeleteHandler}>Delete</button>
        </div>
    )
}

export default Author;