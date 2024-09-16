// Cards.jsx
import React from 'react';
import cls from './Cards.module.scss';
import StarRating from "../../TourCard/StarRating.jsx";
import Logo from './../../../assets/Ellipse 2.png';

const Cards = ({ name, text, date }) => {
    return (
        <div className={cls.card}>
            <p className={cls.title}>
                {text}
                <div className={'pt-4'}>
                    <StarRating/>
                </div>
            </p>
            <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 30.3431V0H40L6.82843 33.1716C4.30857 35.6914 0 33.9068 0 30.3431Z" fill="#F6ECDF"/>
            </svg>
            <div className={'flex gap-6 mt-240'}>
                <img src={Logo} alt=""/>
                <div className={cls.user}>
                    <h3>
                        {name}
                    </h3>
                    <p>
                        {date}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
