import React from "react";

const TextArea = ({className,cols, rows, ...inputProps}) => {
    return (
        <>
            <textarea className={className} cols={cols} rows={rows} {...inputProps} />
        </>
    );
};

export default TextArea;