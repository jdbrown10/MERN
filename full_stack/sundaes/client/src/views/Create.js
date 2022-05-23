import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const Create = (props) => {
    const [form, setForm] = useState({
        name: "",
        flavor: "",
        numScoops: 0,
        whippedCreamCherry: false
    })
    const history = useHistory();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/sundaes/create", form)
            .then(res =>{
                console.log(res);
                history.push("/");
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}  className="w-50 d-block mx-auto my-3 p-5">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input onChange={onChangeHandler} type="text" name="name" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="flavor">Flavor:</label>
                    <input onChange={onChangeHandler} type="text" name="flavor" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="numScoops">Number of scoops:</label>
                    <input onChange={onChangeHandler} type="number" name="numScoops" className="form-control"/>
                </div>
                <div className="form-group m-3">
                    <input onChange={onChangeHandler} type="checkbox" name="whippedCreamCherry" className="form-check-input mr-3"/>
                    <label className="form-check-label" htmlFor="whippedCreamCherry">Whipped Cream and Cherry</label>
                </div>
                <input type="submit" className="btn btn-lg btn-success" value="submit"/>
            </form>
        </div>
    )
}

export default Create;