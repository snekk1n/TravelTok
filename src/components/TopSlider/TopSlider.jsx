import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TopSlider.scss'
import { useState, useEffect } from 'react';
import img from '../../assets/image.png'
import axios from 'axios';

const TopSlider = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3ffc3134c35fc52da915381e91b8adb4`)
            .then(response => {
                setCars(response.data.results);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="arrows next" onClick={onClick}>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="#091700"/>
                </svg>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const {onClick} = props;
        return (
            <div className="arrows prev" onClick={onClick}>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z" fill="#091700"/>
                </svg>
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.3,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };

    return (
        <>
            <div className={'flex flex-col items-center pt-10'}>
                <h3 className={'text-3xl font-extrabold'}>Топ лучших туров</h3>
                <p className={'text-lg pt-2'}>которые подарят вам лучшие воспоминания</p>
            </div>

            <div className="slider-container pt-8 pb-12">
                <Slider {...settings}>
                    {cars.map((car, index) => (
                        <div className="relative h-96">
                            <img className="w-full h-full object-cover" src={img} alt="Image"/>
                            <div className="absolute bottom-0 left-0 right-0 bg-gray-200 bg-opacity-50 mx-3 mb-14">
                                <div className="text-black p-1 px-3">
                                    <h3 className="font-semibold">Выходные на берегах Иссык-Куля: древности, красные скалы, киргизская Швейцария и мастер-класс</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default TopSlider;
