import { Col, Row } from 'antd';
import PodcastCard from '../cards/PodcastCard/PodcastCard';
import ButtonComponent from '../ButtonComponent';

const PodcastContainer = () => {

    return (
        <>
            <Row gutter={[16, 16]} justify="center" >
                <Col style={{ textAlign: "justify", marginBottom: "50px" }} span={15}><svg preserveAspectRatio="xMidYMid meet" data-bbox="40.8 40.8 118.4 118.4" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="40.8 40.8 118.4 118.4" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-8h8j4-998wln"><defs></defs><title id="svgcid-8h8j4-998wln"></title>
                    <g>
                        <path d="M159.2 100c0 32.695-26.505 59.2-59.2 59.2-32.695 0-59.2-26.505-59.2-59.2 0-32.695 26.505-59.2 59.2-59.2 32.695 0 59.2 26.505 59.2 59.2z" fill="black" clipRule="evenodd" fillRule="evenodd" ></path>
                        <path fill="#ffffff" clipRule="evenodd" fillRule="evenodd" d="M105 84.2c1 0 1.8.7 1.9 1.7l2.3 20.3 2.3-13.5c.2-.9.9-1.6 1.9-1.6.9 0 1.7.6 2 1.5l3 12.7 2.5-5.1c.3-.7 1-1.1 1.7-1.1h18.5c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4h-18l-3.3 6.8c-.4.7-1.1 1.2-2 1.1-.8-.1-1.5-.7-1.7-1.5l-2.6-10.9-2.6 15.3c-.2 1-1 1.6-2 1.6s-1.8-.8-1.9-1.7l-2.2-19-3.4 29.2c-.1.8-.8 1.3-1.6 1.2-.8-.1-1.3-.8-1.2-1.6l4.3-36.5c.3-.9 1.1-1.7 2.1-1.7" ></path>
                        <path fill="#ffffff" clipRule="evenodd" fillRule="evenodd" d="M93.4 116.7c-1 0-1.8-.7-1.9-1.7l-2.3-20.3-2.3 13.5c-.2.9-.9 1.6-1.9 1.6-.9 0-1.7-.6-2-1.5l-3-12.7-2.5 5.1c-.3.7-1 1.1-1.7 1.1H57.1c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4h18l3.3-6.8c.4-.7 1.1-1.2 2-1.1.8.1 1.5.7 1.7 1.5l2.6 10.9 2.6-15.3c.2-1 1-1.6 2-1.6s1.8.8 1.9 1.7l2.2 19 3.4-29.2c.1-.8.8-1.3 1.6-1.2.8.1 1.3.8 1.2 1.6L95.3 115c-.1 1-.9 1.7-1.9 1.7" ></path>
                    </g>
                </svg>
                    <div style={{ position: 'absolute', top: 0, left: 70, fontSize: "30px" }}>Podcasts </div>
                </Col>
            </Row>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={4} sm={4} md={5} lg={5} xl={5}>
                    <PodcastCard source="https://static.wixstatic.com/media/834e5b_01694831d55f46d5925fb1948808fde4~mv2.gif" headerText="Scenarios | Jan 2021" podcastLink="https://www.fasanara.com/resonance" descriptionText="Digital Future. Use Of Digital Technology To Build Resilient Portfolios." />
                </Col>
                <Col xs={4} sm={4} md={5} lg={5} xl={5}>
                    <PodcastCard source="https://static.wixstatic.com/media/834e5b_81c8102f9c55446687a80df03caaeda6~mv2.gif" headerText="Feb22. The Curious Learners" podcastLink="https://www.fasanara.com/the-curious-learners-tradfi-defi" descriptionText="Focus on investments in financial services across TradFi, DeFi and CeFi." />
                </Col>
                <Col xs={4} sm={4} md={5} lg={5} xl={5}>
                    <PodcastCard source="https://static.wixstatic.com/media/834e5b_9923cf5b2c9a4ad6b47cc1cd514d32eb~mv2.gif" descriptionText="Plotting a Course for Digitization of Financial Markets." podcastLink="https://www.fasanara.com/macrovoices-dec" headerText="Dec21. MacroVoices" />
                </Col>
            </Row>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={4} sm={4} md={5} lg={5} xl={5}>
                    <PodcastCard source="https://static.wixstatic.com/media/834e5b_1f02c2a97b35410aaf416fb715740303~mv2.gif" descriptionText="Podcast episode with Nikita Fadeev." podcastLink="https://www.fasanara.com/the-curious-learners" headerText="Nov21. The Curious Learners." />
                </Col>
                <Col xs={4} sm={4} md={5} lg={5} xl={5}>

                    <PodcastCard source="https://static.wixstatic.com/media/834e5b_b7a96105ebf34b10b07ec3d59173cb02~mv2.gif" descriptionText="New Technologies Coming to the Rescue." podcastLink="https://www.fasanara.com/resonance-nov" headerText="Nov21. Resonance FM" />
                </Col>
                <Col xs={4} sm={4} md={5} lg={5} xl={5}>

                    <PodcastCard source="https://static.wixstatic.com/media/834e5b_b817383a356d4b50a79cc6f8dd6535be~mv2.gif" descriptionText="Alternative data in Digital Lending." podcastLink="https://www.fasanara.com/alt-data-podcast" headerText="Oct21. The Alternative Data Podcast" />
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{ marginBottom: "80px" }}>
                    <ButtonComponent value=" MORE PODCASTS" buttonLink="https://www.fasanara.com/podcasts" />
                </Col>
            </Row>
        </>

    )
}

export default PodcastContainer;