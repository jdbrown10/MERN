import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const Create = (props) => {
    const [form, setForm] = useState({
        name: ""
    });
    const history = useHistory();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/authors/create", form)
            .then(res=>{
                console.log(res);
                history.push("/");
            })
            .catch(err=>console.log(err));
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input onChange={onChangeHandler} type="text" name="name"/>
                </div>
                <div>
                    <input type="submit" value="submit"/>
                </div>
            </form>
        </div>
    )
}

export default Create;