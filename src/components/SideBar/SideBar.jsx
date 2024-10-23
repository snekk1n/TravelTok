
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li className="mb-4">
                        <Link to="AddTour" className="text-gray-700">Мой кабинет</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/my-tours" className="text-gray-700">Мои туры</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/payments" className="text-gray-700">Оплата туров</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/favorites" className="text-gray-700">Избранное</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;
