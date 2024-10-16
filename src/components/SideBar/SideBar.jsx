import Header from "../header/Header.jsx";

const SideBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li className="mb-4"><a href="#" className="text-gray-700">Мой кабинет</a></li>
                    <li className="mb-4"><a href="#" className="text-gray-700">Мои туры</a></li>
                    <li className="mb-4"><a href="#" className="text-gray-700">Оплата туров</a></li>
                    <li className="mb-4"><a href="#" className="text-gray-700">Избранное</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;