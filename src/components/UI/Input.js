import React from "react";

const Input = ({className, ...inputProps}) => {
    return (
        <>
            <input className={className} {...inputProps} />
        </>
    );
};

export default Input;