import React from 'react';
import './BannerComponent.css';

const BannerComponent = (props) => {
    return (
        <div className='bannerContainer' >
            <img className='banner' src={props.imageSource}  alt="banner" />
            <div className='centered'> <h1 className='bannerTitle'> {props.title} </h1> </div>
        </div>
    )
}

export default BannerComponent;