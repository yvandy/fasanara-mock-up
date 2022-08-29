import './App.css';
import HeaderComponent from './components/HeaderComponent';
import BannerComponent from './components/BannerComponent';
import insightBanner from './assets/insightBanner.png';
import Footer from './components/Footer';
import PodcastContainer from './components/container/PodcastContainer';
import CarouselContainer from './components/container/CarouselContainer';
import EventCardContainer from './components/container/EventCardContainer';
import ProductDescriptionContainer from './components/container/ProductDescriptionContainer';
import ProductCardContainer from './components/container/ProductCardContainer';
import InsightCardContainer from './components/container/InsightCardContainer';
import NewsCardContainer from './components/container/NewsCardContainer';
import { Col, Row } from 'antd';
import { Divider } from 'antd';

function App() {
  return (
    <div className='App'>
      <HeaderComponent />
      <CarouselContainer />
      <EventCardContainer />
      <Row justify='center'>
        <Col span={6}>
          <Divider />
        </Col>
      </Row>
      <ProductDescriptionContainer />
      <ProductCardContainer />
      <BannerComponent title={"Insights"} imageSource={insightBanner} />
      <InsightCardContainer />
      <PodcastContainer />
      <BannerComponent title={"Media"} imageSource={insightBanner} />
      <NewsCardContainer />
      <Footer />
    </div>
  );
}

export default App;
