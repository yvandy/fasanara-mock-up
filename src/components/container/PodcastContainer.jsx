import { Col, Row } from 'antd';
import PodcastCard from '../cards/PodcastCard/PodcastCard';
import ButtonComponent from '../ButtonComponent';

const PodcastContainer = () => {

    return (
        <>
            <Row gutter={[16, 16]} justify="center">  
                <Col>Logo</Col>
                <Col>Podcasts</Col>
            </Row>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>
                    <PodcastCard source="https://static.wixstatic.com/media/834e5b_01694831d55f46d5925fb1948808fde4~mv2.gif" headerText="Scenarios | Jan 2021" descriptionText="Digital Future. Use Of Digital Technology To Build Resilient Portfolios." />
                </Col>
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>
                    <PodcastCard source="https://static.wixstatic.com/media/834e5b_81c8102f9c55446687a80df03caaeda6~mv2.gif" headerText="Feb22. The Curious Learners" descriptionText="Focus on investments in financial services across TradFi, DeFi and CeFi." />
                </Col>
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>
                    <PodcastCard source="https://static.wixstatic.com/media/834e5b_9923cf5b2c9a4ad6b47cc1cd514d32eb~mv2.gif" descriptionText="Plotting a Course for Digitization of Financial Markets." headerText="Dec21. MacroVoices"  />
                </Col>
            </Row>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>
                    <PodcastCard source="https://static.wixstatic.com/media/834e5b_1f02c2a97b35410aaf416fb715740303~mv2.gif" descriptionText="Podcast episode with Nikita Fadeev." headerText="Nov21. The Curious Learners."  />
                </Col>
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>

                    <PodcastCard source="https://static.wixstatic.com/media/834e5b_b7a96105ebf34b10b07ec3d59173cb02~mv2.gif" descriptionText="New Technologies Coming to the Rescue." headerText="Nov21. Resonance FM" />
                </Col>
                <Col xs={15} sm={15} md={5} lg={5} xl={5}>

                    <PodcastCard source="https://static.wixstatic.com/media/834e5b_b817383a356d4b50a79cc6f8dd6535be~mv2.gif" descriptionText="Alternative data in Digital Lending." headerText="Oct21. The Alternative Data Podcast"  />
                </Col>
            </Row>


            <Row>
                <Col span={24}>
                    <ButtonComponent value=" MORE PODCASTS" />
                </Col>
            </Row>
        </>

    )
}

export default PodcastContainer;