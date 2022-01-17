import React from 'react';

const Col = ({children, className, ...colProps}) => {
    return (
        <>
            <div className={className} {...colProps}>
                {children}
            </div>
        </>
    );
}

export default Col;