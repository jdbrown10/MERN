import React, {useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Edit = (props) => {
    const {_id} = useParams();

    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const [errors,setErrors] = useState({});
    
    const history = useHistory();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+_id)
        .then(res=>{
            setForm(res.data);
        })
        .catch(err=>console.log(err))
    })

    //fix to edit, not create
    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/products/${_id}/update`, form)
            .then(res =>{
                console.log(res);
                history.push("/");
            })
            .catch(err=>{
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })

    }

    return(
        <div>
            <form onSubmit={onSubmitHandler} className="w-50 d-block mx-auto my-3 p-5">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input value={form.title} onChange={onChangeHandler} type="text" name="title" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="number">Price:</label>
                    <input value={form.price} onChange={onChangeHandler} type="number" name="number" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input value={form.description} onChange={onChangeHandler} type="text" name="description" className="form-control"/>
                </div>
                <input type="submit" className="btn btn-lg btn-success" value="submit"/>
            </form>
        </div>
    )
}

export default Edit;