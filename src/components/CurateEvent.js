import React from 'react'
import curatebgimg from '../assets/images/curatebgimg.png'
import Icons from './Icons'
import { FaChevronDown } from 'react-icons/fa';

export default function CurateEvent() {
    return (
        <>
            <div className='curate-event-container'>
                <div className='curate-event-bgimg'>
                    <img src={curatebgimg}></img>
                </div>

                <div className='curate-event-text'>
                    <div className='curate-heading'>Curate my event</div>

                    <div></div>

                    <div>
                        <button className="event-button">
                            <input type="checkbox" className="event-checkbox" />
                            <span>Composition</span>
                        </button>
                        <button className="event-button">
                            <input type="checkbox" className="event-checkbox" />
                            <span>Ala-Carte</span>
                        </button>
                    </div>

                    <div className='select-community'>
                        <div>Types</div>
                        <div className="dropdown-wrapper">
                            <select className="custom-select">
                                <option value="community" >Select Option</option>
                                <option value="community1">Buffet Lunch / Dinner with Starters</option>
                                <option value="community2">Buffet Lunch / Dinner with Starters</option>
                                <option value="community3">Buffet Lunch / Dinner with Starters</option>
                            </select>
                            <FaChevronDown className='selectIcon' />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
