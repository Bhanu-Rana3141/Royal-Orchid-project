export default function EventButtons({prop1, prop2}) {

    return (
        <>
            <div className='wedding-other-input'>
                <label className="event-button">
                    <input type="radio" name="eventType" value="wedding" id="wedding" />
                    <span>{prop1}</span>
                </label>
                <label className="event-button">
                    <input type="radio" name="eventType" value="other" id="other" />
                    <span>{prop2}</span>
                </label>
            </div>
        </>
    )
}
