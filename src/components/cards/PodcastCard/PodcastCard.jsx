import React from 'react';
import { Card } from 'antd';
import './PodcastCard.css';


const PodcastCard = (props) => {
    return (
        <Card
            className='PodcastCard'
            cover={
                <a href='#'  >
                    <img
                        className='cardImage'
                        alt="example"
                        src={props.source}
                    />
                </a>
            }
        >
            <div className='cardDescription'>
                <p style={{ fontSize: "16px" }}>{props.headerText}</p>
                <p style={{ fontSize: "12px" }}>{props.descriptionText}</p>
            </div>
        </Card>
    )
}

export default PodcastCard;