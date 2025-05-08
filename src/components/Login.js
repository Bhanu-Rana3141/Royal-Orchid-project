import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../assets/css/global.css';
import { useNavigate } from 'react-router-dom';
import RightImage from './RightImage'
import Icons from './Icons.js'

function Login() {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/otp');
    }

    return (
        <div className='otp-parent'>
            <div className='otp-left-part'>
                <div className='left-part1'>
                    <div className='login-heading'>
                        <div className='mt-4 banquets-cart'>Banquets Cart</div>
                        <div className="mb-3 hotel-heading1">Hotel Royal Orchid, Bangalore</div>
                    </div>

                    <div className='welcome-para'>
                        <div className='welcome-heading'>Welcome to</div>
                        <div className="mb-2 hotel-heading2">Hotel Royal Orchid</div>
                    </div>

                    <div className='mb-4 details-para'>
                        Please Insert Your Details and Continue
                    </div>

                    <Form>
                        <div className="mb-3 inputBox">
                            <i className="bi bi-person icon-style"></i>
                            <input type='text' placeholder='FULL NAME' className='form-input' required></input>
                        </div>

                        <div className="mb-3">
                            <i className="bi bi-envelope icon-style"></i>
                            <input type='email' placeholder='EMAIL' className='form-input' required></input>
                        </div>

                        <div className="mb-3" >
                            <i className="bi bi-phone icon-style"></i>
                            <input type='tel' placeholder='PHONE NO' className='form-input' required></input>
                        </div>

                        <div className="mb-3 checkbox" controlId="formCheckbox">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <div className='checkbox-text ps-2'>
                                By proceeding, you agree to Royal Orchid's <span className='checkbox-text-span'>Privacy Policy,
                                    User Agreement</span> and <span className='checkbox-text-span'>T&Cs</span>
                            </div>
                        </div>

                        <div className='submit-btn'>
                            <button onClick={handleSubmit}>SUBMIT</button>
                        </div>
                    </Form>
                </div>

                <div className='left-part2'>
                    <i className="bi bi-headset headset-icon"></i>
                    <span>Need Assistance? Feel Free to<span className='contact-us'> Contact Us</span></span>
                </div>
            </div>

            {/* Right: Image */}
            <div className='otp-right-part'>
                <RightImage />
                <Icons />
            </div>
        </div >
    );
}

export default Login;