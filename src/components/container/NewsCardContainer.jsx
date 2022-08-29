import { Col, Row } from 'antd';
import NewsCard from '../cards/NewsCard/NewsCard';
import newsLogo from '../../assets/newsLogo.png'
import Newsimage2 from '../../assets/Newsimage2.png'
import Newsimage3 from '../../assets/Newsimage3.png'
import ButtonComponent from '../ButtonComponent';

const NewsCardContainer = () => {
    return (
        <>
            <Row gutter={[16, 16]} justify="center">
                <Col span={18}>
                    <NewsCard type="image" source="https://static.wixstatic.com/media/834e5b_a0d3e94d4e244b71ba8fca91e73782b4~mv2.jpg/v1/fill/w_475,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/VC%20poster%204.jpg" alt="image" descriptionText=" With Sifted EU we shared our thoughts and opinion on Crypto and why it's the best time to launch our new Fasanara VCIII fund." newsLink="https://link.sifted.eu/view/61bb6e8991c6a02498e7c1fegij7j.69e/8b06614d" logo={newsLogo} title="Interview" date=" May 2022" />
                </Col>
                <Col span={18}>
                    <NewsCard type="image" source="https://static.wixstatic.com/media/834e5b_5bc0cc12d6404f0a84b636a06f447cf4~mv2.jpg/v1/crop/x_66,y_0,w_1069,h_675/fill/w_475,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20220302_Funding_Roundup-1200x675.jpg" alt="image" descriptionText="Press release of our Fasanara VCIII announcement covered by The Block, the leading global information service about Crypto and Blockchain." date="May 2022" title="Funding News" newsLink="https://link.sifted.eu/view/61bb6e8991c6a02498e7c1fegij7j.69e/8b06614d" logo={Newsimage2} />
                </Col>

                <Col span={18}>
                    <NewsCard type="video" source="https://static.wixstatic.com/media/834e5b_30e0203da87045389a9fbe2779680937f000.jpg/v1/fill/w_475,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/834e5b_30e0203da87045389a9fbe2779680937f000.jpg" alt="image" descriptionText="Sky News coverage of our Fasanara VCIII launch." date="May 2022" title="Sky News" logo={Newsimage3} />
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{ marginBottom: "150px" }}>
                    <ButtonComponent value="MORE MEDIA" buttonLink="https://www.fasanara.com/media" />
                </Col>
            </Row>
        </>
    )
}

export default NewsCardContainer;