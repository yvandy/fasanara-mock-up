import { Col, Row } from 'antd';
import ProductCard from '../cards/ProductCard/ProductCard';
import ButtonComponent from '../ButtonComponent';

const ProductCardContainer = () => {
    return (
        <>
            <Row justify='center'>
                <Col span={15}>
                    <Row gutter={[16, 16]} justify="center">
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <ProductCard heading="Fasanara Fintech" text1="Alternative Credit" text2="Digital Lending " />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <ProductCard heading="Fasanara Quant" text1="Quant Network. Liquid" text2="Assets Trading" />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <ProductCard heading="Fasanara Digital" text1="Digital Assets" text2="Arbitrage" />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <ProductCard heading="Fasanara Ventures" text1="New Technologies" text2="Co-Investments" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{ marginBottom: "80px" }}>
                    <ButtonComponent value="OUR FUNDS" buttonLink="https://www.fasanara.com/funds" />
                </Col>
            </Row>
        </>
    )
}

export default ProductCardContainer;