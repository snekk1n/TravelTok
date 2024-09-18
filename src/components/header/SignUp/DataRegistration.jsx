import React, { useCallback, useState } from 'react';
import cls from "../modal.module.scss";
import PasswordInput from "../PasswordInput/PasswordInput.jsx";
import FirstPassword from "../PasswordInput/FirstPassword.jsx";

const DataRegistration = () => {
    const [valueInp, setValueInp] = useState({
        email: "",
        pass: "",
        pass2: ""
    });
    const [errors, setErrors] = useState({
        passwordsDontMatch: false,
        passLength: false
    });

    const onChange = useCallback((e) => {
        const { id, value } = e.target;
        setValueInp((prev) => ({
            ...prev,
            [id]: value
        }));
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        let hasErrors = false;

        // Проверка длины пароля
        if (valueInp.pass.length < 6 || valueInp.pass2.length < 6) {
            setErrors((prev) => ({
                ...prev,
                passLength: true
            }));
            hasErrors = true;
        } else {
            setErrors((prev) => ({
                ...prev,
                passLength: false
            }));
        }

        // Проверка совпадения паролей
        if (valueInp.pass !== valueInp.pass2) {
            setErrors((prev) => ({
                ...prev,
                passwordsDontMatch: true
            }));
            hasErrors = true;
        } else {
            setErrors((prev) => ({
                ...prev,
                passwordsDontMatch: false
            }));
        }

        // Если ошибок нет, можно выполнять действия по регистрации
        if (!hasErrors) {
            console.log('Регистрация прошла успешно', { email: valueInp.email, password: valueInp.pass });
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className={cls.email}>
                <input
                    id="email"
                    placeholder="E-mail"
                    type="email"
                    value={valueInp.email}
                    onChange={onChange}
                />
            </div>
            <div className={cls.pass}>
                <FirstPassword
                    id="pass"
                    value={valueInp.pass}
                    onChange={onChange}
                    minLength={6}
                />
            </div>
            <div className={cls.pass}>
                <PasswordInput
                    id="pass2"
                    value={valueInp.pass2}
                    onChange={onChange}
                    minLength={6}
                />
                {errors.passwordsDontMatch && <div className="text-red-500 text-xs">Пароли не совпадают</div>}
                {errors.passLength && <div className="text-red-500 text-xs">Пароли не должны быть короче 6 символов</div>}
            </div>
            <div className="mt-5 text-blue-500 text-xs">
                Забыли пароль?
            </div>
            <button type="submit" className={cls.register}>
                Зарегистрироваться
            </button>
        </form>
    );
};

export default DataRegistration;
