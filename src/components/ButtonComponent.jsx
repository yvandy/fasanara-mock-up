import React from 'react';
import './ButtonComponent.css'

const ButtonComponent = (props) => {

    return (
        <>
            <div className='button1'>
                <a href="#">{props.value}</a>
            </div>

            {/* <input className=' button' type='button' value={props.value} /> */}

        </>
    )
}

export default ButtonComponent