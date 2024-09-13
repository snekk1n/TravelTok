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
        axios.get(`https://ash2521.pythonanywhere.com/index/`)
            .then(response => {
                setCars(response.data.cars);
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
                &#8250;
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="arrows prev" onClick={onClick}>
                &#8249;
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
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className={'flex flex-col items-center pt-10'}>
                <h3 className={'text-3xl font-extrabold'}>Топ лучших туров</h3>
                <p className={'text-lg pt-2'}>которые подарят вам лучшие воспоминания</p>
            </div>

            <div className="slider-container pt-8">
                <Slider {...settings}>
                    {cars.map((car, index) => (
                        <div className="relative h-96">
                            <img className="w-full h-full object-cover" src={img} alt="Image"/>
                            <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 mx-3 rounded-b-xl">
                                <div className="text-white p-4">
                                    <h3 className="text-lg font-bold">Выходные на берегах Иссык-Куля: древности, красные скалы, киргизская Швейцария и мастер-класс</h3>
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
