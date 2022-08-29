import React from 'react';
import { Card } from 'antd';
import './InsightsCard.css';


const InsightsCard = (props) => {
    return (
        <div>
            <Card
                className='InsightsCard'
                cover={
                    <a href='#' >
                        <img
                            className='cardImage'
                            alt="example"
                            src={props.source}
                        />
                    </a>
                }
            >
                <p className='ptag' style={{ fontSize: "22px" }}>{props.heading}</p>
                <p className='ptag' style={{ fontSize: "16px" }}>{props.description}</p>
            </Card>
        </div>
    )
}

export default InsightsCard;