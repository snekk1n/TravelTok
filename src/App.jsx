import Hero from "./components/Hero/Hero.jsx";
import TopSlider from "./components/TopSlider/TopSlider.jsx";
import TourCard from "./components/TourCard/TourCard.jsx";
import Footer from "./components/footer/Footer.jsx";
import Feedbacks from "./components/Feedbacks/Feedbacks.jsx";
import FilterTour from "./components/FilterTour.jsx";
import { Route, Routes } from 'react-router-dom';
import TourDetail from "./components/TourDetail/TourDetail.jsx";
import ProfileForm from "./components/ProfileForm/ProfileForm.jsx";
import AddTour from "./components/ProfileForm/MyOffice/AddTour.jsx";

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
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/tour/:id" element={<TourDetail />} />
            <Route path="/profile/AddTour" element={<AddTour />} />
        </Routes>
    );
};

export default App;