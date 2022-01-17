import React from 'react';

const Badge = (props) => {
    return (
        <>
            <span className="badge">
                {props.children}
            </span>
        </>
    );
}

export default Badge;