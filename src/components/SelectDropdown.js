import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function SelectDropdown({ options = [], className = '' }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Select Option');
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`dropdown-wrapper ${className}`} ref={dropdownRef}>
            <div className="custom-select-box" onClick={toggleDropdown}>
                {selected}
                <FaChevronDown className="selectIcon" />
            </div>

            {isOpen && (
                <ul className="custom-options">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="custom-option"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
