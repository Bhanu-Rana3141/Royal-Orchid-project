import React from 'react'
import corporate from '../assets/images/corporate.png'
import seating1 from '../assets/images/seating1.png'
import seating2 from '../assets/images/seating2.png'
import seating3 from '../assets/images/seating3.png'
import socialEvents from '../assets/images/socialEvent.png'
import seatingcommon from '../assets/images/seatingcommon.png'
import loginImg from '../assets/images/loginImg.png'
import RightImage from '../components/RightImage.js'
import Icons from '../components/Icons.js'
import EventButtons from '../components/EventButtons.js'
import EventDateInputs from '../components/EventDateInputs.js'
import SelectDropdown from '../components/SelectDropdown.js'
import SeatingArrangement from '../components/SeatingArrangement.js'
import SubmitButton from '../components/SubmitButton.js'

export default function SocialEvents() {

    return (
        <>
            <div className='social-events'>
                <div className='socialevents-left-part'>
                    <div className='socialevents-left-part-text'>
                        <div className='socialevents-left-part1'>
                            <div className='socialevents-container1'>
                                <div className='socialevents-container1-div1'><img src={socialEvents}></img></div>
                                <div className='socialevents-container1-div2'>Social Event</div>
                            </div>
                            <div className='socialevents-container2'>
                                <div className='socialevents-container2-div1'><img src={corporate}></img></div>
                                <div className='socialevents-container2-div2'>Corporate</div>
                            </div>
                        </div>

                        <div className='socialevents-left-part2'>
                            <div className='socialevent-heading'>Social Event</div>
                            <div className='mb-2 preference-para'>Please Select Your Preference</div>

                            <EventButtons prop1="Wedding" prop2="Other Events"/>

                            <div className='select-community'>
                                <div>Select Community</div>
                                <SelectDropdown options={['Bengali Wedding', 'Punjabi Wedding', 'Gujrati Wedding']} />
                            </div>

                            <div className='associate-program'>
                                <div>Associate Program</div>
                                <SelectDropdown options={['Mehndi', 'Haldi', 'Baraat']} />
                            </div>

                            <div className='event-type'>
                                <div>Event Type</div>
                                <SelectDropdown options={['Multiday Event', 'Singleday Event']} />
                                <EventDateInputs />
                            </div>

                            <div className='guests'>
                                <div>No. of Guests</div>
                                <SelectDropdown options={['200-400', '500-700', '800-1000']} />
                            </div>

                            <div className='seating-arrangement'>
                                <div>Seating Arrangement</div>
                                <div className='seating-arrangement-container'>
                                    <SeatingArrangement text='Theatre Seating' image1={seating1} image2={seatingcommon} />
                                    <SeatingArrangement text='Class Room Seating' image1={seating2} image2={seatingcommon} />
                                    <SeatingArrangement text='U-Shape' image1={seating3} image2={seatingcommon} />
                                    <SeatingArrangement text='Cluster' image1={seating1} image2={seatingcommon} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <SubmitButton label="SUBMIT" to="/curate-events" className='submit-btn socialevent-btn'/>
                </div>

                <div className='otp-right-part'>
                    <RightImage image={loginImg}/>
                    <Icons />
                </div>
            </div>
        </>
    )
}