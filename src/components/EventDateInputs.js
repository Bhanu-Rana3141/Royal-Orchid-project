import React, { useState, useRef } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

function EventDateInputs() {
    const [startType, setStartType] = useState('text');
    const [endType, setEndType] = useState('text');

    const startInputRef = useRef(null);
    const endInputRef = useRef(null);

    const handleStartClick = () => {
        if (startType === 'text') {
            setStartType('date');
            setTimeout(() => {
                startInputRef.current?.showPicker?.();
            }, 0);
        }
    };

    const handleEndClick = () => {
        if (endType === 'text') {
            setEndType('date');
            setTimeout(() => {
                endInputRef.current?.showPicker?.();
            }, 0);
        }
    };

    return (
        <div className="event-dates">
            <div className="input-container">
                <input
                    ref={startInputRef}
                    type={startType}
                    placeholder="Start Date"
                    onClick={handleStartClick}
                />
                {startType === 'text' && <FaCalendarAlt className="calendar-icon" />}
            </div>
            <div className="input-container">
                <input
                    ref={endInputRef}
                    type={endType}
                    placeholder="End Date"
                    onClick={handleEndClick}
                />
                {endType === 'text' && <FaCalendarAlt className="calendar-icon" />}
            </div>
        </div>
    );
}

export default EventDateInputs;
