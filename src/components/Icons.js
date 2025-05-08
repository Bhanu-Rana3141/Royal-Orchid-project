import React from 'react'
import '../assets/css/global.css'
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import icon5 from '../assets/images/icon5.png'
import icon6 from '../assets/images/icon6.png'
import icon7 from '../assets/images/icon7.png'

export default function Icons() {
    return (
        <>
            <div className='rightpart-image-icons'>
                <div className='rightpart-image-icons1'>
                    <img src={icon1}></img>
                </div>
                <div className='rightpart-image-icons2'>
                    <img src={icon2}></img>
                    <img src={icon3}></img>
                    <img src={icon4}></img>
                    <img src={icon5}></img>
                    <img src={icon6}></img>
                    <img src={icon7}></img>
                </div>
            </div>
        </>
    )
}
