import React from "react";
import '../../App.css';

const Input = ({ label, type = 'text', id, observer }) => (
    <div className="form-input">
        <p>{label}</p>
        <input type={type} onChange={observer} id={id} />
        <div className="line" />
    </div>
)

export default Input;