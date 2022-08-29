import './App.css';
import HeaderComponent from './components/HeaderComponent';
import BannerComponent from './components/BannerComponent';
import insightBanner from './assets/insightBanner.png';
import ButtonComponent from './components/ButtonComponent';
import EventCard from './components/cards/EventCard/EventCard';
import ProductCard from './components/cards/ProductCard/ProductCard';
import InsightsCard from './components/cards/InsightsCard/InsightsCard';
import Footer from './components/Footer';
import PodcastCard from './components/cards/PodcastCard/PodcastCard';
import NewsCard from './components/cards/NewsCard/NewsCard';
import ProductCardGrid from './components/container/ProductCardContainer';
import EventCardGrid from './components/container/EventCardContainer';

import PodcastContainer from './components/container/PodcastContainer';
import Skelton from './components/skelton';
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
      <Row style={{ marginTop: "60px" }}>
        <Col span={24}> <div style={{ height: "100px" }}> RECENT & UPCOMING EVENTS</div></Col>
      </Row>
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



      {/* 
      <ButtonComponent value={"OUR FUNDS"} />
      <EventCard heading={"Private Credit EU Leadership Summit"} content={`We are pleased to be speaking on a panel dealing with “A world turned upside down: Adjusting to the consequences of covid, inflation, interest rates, supply chain issues and the conflict in Ukraine."`} date={"28 September 2022"} />
      <EventCardGrid />
      <ProductCardGrid />


      <ProductCard />
      <InsightsCard />
      <InsightCardGrid />
      <PodcastCard />
      <PodcastGrid />

      <NewsCard />

      <Footer /> */}
    </div>

  );
}

export default App;
