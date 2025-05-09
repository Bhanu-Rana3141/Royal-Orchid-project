import React from 'react'
import { SlArrowRight } from "react-icons/sl";

export default function BuffetCard({ heading, selectedCount, leftItems = [], rightItems = [] }) {
    return (
        <>
            <div className="buffet-card">
                <div className="buffet-card1">
                    <div>
                        <div className="buffet-heading">{heading}</div>
                        <div className="selected-item">Selected Item : {selectedCount}</div>
                    </div>
                    <SlArrowRight className='right-arrow' />
                </div>

                <div className="buffet-card2">
                    <div className="buffet-card2-left">
                        {leftItems.map((item, index) => (
                            <div className="buffet-card2-left1" key={index}>
                                <div>{item.name}</div>
                                <div>{item.count}</div>
                            </div>
                        ))}
                    </div>

                    <div className="buffet-card2-right">
                        {rightItems.map((item, index) => (
                            <div className="buffet-card2-right1" key={index}>
                                <div>{item.name}</div>
                                <div>{item.count}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
