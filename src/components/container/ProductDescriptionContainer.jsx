import { Col, Row } from 'antd';
import './ProductDescriptionContainer.css'
const ProductDescriptionContainer = () => {

    return (
        <Row gutter={[16, 16]} justify="center">
            <Col span={15} className="productDetails">
                <div className="productTitle">Fasanara Capital</div>
                <div className="productSubTitle"> Quant Fintech Investment Company</div>
                <div className="productDescription"> {`Fasanara Capital is an independent, owner-managed alternative asset management company authorized and regulated by the Financial Conduct Authority. Co-founded by Francesco Filia in 2011, Fasanara is based in London with alliance offices in Milan.  We offer access to a range of inventive multi-asset capacity-constrained niche products. Fasanara's unorthodox portfolio construction and unconventional investment strategy is a response to today’s transformational markets.`} </div>
            </Col>
        </Row>
    )
}

export default ProductDescriptionContainer;


