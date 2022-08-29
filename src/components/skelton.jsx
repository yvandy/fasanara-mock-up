import { Col, Row } from 'antd';
import './skelton.css';
import { Divider } from 'antd';
import EventCard from './cards/EventCard/EventCard';
import InsightsCard from './cards/InsightsCard/InsightsCard';
import PodcastCard from './cards/PodcastCard/PodcastCard';
import NewsCard from './cards/NewsCard/NewsCard';
import Footer from './Footer'
import Slideshow from './CarouselComponent'
import HeaderComponent from './HeaderComponent';

const Skelton = (props) => {
    return (
        <>
            <HeaderComponent />
            {/* <Row>
                <Col span={4} offset={4}> <div>LOGO</div></Col>
                <Col span={8} offset={4}> <div>MENU</div></Col>
            </Row> */}
            <Row>
                <Col span={24}>
                    <div style={{ minHeight: "443px" }}>
                        <Slideshow />
                    </div></Col>
            </Row>
            <Row>
                <Col span={24}> <div style={{ height: "100px" }}> RECENT AND UPCOMING EVENTS</div></Col>
            </Row>
            <Row gutter={[8, 8]} justify="center">
                <Col xs={18} sm={18} md={8} lg={8} xl={8}>
                    <EventCard heading={"Private Credit EU Leadership Summit"} content={`We are pleased to be speaking on a panel dealing with “A world turned upside down: Adjusting to the consequences of covid, inflation, interest rates, supply chain issues and the conflict in Ukraine. chain issues and the conflict in Ukraine chain issues and the conflict in Ukraine chain issues and the conflict in Ukraine chain issues and the conflict in Ukraine"`} date={"28 September 2022"} />
                </Col>
                <Col xs={18} sm={18} md={8} lg={8} xl={8}><EventCard heading={"Private Credit EU Leadership Summit"} content={`We are pleased to be speaking on a panel dealing with “A world turned upside down: Adjusting to the consequences of covid, inflation, interest rates, supply chain issues and the conflict in Ukraine."`} date={"28 September 2022"} /></Col>
                <Col xs={18} sm={18} md={8} lg={8} xl={8}><EventCard heading={"Private Credit EU Leadership Summit"} content={`We are pleased to be speaking on a panel dealing with “A world turned upside down: Adjusting to the consequences of covid, inflation, interest rates, supply chain issues and the conflict in Ukraine."`} date={"28 September 2022"} /></Col>
            </Row>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={18} sm={18} md={8} lg={8} xl={8}>
                    <EventCard heading={"Private Credit EU Leadership Summit"} content={`We are pleased to be speaking on a panel dealing with “A world turned upside down: Adjusting to the consequences of covid, inflation, interest rates, supply chain issues and the conflict in Ukraine."`} date={"28 September 2022"} />
                </Col>
                <Col xs={18} sm={18} md={8} lg={8} xl={8}><EventCard heading={"Private Credit EU Leadership Summit"} content={`We are pleased to be speaking on a panel dealing with “A world turned upside down: Adjusting to the consequences of covid, inflation, interest rates, supply chain issues and the conflict in Ukraine."`} date={"28 September 2022"} /></Col>
                <Col xs={18} sm={18} md={8} lg={8} xl={8}><EventCard heading={"Private Credit EU Leadership Summit"} content={`We are pleased to be speaking on a panel dealing with “A world turned upside down: Adjusting to the consequences of covid, inflation, interest rates, supply chain issues and the conflict in Ukraine."`} date={"28 September 2022"} /></Col>
            </Row>

            <Divider />
            <Row gutter={[16, 16]}>
                <Col span={24}><div> Fasanara Capital </div></Col>
                <Col span={24}> <div> Quant Fintech Investment Company</div></Col>
                <Col span={16} offset={4} style={{ minHeight: "200px" }}> <div style={{ minHeight: "200px" }}> {`Fasanara Capital is an independent, owner-managed alternative asset management company authorized and regulated by the Financial Conduct Authority. Co-founded by Francesco Filia in 2011, Fasanara is based in London with alliance offices in Milan.  We offer access to a range of inventive multi-asset capacity-constrained niche products. Fasanara's unorthodox portfolio construction and unconventional investment strategy is a response to today’s transformational markets.`} </div></Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={5} offset={2}><div>Column</div></Col>
                <Col span={5}> <div>Column</div></Col>
                <Col span={5}> <div>Column</div></Col>
                <Col span={5}> <div>Column</div></Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div> OUR FUNDS</div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div>
                        INSIGHTS BANNER
                    </div>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={24}><div>Insights from the team</div></Col>
                <Col span={24}> <div>Our Outlooks, Cookies and Scenarios on the market </div></Col>

            </Row>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>
                    <InsightsCard />
                </Col>
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>
                    <InsightsCard />
                </Col>
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>
                    <InsightsCard />
                </Col>
            </Row>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>
                    <InsightsCard />
                </Col>
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>
                    <InsightsCard />
                </Col>
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>
                    <InsightsCard />
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <div> MORE INSIGHTS</div>
                </Col>
            </Row>

            <Row gutter={[16, 16]} justify="center">
                <Col xs={18} sm={18} md={8} lg={8} xl={6}>
                    <PodcastCard />
                </Col>
                <Col xs={18} sm={18} md={8} lg={8} xl={6}>
                    <PodcastCard />
                </Col>
                <Col xs={18} sm={18} md={8} lg={8} xl={6}>
                    <PodcastCard />
                </Col>
            </Row>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={18} sm={18} md={8} lg={8} xl={6}>
                    <PodcastCard />
                </Col>
                <Col xs={18} sm={18} md={8} lg={8} xl={6}>

                    <PodcastCard />
                </Col>
                <Col xs={18} sm={18} md={8} lg={8} xl={6}>

                    <PodcastCard />
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <div> MORE PODCASTS</div>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <div>
                        MEDIA BANNER
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <NewsCard />
                </Col>
            </Row>
            <Footer />
        </>
    )
}

export default Skelton;