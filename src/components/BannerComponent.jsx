import React from 'react';
import './BannerComponent.css';

const BannerComponent = (props) => {
    return (
        <div className='container' >
            <img className='banner' src={props.imageSource}  alt="banner" />
            <div className='centered'> <h1 className='title'> {props.title} </h1> </div>
        </div>
    )
}

export default BannerComponent;