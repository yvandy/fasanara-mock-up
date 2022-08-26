import React from 'react';
import { Card } from 'antd';
import './EventCard.css';
const EventCard = (props) => {

    return (
        <>
            <Card className='eventCard'>
                <p className='header'>{props.heading}</p>
                <p className='content'>{props.content}</p>
                <p className='date'>{props.date}</p>
            </Card>

        </>
    )
}

export default EventCard;