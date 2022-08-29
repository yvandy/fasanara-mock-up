import React from 'react';
import { Card } from 'antd';
import logo from '../../../assets/logoFasanara.png'
import './ProductCard.css'

const ProductCard = (props) => {
    return (
        <>
            <Card
                className="productCard"
                hoverable
                cover={<img alt="example" src={logo} />}
            >
                <p style={{ fontSize: "22px", marginBottom: "10px" }}>{props.heading}</p>
                <p style={{ fontSize: "16px" }}><span>{props.text1}</span></p>
                <p style={{ fontSize: "16px" }}><span>{props.text2}</span></p>
            </Card>
        </>
    )
}

export default ProductCard