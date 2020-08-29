import React from "react";

const Form = ({ header, children, onSubmit, headerClass, className }) => (
    <form className={className} onSubmit={onSubmit} onClick = {e => e.stopPropagation()}>
        {header && <h1 className={'form-header ' + headerClass}>{header}</h1>}
        {children}
    </form>
);

export default Form;