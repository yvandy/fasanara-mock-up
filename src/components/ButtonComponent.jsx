import React from 'react';
import './ButtonComponent.css'

const ButtonComponent = (props) => {
    return (
        <>
            <div className='customButton' style={{ border: props.borderColor ? `1px solid ${props.borderColor}` : null }}>
                <a href={props.buttonLink || "#"} target="_blank" rel="noreferrer">{props.value}</a>
            </div>
        </>
    )
}

export default ButtonComponent