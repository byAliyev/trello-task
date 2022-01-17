import React from "react";

const Select = ({className, options, ...inputProps}) => {
    return (
        <>
            <select {...inputProps} className={className}>
                {options.map( option => {
                    return <option value={option.id} key={option.id}>{option.member_name}</option>;
                })}
            </select>
        </>
    );
};

export default Select;