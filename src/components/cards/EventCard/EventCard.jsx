import React, { useState } from 'react';
import { Card } from 'antd';
import './EventCard.css';

const EventCard = (props) => {
    const [onHover, setOnHover] = useState(false);
    const handleMouseEnter = () => {
        setOnHover(true)
    }
    const handleMouseLeave = () => {
        setOnHover(false)
    }
    return (
        <>
            <Card className='eventCard' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a className='eventLink' href={props.cardLink || "#"} target="_blank" rel="noreferrer">
                    <div className="eventImage" style={{ opacity: onHover ? 1 : 0 }} >
                        <img src={props.backgroundImage} alt="" />
                    </div>
                    <div className='eventContent'>
                        <div className='eventDescription'>
                            <p className='header'>{props.heading}</p>
                            <p className='content'>{props.content}</p>
                            <p className='date'>{props.date}</p>
                        </div>
                    </div>
                </a>
            </Card>
        </>
    )
}

export default EventCard;