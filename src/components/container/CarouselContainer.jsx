import { Col, Row } from 'antd';
import Slideshow from '../CarouselComponent';

const CarouselContainer = () => {
    return (
        <Row>
            <Col span={24}>
                <div>
                    <Slideshow />
                </div>
            </Col>
        </Row>
    )
}

export default CarouselContainer;
