import React from 'react'

export default function FormCheckbox() {
    return (
        <>
            <div className="mb-3 checkbox" controlId="formCheckbox">
                <div>
                    <input type="checkbox" />
                </div>
                <div className='checkbox-text ps-2'>
                    By proceeding, you agree to Royal Orchid's <span className='checkbox-text-span'>Privacy Policy,
                        User Agreement</span> and <span className='checkbox-text-span'>T&Cs</span>
                </div>
            </div>
        </>
    )
}
