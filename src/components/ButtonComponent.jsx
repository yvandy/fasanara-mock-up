import React from 'react';
import './ButtonComponent.css'

const ButtonComponent = (props) => {
    console.log(props.borderColor)

    return (
        <>
            <div className='customButton' style={{ border: props.borderColor ? `1px solid ${props.borderColor}` : null }}>
                <a href="#">{props.value}</a>
            </div>

            

        </>
    )
}

export default ButtonComponent