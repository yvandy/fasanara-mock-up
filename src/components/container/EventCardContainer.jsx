import { Col, Row } from 'antd';
import EventCard from '../cards/EventCard/EventCard';

const EventCardContainer = () => {
    return (
        <div style={{ marginBottom: "50px" }}>
            <Row>
                <Col span={24}> <div style={{ fontSize: "18px", lineHeight: "1.5em", marginTop: "60px" }}> RECENT & UPCOMING EVENTS</div></Col>
            </Row>
            <Row gutter={[15, 15]} justify="center" style={{ marginBottom: "15px" }}>
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>
                    <EventCard heading={"Private Credit EU Leadership Summit"} content={`We are pleased to be speaking on a panel dealing with “A world turned upside down: Adjusting to the consequences of covid, inflation, interest rates, supply chain issues and the conflict in Ukraine."`} cardLink="https://live.privateequitywire.co.uk/private-credit-european-leadership-summit?registration_source=news_sites" date={"28 September 2022"} backgroundImage="https://static.wixstatic.com/media/834e5b_af9cd730ef774f289a696f037bc3d7f0~mv2.gif" />
                </Col>
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>
                    <EventCard heading={"FTT DeFi 2022"} content={`We were at the Fintech Talents DeFi event, where we discussed "What the cryptoverse means for lending".`} cardLink="https://www.fintechtalents.com/ftt-defi/#1652807898639-ef3eb900-a024" date={"12 July 2022"} backgroundImage="https://static.wixstatic.com/media/834e5b_82c7afc8e54143cfa91b55cd25cb4c84~mv2.gif" />
                </Col>
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>
                    <EventCard heading={"LendIt Fintech 2022"} content={`Attended the biggest USA’s leading event for innovation in financial services in New York, US.`} cardLink="https://www.lendit.com/usa/2022/" date={"25 - 26 May 2022"} backgroundImage="https://static.wixstatic.com/media/834e5b_d6ba60aa51c24597a7346df8c8f55cef~mv2.gif" />
                </Col>
            </Row>
            <Row gutter={[15, 15]} justify="center">
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>
                    <EventCard heading={"Business Forum for Alt Funds"} content={`We participated and spoke about importance of ESG, the post-pandemic world, key legal developments, crypto and other topics.`} cardLink="https://www.wilsonwillis.com/business-forum-2022" date={"18 May 2022"} backgroundImage="https://static.wixstatic.com/media/834e5b_edfa97e03d5b4a98b1f0fbf54dfcb87f~mv2.gif" />
                </Col>
                <Col xs={15} sm={15} md={5} lg={5} xl={5}><EventCard heading={"AIM Summit"} content={`We discussed "Hedge Funds - What investors currently are looking for from their hedge fund allocation".`} cardLink="https://www.aimsummit.com/" date={"28 September 2022"} backgroundImage="https://static.wixstatic.com/media/834e5b_139b1772d0d94504a7735a98713914e8~mv2.gif" />
                </Col>
                <Col xs={15} sm={15} md={5} lg={5} xl={5}><EventCard heading={"FTT Embedded Finance"} content={`Our Head of Capital Markets, Patrizia Lando, spoke about Buy Now Pay Later at the FTT Embedded Finance conference in London.`} cardLink="https://www.fintechtalents.com/" date={"28 September 2022"} backgroundImage="https://static.wixstatic.com/media/834e5b_061583accbf14c10b58c062d96e7c63c~mv2.gif" /></Col>
            </Row>
        </div>
    )
}

export default EventCardContainer