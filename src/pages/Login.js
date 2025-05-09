import React from 'react';
import { Form } from 'react-bootstrap';
import loginImg from '../assets/images/loginImg.png'
import RightImage from '../components/RightImage'
import Icons from '../components/Icons.js'
import InputField from '../components/InputField.js';
import FormCheckbox from '../components/FormCheckbox.js';
import SubmitButton from '../components/SubmitButton.js'

function Login() {

    return (
        <div className='otp-parent'>
            <div className='otp-left-part'>
                <div className='left-part1'> 
                    <div className='login-heading'>
                        <h2 className='mt-4 banquets-cart'>Banquets Cart</h2>
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
                        <InputField type="text" placeholder="FULL NAME" iconClass="bi-person" />
                        <InputField type="email" placeholder="EMAIL" iconClass="bi-envelope" />
                        <InputField type="tel" placeholder="PHONE NO" iconClass="bi-phone" />
                        <FormCheckbox/>
                        <SubmitButton label="SUBMIT" to="/otp" className='submit-btn' />
                    </Form>
                </div>

                <div className='left-part2'>
                    <i className="bi bi-headset headset-icon"></i>
                    <span>Need Assistance? Feel Free to<span className='contact-us'> Contact Us</span></span>
                </div>
            </div>

            {/* Right: Image */}
            <div className='otp-right-part'>
                <RightImage image={loginImg} />
                <Icons />
            </div>
        </div >
    );
}

export default Login;