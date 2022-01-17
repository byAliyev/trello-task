import React from 'react';

const Button = ({children, className, ...buttonActions}) => {
    return (
        <>
            <button className={className} {...buttonActions}>
                {children}
            </button>
        </>
    );
}

export default Button;