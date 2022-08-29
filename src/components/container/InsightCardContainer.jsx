import { Col, Row } from 'antd';
import InsightsCard from '../cards/InsightsCard/InsightsCard';
import ButtonComponent from '../ButtonComponent';
import './InsightCardContainer.css'

const InsightCardContainer = () => {

    return (
        <>
            <Row gutter={[16, 16]} justify="center">
                <Col span={15} className="insightDetails" style={{ marginBottom: "50px" }}>
                    <div className="insightTitle">Insights from the team</div>
                    <div className="InsightDescription"> {`Our Outlooks, Cookies and Scenarios on the market`} </div>
                </Col>
            </Row>
            <Row gutter={[25, 25]} justify="center" style={{ marginBottom: "25px" }}>
                <Col xs={4} sm={4} md={5} lg={5} xl={5}>
                    <InsightsCard source="https://static.wixstatic.com/media/2bcfa3_836f5e935074421c98f2d1fb714dd08d~mv2.gif" heading="Scenarios | Jan 2021" description="Digital Future. Use Of Digital Technology To Build Resilient Portfolios." />
                </Col>
                <Col xs={4} sm={4} md={5} lg={5} xl={5}>
                    <InsightsCard source="https://static.wixstatic.com/media/2bcfa3_92065ce30f0348fcb5d6e8b37c118099~mv2.jpg/v1/fill/w_373,h_355,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2bcfa3_92065ce30f0348fcb5d6e8b37c118099~mv2.jpg" heading="Scenarios | Oct 2020" description="The Market Economy In 2025: A Visualization Exercise" />
                </Col>
                <Col xs={4} sm={4} md={5} lg={5} xl={5}>
                    <InsightsCard source="https://static.wixstatic.com/media/2bcfa3_ac71f4d6906d4d94ac01c939d0da07dc~mv2.png/v1/fill/w_373,h_355,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2bcfa3_ac71f4d6906d4d94ac01c939d0da07dc~mv2.png" heading="Scenarios | Oct 2019" description="How To Navigate The Cliff Edge In Markets" />
                </Col>
            </Row>
            <Row gutter={[25, 25]} justify="center">
                <Col xs={4} sm={4} md={5} lg={5} xl={5}>
                    <InsightsCard source="https://static.wixstatic.com/media/2bcfa3_764b9e55161a482e834f280c8f07b33e~mv2.gif" heading="Outlooks | Aug 2019" description="Transformational Markets: History Being Made" />
                </Col>
                <Col xs={4} sm={4} md={5} lg={5} xl={5}>
                    <InsightsCard source="https://static.wixstatic.com/media/2bcfa3_4cb985e366a342518fc43d456f48f0b5~mv2.png/v1/fill/w_373,h_355,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2bcfa3_4cb985e366a342518fc43d456f48f0b5~mv2.png" heading="E-Book | Aug 2018" description="Financial Complexity & Nonlinear Dynamics" />
                </Col>
                <Col xs={4} sm={4} md={5} lg={5} xl={5}>
                    <InsightsCard source="https://static.wixstatic.com/media/2bcfa3_27b04d94211f4ce8ad95615c7684ed8b~mv2.jpg/v1/fill/w_373,h_355,al_c,lg_1,q_80,enc_auto/2bcfa3_27b04d94211f4ce8ad95615c7684ed8b~mv2.jpg" heading="Scenarios | Jun 2016" description="The Market Economy In 2020. The Emergence of a New Monetary Orthodoxy" />
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{ marginBottom: "100px" }}>
                    <ButtonComponent value="MORE INSIGHTS" />
                </Col>
            </Row>
        </>
    )
}

export default InsightCardContainer;