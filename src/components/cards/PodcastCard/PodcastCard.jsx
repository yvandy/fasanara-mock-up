import React from 'react';
import { Card } from 'antd';
import './PodcastCard.css';


const PodcastCard = () => {

    return (

        <Card
            className='PodcastCard'
            cover={
                <a href='#' >
                    <img
                        className='cardImage'
                        alt="example"
                        src="https://static.wixstatic.com/media/834e5b_01694831d55f46d5925fb1948808fde4~mv2.gif"
                    />
                </a>
            }

        >
            {/* <Meta

                    title="Card title"
                    description="This is the description"
                /> */}

            <p className='ptag' style={{ fontSize: "22px" }}>Scenarios | Jan 2021</p>
            <p className='ptag' style={{ fontSize: "16px" }}>Digital Future. Use Of Digital Technology To Build Resilient Portfolios.</p>


            {/* <p className='ptag' style={{ fontSize: "16px" }}><span> Digital Lending </span></p> */}

        </Card>


    )
}

export default PodcastCard;