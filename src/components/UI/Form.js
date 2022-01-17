import React from "react";

const Form = ({children, className, ...formProps}) => {
    return (
        <>
            <form className={className} {...formProps}>
                {children}
            </form>
        </>
    );
}

export default Form;