import React from 'react';
import { Card } from 'antd';
import './InsightsCard.css';


const InsightsCard = (props) => {

    return (
        <div>
            <Card
                className='InsightsCard'
                // style={{ width: "300px" }}
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
                {/* <Meta

                    title="Card title"
                    description="This is the description"
                /> */}
                <p className='ptag' style={{ fontSize: "22px" }}>{props.heading}</p>
                <p className='ptag' style={{ fontSize: "16px" }}>{props.description}</p>
                {/* <p className='ptag' style={{ fontSize: "16px" }}><span> Digital Lending </span></p> */}

            </Card>

        </div>
    )
}

export default InsightsCard;