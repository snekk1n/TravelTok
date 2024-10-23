import SideBar from "../../SideBar/SideBar.jsx";
import Header from "../../header/Header.jsx";
import DemirImg from "./../../../assets/demir.png";
import PaypalImg from "./../../../assets/paypal.png";

function App() {
    return (
        <>
            <Header />
            <div className="flex h-screen bg-gray-50">
                <aside className="w-1/4 bg-green-100 p-6">
                    <h2 className="font-bold text-orange-500 mb-6">Личные данные</h2>
                    <SideBar />
                </aside>
                <div className="min-h-screen bg-gray-100 p-6">
                    <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-orange-600 mb-6">Разместить тур</h2>
                        <div className="grid grid-cols-2 gap-8">
                            {/* Left Side */}
                            <div>
                                <h3 className="text-lg font-semibold text-orange-600 mb-4">Информация о турах</h3>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Заголовок тура</label>
                                    <textarea className="w-full border rounded-lg p-2" placeholder="Заголовок тура..." />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Описание тура</label>
                                    <textarea className="w-full border rounded-lg p-2" placeholder="Описание тура..." />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Включено в тур</label>
                                    <textarea className="w-full border rounded-lg p-2" placeholder="В тур включено..." />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Не включено в тур</label>
                                    <textarea className="w-full border rounded-lg p-2" placeholder="В тур не включено..." />
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold text-gray-700">Способы оплаты</h3>
                                    <div className="flex space-x-4">
                                        <div className="mt-5 flex gap-4">
                                            <button>
                                                <img src={DemirImg} alt="DemirBank" className="h-8" />
                                            </button>
                                            <button>
                                                <img src={PaypalImg} alt="PayPal" className="h-8" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="">
                                <h2 className="text-orange-500 text-lg font-bold mb-4">Дополнительная информация</h2>

                                {/* Стоимость */}
                                <div className="flex justify-between mb-4">
                                    <span className="text-orange-500">Стоимость:</span>
                                    <div className="flex items-center">
                                        <button className="text-xl">−</button>
                                        <span className="mx-2">$0</span>
                                        <button className="text-xl">+</button>
                                    </div>
                                </div>

                                {/* Скидка */}
                                <div className="flex justify-between mb-4">
                                    <span className="text-orange-500">Скидка:</span>
                                    <div className="flex items-center">
                                        <button className="text-xl">−</button>
                                        <span className="mx-2">Без</span>
                                        <button className="text-xl">+</button>
                                    </div>
                                </div>

                                {/* Длительность */}
                                <div className="flex justify-between mb-4">
                                    <span className="text-orange-500">Длительность:</span>
                                    <div className="flex items-center">
                                        <button className="text-xl">−</button>
                                        <span className="mx-2">0 дня</span>
                                        <button className="text-xl">+</button>
                                    </div>
                                </div>

                                {/* Дети */}
                                <div className="flex justify-between mb-4">
                                    <span className="text-orange-500">Дети:</span>
                                    <div className="flex space-x-4">
                                        <span>С детьми</span>
                                        <span>Без детей</span>
                                    </div>
                                </div>

                                {/* Сложность */}
                                <div className="flex justify-between mb-4">
                                    <span className="text-orange-500">Сложность:</span>
                                    <div className="flex space-x-4">
                                        <span>Сложная</span>
                                        <span>Средняя</span>
                                        <span>Легкая</span>
                                    </div>
                                </div>

                                {/* Сегмент */}
                                <div>
                                    <h3 className="text-orange-500 text-lg font-bold mb-2">Сегмент</h3>
                                    <div className="flex space-x-4">
                                        <button className="bg-orange-500 text-white py-2 px-4 rounded-full">Групповой
                                        </button>
                                        <button
                                            className="bg-gray-400 text-white py-2 px-4 rounded-full">Индивидуальный
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <button className="bg-gray-300 text-black py-2 px-4 rounded-full">
                                            Групповой / Индивидуальный
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className=" text-gray-700 ">Фото / Видео</label>
                                    <div
                                        className="border-dashed border-2 border-gray-300 p-4 rounded-lg flex items-center justify-center">
                                        <button className="text-gray-500">+</button>
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-4 mt-16">
                                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Отмена</button>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Разместить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default App;
