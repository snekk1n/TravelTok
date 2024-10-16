import { useState } from 'react';
import eyeIcon from '../../../assets/visibility.svg';
import eyeOffIcon from '../../../assets/visibility_off.svg';
import cls from './password.module.scss'

const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex items-center">
            <div className={cls.pass}>
                <input
                    {...props}
                    placeholder="Подтвердите пароль"
                    type={showPassword ? "text" : "password"}
                />
                <button type="button" onClick={togglePasswordVisibility} className="ml-2">
                    <img
                        src={showPassword ? eyeOffIcon : eyeIcon}
                        alt={showPassword ? "Скрыть" : "Показать"}
                        style={{width: 22, height: 15}}
                    />
                </button>
            </div>
        </div>
    );
};

export default PasswordInput;
