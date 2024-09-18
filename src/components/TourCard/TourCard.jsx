import { Link } from 'react-router-dom';
import img from '../../assets/image.png';
import './TourCard.scss';
import StarRating from "./StarRating.jsx";
import Favorite from "./Favorite.jsx";
import axios from 'axios';
import { useEffect, useState } from "react";

const TourCard = () => {
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

    return (
        <div className={'container flex justify-between flex-wrap'}>
            {cars.map((car, index) => (
                <div className={'col-3 border-r-2 px-4 mb-16 flex flex-col justify-between'}>
                <Link key={car.id} to={`/tour/${car.id}`}>
                    <img className={'rounded-xl'} src={img} alt=""/>
                </Link>
                    <h5 className={'text-lg font-semibold mt-2'}>Этноприключение в Киргизии:</h5>
                    <p className={'text-lg'}>прогулка верхом, музыкальное шоу и ночёвки в юрте Увидеть орлиную охоту,
                        погулять по берегу
                        Иссык-Куля и побывать в городе-призраке</p>
                    <p className={'text-sm mt-2'}><span className={'font-bold text-3xl'}>$320</span> групповой</p>
                    <div className={'flex items-end justify-between mt-3'}>
                        <Favorite/>
                        <div className={'flex items-end gap-2'}><StarRating/><span className={'text-sm font-semibold'}>4/5</span></div>
                        <span className={'text-sm font-semibold'}>5 дней</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TourCard;
