import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function InputField({ type, placeholder, iconClass, required = true }) {
    return (
        <div className="mb-3">
            <i className={`bi ${iconClass} icon-style`}></i>
            <input
                type={type}
                placeholder={placeholder}
                className="form-input"
                required={required}
            />
        </div>
    );
}