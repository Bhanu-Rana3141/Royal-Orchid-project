import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const steps = ['Visualizer', 'Select Menu', 'Decor', 'Entertainment'];

export default function Stepper() {
    const [currentStep, setCurrentStep] = useState(0);

    const handleStepClick = (index) => {
        if (index <= currentStep + 1) {
            setCurrentStep(index);
        }
    };

    return (
        <div className='stepper-container'>
            {steps.map((label, index) => (
                <React.Fragment key={index}>
                    <div
                        className={`stepper-child ${index > currentStep ? 'disabled' : ''}`}
                        onClick={() => handleStepClick(index)} // Ensure steps are only clickable when allowed
                    >
                        <div
                            className={`circle ${index < currentStep ? 'completed' :
                                index === currentStep ? 'active' : ''
                                }`}
                        >
                            {/* Show tick icon for completed or active steps */}
                            {(index < currentStep || (index === 0 && currentStep >= 1)) && <FaCheck className='tick-icon' />}
                        </div>
                        <div className='label'>{label}</div>
                    </div>

                    {index < steps.length - 1 && (
                        <div className={`line-container`}>
                            <div className={`line ${index < currentStep ? 'line-active' : ''}`}></div>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
