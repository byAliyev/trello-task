import React from "react";
import {Calendar} from "../Icons/icons";

const DatePicker = ({className, ...inputProps}) => {
    return (
        <>
            <label htmlFor="date" className="input-label">
                <input className={className} {...inputProps} id="date"/>
                <Calendar className="w24 h24 input-icon"/>
            </label>
        </>
    );
};

export default DatePicker;