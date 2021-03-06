import React, {useState} from "react";

const Create = (props) => {

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