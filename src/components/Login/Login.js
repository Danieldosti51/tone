import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";

import { submitLogin } from "../../services/auth-service";
import Form from "../Form";
import Input from "./Input";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Form onSubmit={(e) => submitLogin(e, username, password)} header='Log in to continue' headerClass='display-4'>
            <Input label='Username' observer={(e) => setUsername(e.target.value)} id='username'/>
            <Input label='Password' type='password' observer={(e) => setPassword(e.target.value)} id='password' />
            <div className="button-container">
                <button type='submit' className="form-button">Log in</button>
                <Link to="/register">
                    <button className="form-button" type='button'>Sign up</button>
                </Link>
            </div>
        </Form>
    );
}

export default Login;
