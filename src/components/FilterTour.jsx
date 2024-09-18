import { useState } from "react";

const FilterTour = () => {
    const [activeTour, setActiveTour] = useState("Все");
    const [activeRegion, setActiveRegion] = useState("Все");

    const tours = [
        "Все",
        "Групповые",
        "Индивидуальные",
        "Треккинг",
        "Обзорные",
        "Фототур",
        "5 дней",
        "3 дня",
        "7 дней",
        "Горячие источники",
    ];

    const regions = [
        "Все",
        "Чуй",
        "Ыссык-Куль",
        "Баткен",
        "Джалал-Абад",
        "Ош",
        "Талас",
        "Нарын",
    ];

    return (
        <div className="container flex flex-col items-center p-4 mt-10">
            <div className="w-5/6 mb-4">
                <h2 className="text-3xl font-bold text-orange-500 mb-4">Туры</h2>
                <div className="flex flex-wrap gap-3 mt-2 px-8 border-x-2 border-orange-600">
                    {tours.map((tour) => (
                        <button
                            key={tour}
                            onClick={() => setActiveTour(tour)}
                            className={`px-6 py-3 rounded-full text-sm ${
                                activeTour === tour
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-300 text-gray-700"
                            }`}
                        >
                            {tour}
                        </button>
                    ))}
                </div>
            </div>

            <div className={'w-5/6'}>
                <h2 className="text-3xl font-bold text-orange-500 mb-4">Регионы</h2>
                <div className="flex flex-wrap gap-3 mt-2 px-8 border-x-2 border-orange-600">
                    {regions.map((region) => (
                        <button
                            key={region}
                            onClick={() => setActiveRegion(region)}
                            className={`px-6 py-3 rounded-full text-sm ${
                                activeRegion === region
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-300 text-gray-700"
                            }`}
                        >
                            {region}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterTour;
