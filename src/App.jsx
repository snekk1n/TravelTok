import Hero from "./components/Hero/Hero.jsx";
import TopSlider from "./components/TopSlider/TopSlider.jsx";
import TourCard from "./components/TourCard.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
    return (
        <div>
            <Hero/>
            <TopSlider/>
            <TourCard/>
            <Footer/>
        </div>
    );
};

export default App;