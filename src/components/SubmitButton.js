import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SubmitButton({ label, to, className = '' }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };

    return (
        <>
            <div className={`${className}`}>
                <button onClick={handleClick}>{label}</button>
            </div>
        </>
    )
}
