import Hero from "./components/Hero/Hero.jsx";
import TopSlider from "./components/TopSlider/TopSlider.jsx";
import TourCard from "./components/TourCard/TourCard.jsx";
import Footer from "./components/footer/Footer.jsx";
import Feedbacks from "./components/Feedbacks/Feedbacks.jsx";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';



const App = () => {
    Modal.setAppElement('#root');
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