import Hero from "./components/Hero/Hero.jsx";
import TopSlider from "./components/TopSlider/TopSlider.jsx";
import TourCard from "./components/TourCard/TourCard.jsx";
import Footer from "./components/footer/Footer.jsx";
import Feedbacks from "./components/Feedbacks/Feedbacks.jsx";
import FilterTour from "./components/FilterTour.jsx";
import { Route, Routes } from 'react-router-dom';
import TourDetail from "./components/TourDetail/TourDetail.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={
                <div className={'main'}>
                    <Hero/>
                    <TopSlider/>
                    <FilterTour/>
                    <TourCard/>
                    <Feedbacks/>
                    <Footer/>
                </div>
            } />
            <Route path="/tour/:id" element={<TourDetail />} />
        </Routes>
    );
};

export default App;