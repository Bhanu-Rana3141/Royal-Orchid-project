import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import curatebgimg from '../assets/images/curatebgimg.png';
import RightImage from '../components/RightImage';
import Icons from '../components/Icons';
import EventButtons from '../components/EventButtons';
import SelectDropdown from '../components/SelectDropdown';
import BuffetCard from '../components/BuffetCard';
import SubmitButton from '../components/SubmitButton';
import Stepper from '../components/Stepper';

export default function CurateEvent() {

    const [showContainer, setShowContainer] = useState(true);

    const buffetCards = [
        {
            heading: 'Buffet Hi Tea',
            selectedCount: 3,
            leftItems: [
                { name: 'Non Vegetarian', count: 1 },
                { name: 'Dessert', count: 1 }
            ],
            rightItems: [
                { name: 'Vegetarian', count: 1 }
            ]
        },
        {
            heading: 'Buffet Lunch',
            selectedCount: 20,
            leftItems: [
                { name: 'Welcome Drink', count: 1 },
                { name: 'Starter', count: 2 },
                { name: 'Salads', count: 1 },
                { name: 'Soups', count: 2 },
                { name: 'Vegetarian Main Course', count: 1 },
                { name: 'Non-Vegetarian Main Course', count: 3 }
            ],
            rightItems: [
                { name: 'Dal', count: 2 },
                { name: 'Curd Item', count: 1 },
                { name: 'Rice/ Noodles', count: 3 },
                { name: 'Indian Breads', count: 2 },
                { name: 'Desserts', count: 1 },
                { name: 'Live Counters at Additional C...', count: 1 }
            ]
        },
        {
            heading: 'Dinner with Starters',
            selectedCount: 20,
            leftItems: [
                { name: 'Welcome Drink', count: 1 },
                { name: 'Starter', count: 2 },
                { name: 'Salads', count: 1 },
                { name: 'Soups', count: 2 },
                { name: 'Vegetarian Main Course', count: 1 },
                { name: 'Non-Vegetarian Main Course', count: 3 }
            ],
            rightItems: [
                { name: 'Dal', count: 2 },
                { name: 'Curd Item', count: 1 },
                { name: 'Rice/ Noodles', count: 3 },
                { name: 'Indian Breads', count: 2 },
                { name: 'Desserts', count: 1 },
                { name: 'Live Counters at Additional C...', count: 1 }
            ]
        }
    ];

    return (
        <>
            <div className='curate-event-container'>
                {showContainer && (
                    <div className='curate-event-div'>
                        <div className='curate-event-text-container'>
                            <IoMdClose className='curate-close-Icon' onClick={() => setShowContainer(false)} />
                            <div className='curate-event-text'>
                                <div className='mb-2 curate-heading'>Curate my event</div>
                                <div className='stepper'><Stepper/></div>
                                <EventButtons prop1='Composition' prop2='Ala-Carte' />
                                <div className='select-community'>
                                    <div>Types</div>
                                    <SelectDropdown className='buffet-type' options={['Buffet Lunch / Dinner with Starters', 'Buffet Lunch / Dinner with Starters', 'Buffet Lunch / Dinner with Starters']} />
                                </div>
                                <div className='composition'>Select Composition</div>

                                {buffetCards.map((card, index) => (
                                    <BuffetCard
                                        key={index}
                                        heading={card.heading}
                                        selectedCount={card.selectedCount}
                                         leftItems={card.leftItems}
                                        rightItems={card.rightItems}
                                    />
                                ))}

                                <div className="mb-3 checkbox" controlId="formCheckbox">
                                    <div>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='checkbox-text ps-2'>
                                        <div className='checkbox-text-1'>I need a customized menu for food.</div>
                                        <div className='checkbox-text-2'>Choosing this means, you will not need any decoration support from
                                            Royal Orchid</div>
                                    </div>
                                </div>

                                <div className='drinks'>
                                    <div>Drinks</div>
                                    <EventButtons prop1='Yes' prop2='No' />
                                </div>
                            </div>

                            <SubmitButton label="SUBMIT" to="/" className='submit-btn socialevent-btn save-continue-btn' />
                        </div>
                    </div>
                )}

                <div className='otp-right-part currentevent-image-part'>
                    <RightImage image={curatebgimg} />
                    <Icons />
                </div>
            </div>
        </>
    );
}
