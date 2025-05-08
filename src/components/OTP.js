import React from 'react'
import '../assets/css/global.css'
import loginImg from '../assets/images/loginImg.png'
import otp from '../assets/images/otp.png'
import RightImage from './RightImage'
import { useNavigate } from 'react-router-dom'
import Icons from './Icons'

export default function OTP() {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/social-events')
    }

    return (
        <>
            <div className='otp-parent'>
                <div className='otp-left-part'>
                    <div className='otp-left-part1'>
                        <div className='otp-img-parent'><img src={otp} alt='otp-image'></img></div>
                        <div className='otp-verification'>OTP <span>Verification</span></div>
                        <div className='cameron'>Hello Cameron Williamson,</div>
                        <div className='thankyou-line'>Thank you for registering with us. Please insert OTP as 
                        shared on your mobile xxxxxxx275</div>
                        <div className='box-container'>
                            <input className='box'></input>
                            <input className='box'></input>
                            <input className='box'></input>
                            <input className='box'></input>
                            <input className='box'></input>
                        </div>
                        <div className='resend-otp'>If you did not receive any code? <span>Resend</span></div>
                        <div className='submit-btn otp-submit-btn'>
                            <button onClick={handleSubmit}>SUBMIT</button>
                        </div>
                    </div>

                    <div className='otp-left-part2'>
                        <div className='invalid-otp'>
                            <i className="bi bi-x cross-icon"></i>
                            <span className='invalid-otp-span'>Invalid OTP. Please check your code and try again.</span>
                        </div>
                        <div className='assistance'>
                            <i className="bi bi-headset headset-icon"></i>
                            <span className='assistance-span'>Need Assistance? Feel Free to <span className='otp-contact'>Contact Us</span> </span>
                        </div>
                    </div>
                </div>

                <div className='otp-right-part'>
                    <RightImage/>
                    <Icons/>
                </div>
            </div>
        </>
    )
}
