import { useParams } from 'react-router-dom';
import img from '../../assets/image.png';
import Header from "../Header.jsx";
import SetRatingStar from "./SetRatingStar.jsx";
import CustomDatePicker from "./CustomDatePicker.jsx";
import Favorite from "../TourCard/Favorite.jsx";
import Slider from "react-slick";
import './TourDetail.scss'

const TourDetail = () => {
    const { id } = useParams();

    const tour = {
        title: "Этноприключение в Киргизии:",
        text: "Увидеть орлиную охоту, погулять по берегу Иссык-Куля и побывать в городе-призраке",
        description: "Этноприключение в Киргизии — это уникальный опыт погружения в культуру кочевников, традиции киргизского народа и природные красоты страны. Это путешествие объединяет в себе элементы активного отдыха, культурных шоу и знакомства с древними ремеслами, сопровождаемое яркими впечатлениями.",
        price: "$100",
        duration: "3 дня",
        groupSize: "От 2 до 10 человек",
        kids: "Без детей",
        difficulty: "Средняя",
        images: [img, img, img, img, img, img, img, img],
        date: "2024-09-17",
    };

    if (!tour) return <div>Loading...</div>;
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="arrowse next" onClick={onClick}>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="#091700"/>
                </svg>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const {onClick} = props;
        return (
            <div className="arrowse prev" onClick={onClick}>
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
        slidesToShow: 4.7,
        centerPadding: '0px',
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };
    return (
        <div>
            <Header svgColor="#000"/>
            <div className="border-t px-20 py-6">
                <h2 className={'text-3xl font-bold mb-5'}>Подробнее о туре</h2>
                <div className="flex justify-between">
                    <div className={'w-3/5'}>
                        <img src={tour.images[0]} alt="tour" className="rounded-lg w-full object-cover"/>
                        <h3 className="text-orange-500 text-3xl font-bold mt-4">{tour.title}</h3>
                        <p className="text-lg font-semibold">{tour.text}</p>
                        <p className="text-gray-600 my-4">{tour.description}</p>
                        <div className={'flex justify-between'}>
                            <SetRatingStar/>
                            <Favorite/>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col gap-10">
                        <div className="border-2 p-6 rounded-lg h-fit">
                        <h3 className="text-orange-500 text-2xl font-bold mb-6">Дополнительная информация</h3>
                        <ul className={'flex flex-col gap-4 mb-16'}>
                            <li className={'flex justify-between'}>Стоимость тура: <strong>{tour.price}</strong></li>
                            <li className={'flex justify-between'}>Длительность: <strong>{tour.duration}</strong></li>
                            <li className={'flex justify-between'}>Размер группы: <strong>{tour.groupSize}</strong></li>
                            <li className={'flex justify-between'}>Дети: <strong>{tour.kids}</strong></li>
                            <li className={'flex justify-between'}>Сложность: <strong>{tour.difficulty}</strong></li>
                        </ul>
                        <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-md">
                            Забронировать
                        </button>
                        </div>
                        <CustomDatePicker/>
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                {tour.images.map((img) => (
                    <img className="w-full h-full object-cover" src={img} alt="Image"/>
                ))}
            </Slider>
        </div>
    );
};

export default TourDetail;
