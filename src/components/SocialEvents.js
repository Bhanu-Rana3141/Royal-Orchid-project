import React from 'react'
import '../assets/css/global.css'
import RightImage from './RightImage'
import Icons from './Icons.js'
import socialEvents from '../assets/images/socialEvent.png'
import corporate from '../assets/images/corporate.png'
import seating1 from '../assets/images/seating1.png'
import seatingcommon from '../assets/images/seatingcommon.png'
import { FaChevronDown } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

export default function SocialEvents() {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/curate-events')
    }

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

                            <div className='preference-para'>Please Select Your Preference</div>

                            <div className='wedding-other-input'>
                                <button className="event-button">
                                    <input type="checkbox" className="event-checkbox" />
                                    <span>Wedding</span>
                                </button>
                                <button className="event-button">
                                    <input type="checkbox" className="event-checkbox" />
                                    <span>Other Events</span>
                                </button>
                            </div>

                            <div className='select-community'>
                                <div>Select Community</div>
                                <div className="dropdown-wrapper">
                                    <select className="custom-select">
                                        <option value="community" >Select Option</option>
                                        <option value="community1">Bengali Wedding</option>
                                        <option value="community2">Punjabi Wedding</option>
                                        <option value="community3">Gujrati Wedding</option>
                                    </select>
                                    <FaChevronDown className='selectIcon' />
                                </div>
                            </div>

                            <div className='associate-program'>
                                <div>Associate Program</div>
                                <div className="dropdown-wrapper">
                                    <select className="custom-select">
                                        <option value="program" defaultValue>Select Option</option>
                                        <option value="program2">Mehndi</option>
                                        <option value="program3">Haldi</option>
                                        <option value="program3">Baraat</option>
                                    </select>
                                    <FaChevronDown className='selectIcon' />
                                </div>
                            </div>

                            <div className='event-type'>
                                <div>Event Type</div>
                                <div className="dropdown-wrapper">
                                    <select className="custom-select">
                                        <option value="event">Select Option</option>
                                        <option value="event1">Mutiday Event</option>
                                        <option value="event2">Singleday Event</option>
                                    </select>
                                    <FaChevronDown className='selectIcon' />
                                </div>
                                <div className='event-dates'>
                                    <input placeholder='Start Date'></input>
                                    <input placeholder='End Date'></input>
                                </div>
                            </div>

                            <div className='guests'>
                                <div>No. of Guests</div>
                                <div className="dropdown-wrapper">
                                    <select className="custom-select">
                                        <option value="guests" defaultValue>Select Option</option>
                                        <option value="guest1">200-400</option>
                                        <option value="guest2">500-700</option>
                                        <option value="guest3">800-1000</option>
                                    </select>
                                    <FaChevronDown className='selectIcon' />
                                </div>
                            </div>

                            <div className='seating-arrangement'>
                                <div>Seating Arrangement</div>
                                <div className='seating-arrangement-container'>
                                    <div className='seating-arrangement1'>
                                        <div className='seating-arrangment-div1'>
                                            <div className='seating1'><img src={seating1}></img></div>
                                            <div className='seating-text'>Theatre Seating</div>
                                        </div>
                                        <div className='seating-arrangment-div2'>
                                            <div className='seatingcommon'><img src={seatingcommon}></img></div>
                                        </div>
                                    </div>
                                    <div className='seating-arrangement1'>
                                        <div className='seating-arrangment-div1'>
                                            <div className='seating1'><img src={seating1}></img></div>
                                            <div className='seating-text'>Class Room Seating</div>
                                        </div>
                                        <div className='seating-arrangment-div2'>
                                            <div className='seatingcommon'><img src={seatingcommon}></img></div>
                                        </div>
                                    </div>
                                    <div className='seating-arrangement1'>
                                        <div className='seating-arrangment-div1'>
                                            <div className='seating1'><img src={seating1}></img></div>
                                            <div className='seating-text'>U-Shape</div>
                                        </div>
                                        <div className='seating-arrangment-div2'>
                                            <div className='seatingcommon'><img src={seatingcommon}></img></div>
                                        </div>
                                    </div>
                                    <div className='seating-arrangement1'>
                                        <div className='seating-arrangment-div1'>
                                            <div className='seating1'><img src={seating1}></img></div>
                                            <div className='seating-text'>Cluster</div>
                                        </div>
                                        <div className='seating-arrangment-div2'>
                                            <div className='seatingcommon'><img src={seatingcommon}></img></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='submit-btn socialevent-btn'>
                        <button onClick={handleSubmit}>SUBMIT</button>
                    </div>

                </div>

                <div className='otp-right-part'>
                    <RightImage/>
                    <Icons />
                </div>
            </div>
        </>
    )
}