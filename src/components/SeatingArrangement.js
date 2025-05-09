import React from 'react'

export default function SeatingArrangement({text, image1, image2}) {
    return (
        <>
            <div className='seating-arrangement1'>
                <div className='seating-arrangment-div1'>
                    <div className='seating1'><img src={image1}></img></div>
                    <div className='seating-text'>{text}</div>
                </div>
                <div className='seating-arrangment-div2'>
                    <div className='seatingcommon'><img src={image2}></img></div>
                </div>
            </div>
        </>
    )
}
