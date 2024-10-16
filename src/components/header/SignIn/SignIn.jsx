import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from "./signIn.module.scss";
import FirstPassword from "../PasswordInput/FirstPassword.jsx";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Для навигации между страницами

    const validate = () => {
        const validationErrors = {};

        if (!email) {
            validationErrors.email = 'Поле E-mail не может быть пустым';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Некорректный формат E-mail';
        }

        if (!password) {
            validationErrors.password = 'Поле Пароль не может быть пустым';
        } else if (password.length < 6) {
            validationErrors.password = 'Пароль должен быть не менее 6 символов';
        }

        return validationErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) {
            navigate('/profile'); // Перенаправление на страницу профиля
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={cls.email}>
                <input
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            <div className={cls.pass}>
                <FirstPassword
                    placeholder ={"Пароль"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            </div>

            <div className="mt-5 text-blue-500 text-xs">
                Забыли пароль?
            </div>
            <button type="submit" className={cls.register}>
                Войти
            </button>
        </form>
    );
};

export default SignIn;
