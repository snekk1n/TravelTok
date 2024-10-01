import SideBar from "../SideBar/SideBar.jsx";
import Header from "../header/Header.jsx";

const ProfileForm = () => {
    return (
        <>
        <Header/>
        <div className="flex h-screen bg-gray-50">

            <aside className="w-1/4 bg-green-100 p-6">

                <h2 className="font-bold text-orange-500 mb-6">Личные данные</h2>
               <SideBar/>
            </aside>

            <div className="flex-grow p-10">
                <h2 className="text-2xl font-bold text-orange-500 mb-6">Личные данные</h2>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="flex flex-col items-center mb-6">
                    </div>

                    <form className=" flex flex-col space-y-4">
                        <div className="w-24 h-24 rounded-full bg-gray-200 flex justify-center items-center">
                            <span className="text-gray-500 text-2xl">👤</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Имя"
                            className="w-96 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="text"
                            placeholder="Фамилия"
                            className="w-96 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="tel"
                            placeholder="Номер телефона"
                            className="w-96 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="w-96 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="date"
                            placeholder="Дата рождения"
                            className="w-96 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <textarea
                            placeholder="Расскажите о себе..."
                            className="w-96 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            rows="4"
                        ></textarea>
                    </form>

                    <div className="flex justify-between mt-6">
                        <button
                            className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600">Сохранить
                        </button>
                        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600">Отмена</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ProfileForm;
