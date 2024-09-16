import Hero from "./components/Hero/Hero.jsx";
import TopSlider from "./components/TopSlider/TopSlider.jsx";
import TourCard from "./components/TourCard/TourCard.jsx";
import Footer from "./components/footer/Footer.jsx";
import Feedbacks from "./components/Feedbacks/Feedbacks.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    return (
        <div>
            <Hero/>
            <TopSlider/>
            <TourCard/>
            <Feedbacks/>
            <Footer/>
        </div>
    );
};

export default App;