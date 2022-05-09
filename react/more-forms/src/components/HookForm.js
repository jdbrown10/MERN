import React, {useState} from "react";

const HookForm = (props) => {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[passwordConf, setPasswordConf] = useState("");
    
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="FirstName">FirstName:</label>
                    <input type="text" onChange={(event)=>{setFirstName(event.target.value)}}/>
                </div>
                <br />
                <div>
                    <label htmlFor="LastName">Last Name:</label>
                    <input type="text" onChange={(event)=>{setLastName(event.target.value)}}/>
                </div>
                <br />
                <div>
                    <label htmlFor="Email">Email:</label>
                    <input type="text" onChange={(event)=>{setEmail(event.target.value)}}/>
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={(event)=>{setPassword(event.target.value)}}/>
                </div>
                <br />
                <div>
                    <label htmlFor="passwordConf">Confirm Password:</label>
                    <input type="password" onChange={(event)=>{setPasswordConf(event.target.value)}}/>
                </div>
                <br />
                <input type="submit" onChange={(event)=>{setFirstName(event.target.value)}}/>
            </form>
            <p>first name: {firstName}</p>
            <p>last name: {lastName}</p>
            <p>email: {email}</p>
            <p>password: {password}</p>
            <p>confirm password: {passwordConf}</p>
        </div>
    )
}

export default HookForm;