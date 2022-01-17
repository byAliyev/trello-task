import React from "react";
import { Upload } from "../Icons/icons";


const FileInput = ({ children, className, value, onChange, disabled, accept }) => {
    return (
        <>
            <label htmlFor="custom-input-file" className="custom-input-file">
                <input
                    value={value}
                    accept={accept}
                    disabled={disabled}
                    style={{ display: 'none' }}
                    id="custom-input-file"
                    type="file"
                    onChange={disabled ? () => {} : onChange}
                />
                <Upload/> <span className="custom-input-file-span">{children}</span>
            </label>
        </>
    );
}

export default FileInput;
