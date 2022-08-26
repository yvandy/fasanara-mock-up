import React from 'react';
import { Card } from 'antd';
import './InsightsCard.css';


const InsightsCard = () => {

    return (
        <div>
            <Card
                className='InsightsCard'
                style={{ width: "300px" }}
                cover={
                    <a href='#' >
                        <img
                            className='cardImage'
                            alt="example"
                            src="https://static.wixstatic.com/media/2bcfa3_836f5e935074421c98f2d1fb714dd08d~mv2.gif"
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

        </div>
    )
}

export default InsightsCard;