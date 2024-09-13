import img from '../../assets/image.png'
import './TourCard.scss'
import StarRating from "./StarRating.jsx";
import Favorite from "./Favorite.jsx";
import axios from 'axios';
import {useEffect, useState} from "react";

const TourCard = () => {
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

    return (
        <div className={'container flex justify-between flex-wrap'}>
            {cars.map((car, index) => (
            <div className={'col-3 border-r-2 px-4 mb-16'}>
                <img src={img} alt=""/>
                <h5 className={'text-lg font-semibold mt-2'}>Этноприключение в Киргизии:</h5>
                <p className={'text-lg'}>прогулка верхом, музыкальное шоу и ночёвки в юрте Увидеть орлиную охоту,
                    погулять по берегу
                    Иссык-Куля и побывать в городе-призраке</p>
                <p className={'text-lg mt-2'}><span className={'font-bold text-3xl'}>$320</span> за одного</p>
                <div className={'flex items-center justify-between mt-3'}>
                    <Favorite/>
                    <StarRating/>
                    <span className={'text-sm font-semibold'}>5 дней</span>
                </div>
            </div>
            ))}
        </div>
    );
};

export default TourCard;