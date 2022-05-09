import React, {useState} from "react";

const HookForm = (props) => {

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[passwordConf, setPasswordConf] = useState("");
    
    const[firstNameError, setFirstNameError] = useState("");
    const[lastNameError, setLastNameError] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    const[passwordConfError, setPasswordConfError] = useState("");

    const firstNameHandler = (event) => {
        setFirstName(event.target.value)

        if (event.target.value.length < 2 && event.target.value.length != 0) {
            setFirstNameError("First name must be at least 2 characters!")
        } else {
            setFirstNameError("")
        }
    }
    const lastNameHandler = (event) => {
        setLastName(event.target.value)

        if (event.target.value.length < 2 && event.target.value.length != 0) {
            setLastNameError("Last name must be at least 2 characters!")
        } else {
            setLastNameError("")
        }
    }
    const emailHandler = (event) => {
        setEmail(event.target.value)

        if (event.target.value.length < 5 && event.target.value.length != 0) {
            setEmailError("Email must be at least 5 characters!")
        } else {
            setEmailError("")
        }
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value)

        if (event.target.value.length < 8 && event.target.value.length > 0) {
            setPasswordError("Password must be at least 8 characters!")
        } else {
            setPasswordError("")
        }
    }
    const passwordConfHandler = (event) => {
        setPasswordConf(event.target.value)

        if (password && event.target.value != password) {
            setPasswordConfError("Passwords must match.")
        } else {
            setPasswordConfError("")
        }
    }

    return(
        <div>
            <form>
                <div>
                    <label htmlFor="FirstName">FirstName:</label>
                    <input type="text" onChange={firstNameHandler}/>
                    <br />
                    <span>{firstNameError}</span>
                </div>
                <br />
                <div>
                    <label htmlFor="LastName">Last Name:</label>
                    <input type="text" onChange={lastNameHandler}/>
                    <br />
                    <span>{lastNameError}</span>
                </div>
                <br />
                <div>
                    <label htmlFor="Email">Email:</label>
                    <input type="text" onChange={emailHandler}/>
                    <br />
                    <span>{emailError}</span>
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={passwordHandler}/>
                    <br />
                    <span>{passwordError}</span>
                </div>
                <br />
                <div>
                    <label htmlFor="passwordConf">Confirm Password:</label>
                    <input type="password" onChange={passwordConfHandler}/>
                    <br />
                    <span>{passwordConfError}</span>
                </div>
                <br />
                <input type="submit"/>
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