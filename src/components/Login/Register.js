import React, { useState } from "react";
import { Link } from "react-router-dom";

import { submitRegister } from '../../services/registration-service'
import Input from "./Input";
import Form from "../Form";

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    return (
        <Form onSubmit={(e) => submitRegister(e, username, password, cPassword)}>
            <Input label='Username' observer={(e) => setUsername(e.target.value)} id='username' />
            <Input label='Password' type='password' observer={(e) => setPassword(e.target.value)} id='password' />
            <Input label='Confirm Password' type='password' observer={(e) => setCPassword(e.target.value)} id='confirmPassword'/>
            <div className="button-container">
                <button type='submit' className="form-button">Create</button>
                <Link to="/">
                    <button className="form-button">Back</button>
                </Link>
            </div>
        </Form>
    )
}

export default Register;