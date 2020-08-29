import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import React from "react";
import '../../App.css';

const LoginForm = ({children, onSubmit}) => (
    <section>
        <form onSubmit={onSubmit}>
            <h1 className="login-header display-4">Log in to continue</h1>
            {children}
        </form>
    </section>
);

export default LoginForm;