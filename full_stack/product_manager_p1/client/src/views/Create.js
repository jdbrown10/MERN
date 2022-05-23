import React, {useState} from "react";
// import axios from "axios";
// import {useHistory} from "react-router-dom";

const Create = (props) => {
    // const [form, setForm] = useState({
    //     name: "",
    //     flavor: "",
    //     numScoops: 0,
    //     whippedCreamCherry: false
    // })
    // const history = useHistory();

    // const onChangeHandler = (event) => {
    //     setForm({
    //         ...form,
    //         [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
    //     })
    // }

    // const onSubmitHandler = (event) => {
    //     event.preventDefault();

    //     axios.post("http://localhost:8000/api/products/create", form)
    //         .then(res =>{
    //             console.log(res);
    //             history.push("/");
    //         })
    //         .catch(err=>console.log(err))
    // }

    return(
        <div>
            <form onSubmit={onSubmitHandler}  className="w-50 d-block mx-auto my-3 p-5">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input onChange={onChangeHandler} type="text" name="title" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="number">Price:</label>
                    <input onChange={onChangeHandler} type="number" name="number" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input onChange={onChangeHandler} type="text" name="description" className="form-control"/>
                </div>
                <input type="submit" className="btn btn-lg btn-success" value="submit"/>
            </form>
        </div>
    )
}

export default Create;