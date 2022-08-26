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

function App() {
  return (
    <div className='App'>
      <HeaderComponent />
      <BannerComponent title={"Insights"} imageSource={insightBanner} />
      <ButtonComponent value={"OUR FUNDS"} />
      <EventCard heading={"Private Credit EU Leadership Summit"} content={`We are pleased to be speaking on a panel dealing with “A world turned upside down: Adjusting to the consequences of covid, inflation, interest rates, supply chain issues and the conflict in Ukraine."`} date={"28 September 2022"} />
      <ProductCard />
      <InsightsCard />
      <PodcastCard />

      <Footer />
    </div>

  );
}

export default App;
