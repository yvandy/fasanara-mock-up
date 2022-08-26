import React from 'react';
import { Card } from 'antd';
import logo from '../../../assets/logoFasanara.png'
import './ProductCard.css'


const ProductCard = () => {

    return (
        <>
            <Card
                className="productCard"
                hoverable                
                cover={<img alt="example" src={logo} />}
            >
                <p className='ptag' style={{ fontSize: "22px" }}>Fasanara Fintech</p>
                <p className='ptag' style={{ fontSize: "16px" }}><span> Alternative Credit</span></p>
                <p className='ptag' style={{ fontSize: "16px" }}><span> Digital Lending </span></p>
            </Card>
        </>
    )
}

export default ProductCard