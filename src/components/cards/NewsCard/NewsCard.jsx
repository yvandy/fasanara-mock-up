import React from 'react';
import './NewsCard.css';
import { Col, Row } from 'antd';

const NewsCard = (props) => {

    return (
        <div className='newsCardMainDiv'>
            <div className='mediaContainer'>
                {props.type === "image" ? (<a href={props.newsLink || "#"} target="_blank" rel="noreferrer">
                    <img className='imageTag' src={props.source} alt={props.alt} />
                </a>) :
                    <video className='newsVideo' src="https://video.wixstatic.com/video/834e5b_30e0203da87045389a9fbe2779680937/720p/mp4/file.mp4" controls>
                    </video>
                }
            </div>
            <div className='textDiv'>
                <p className='heading'>{props.title}  </p>
                <p className='date'>{props.date}</p>
                <p className='description'>
                    {props.descriptionText}
                </p>
                <div className='logoDiv'>
                    <Row justify='center'>
                        <Col span={24}>
                            <img src={props.logo} alt="Logo" />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default NewsCard;