import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const SingleAuthor = (props) => {
    const {_id} = useParams();

    return(
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name"/>
                </div>
                <div>
                    <input type="submit" value="submit"/>
                </div>
            </form>
        </div>
    )
}

export default SingleAuthor;