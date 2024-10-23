import { Link } from 'react-router-dom';

const SideBar = ({ textColor = '#838A7F'}) => {
    return (
        <div>
            <nav>
                <ul>
                    <Link to={'/profile'} className="mb-6 flex items-center gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4C11.45 4 10.9792 3.80417 10.5875 3.4125C10.1958 3.02083 10 2.55 10 2C10 1.45 10.1958 0.979167 10.5875 0.5875C10.9792 0.195833 11.45 0 12 0C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2C14 2.55 13.8042 3.02083 13.4125 3.4125C13.0208 3.80417 12.55 4 12 4ZM9 19V7C8 6.91667 6.98333 6.79167 5.95 6.625C4.91667 6.45833 3.93333 6.25 3 6L3.5 4C4.8 4.35 6.18333 4.60417 7.65 4.7625C9.11667 4.92083 10.5667 5 12 5C13.4333 5 14.8833 4.92083 16.35 4.7625C17.8167 4.60417 19.2 4.35 20.5 4L21 6C20.0667 6.25 19.0833 6.45833 18.05 6.625C17.0167 6.79167 16 6.91667 15 7V19H13V13H11V19H9ZM8 24C7.71667 24 7.47917 23.9042 7.2875 23.7125C7.09583 23.5208 7 23.2833 7 23C7 22.7167 7.09583 22.4792 7.2875 22.2875C7.47917 22.0958 7.71667 22 8 22C8.28333 22 8.52083 22.0958 8.7125 22.2875C8.90417 22.4792 9 22.7167 9 23C9 23.2833 8.90417 23.5208 8.7125 23.7125C8.52083 23.9042 8.28333 24 8 24ZM12 24C11.7167 24 11.4792 23.9042 11.2875 23.7125C11.0958 23.5208 11 23.2833 11 23C11 22.7167 11.0958 22.4792 11.2875 22.2875C11.4792 22.0958 11.7167 22 12 22C12.2833 22 12.5208 22.0958 12.7125 22.2875C12.9042 22.4792 13 22.7167 13 23C13 23.2833 12.9042 23.5208 12.7125 23.7125C12.5208 23.9042 12.2833 24 12 24ZM16 24C15.7167 24 15.4792 23.9042 15.2875 23.7125C15.0958 23.5208 15 23.2833 15 23C15 22.7167 15.0958 22.4792 15.2875 22.2875C15.4792 22.0958 15.7167 22 16 22C16.2833 22 16.5208 22.0958 16.7125 22.2875C16.9042 22.4792 17 22.7167 17 23C17 23.2833 16.9042 23.5208 16.7125 23.7125C16.5208 23.9042 16.2833 24 16 24Z"
                                  fill={textColor}/>
                        </svg>
                        <p style={{ color: textColor }} className={`text-lg`}>Личные данные</p>
                    </Link>
                    <Link to={'/profile/AddTour'} className="mb-6 flex items-center gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.85 17.1C6.7 16.45 7.65 15.9375 8.7 15.5625C9.75 15.1875 10.85 15 12 15C13.15 15 14.25 15.1875 15.3 15.5625C16.35 15.9375 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1875 15.6417 19.5125 14.775C19.8375 13.9083 20 12.9833 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 12.9833 4.1625 13.9083 4.4875 14.775C4.8125 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.8833 20 13.7167 19.8708 14.5 19.6125C15.2833 19.3542 16 18.9833 16.65 18.5C16 18.0167 15.2833 17.6458 14.5 17.3875C13.7167 17.1292 12.8833 17 12 17C11.1167 17 10.2833 17.1292 9.5 17.3875C8.71667 17.6458 8 18.0167 7.35 18.5C8 18.9833 8.71667 19.3542 9.5 19.6125C10.2833 19.8708 11.1167 20 12 20ZM12 11C12.4333 11 12.7917 10.8583 13.075 10.575C13.3583 10.2917 13.5 9.93333 13.5 9.5C13.5 9.06667 13.3583 8.70833 13.075 8.425C12.7917 8.14167 12.4333 8 12 8C11.5667 8 11.2083 8.14167 10.925 8.425C10.6417 8.70833 10.5 9.06667 10.5 9.5C10.5 9.93333 10.6417 10.2917 10.925 10.575C11.2083 10.8583 11.5667 11 12 11Z"
                                  fill='#838A7F'/>
                        </svg>
                        <p className={`text-[#838A7F] text-lg`}>Мой кабинет</p>
                    </Link>
                    <li className="mb-6 flex items-center gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.0001 23L10.0751 7.45C10.1751 6.96667 10.4001 6.60417 10.7501 6.3625C11.1001 6.12083 11.4668 6 11.8501 6C12.2334 6 12.5876 6.08333 12.9126 6.25C13.2376 6.41667 13.5001 6.66667 13.7001 7L14.7001 8.6C15.0001 9.08333 15.3876 9.52083 15.8626 9.9125C16.3376 10.3042 16.8834 10.5917 17.5001 10.775V9H19.0001V23H17.5001V12.85C16.7001 12.6667 15.9584 12.375 15.2751 11.975C14.5918 11.575 14.0001 11.0833 13.5001 10.5L12.9001 13.5L15.0001 15.5V23H13.0001V17L10.9001 15L9.1001 23H7.0001ZM7.4251 13.125L5.3001 12.725C5.03343 12.675 4.8251 12.5375 4.6751 12.3125C4.5251 12.0875 4.4751 11.8333 4.5251 11.55L5.2751 7.625C5.3751 7.09167 5.65843 6.67083 6.1251 6.3625C6.59176 6.05417 7.09176 5.95 7.6251 6.05L8.7751 6.275L7.4251 13.125ZM13.5001 5.5C12.9501 5.5 12.4793 5.30417 12.0876 4.9125C11.6959 4.52083 11.5001 4.05 11.5001 3.5C11.5001 2.95 11.6959 2.47917 12.0876 2.0875C12.4793 1.69583 12.9501 1.5 13.5001 1.5C14.0501 1.5 14.5209 1.69583 14.9126 2.0875C15.3043 2.47917 15.5001 2.95 15.5001 3.5C15.5001 4.05 15.3043 4.52083 14.9126 4.9125C14.5209 5.30417 14.0501 5.5 13.5001 5.5Z"
                                  fill='#838A7F'/>
                        </svg>
                        <p className={`text-[#838A7F] text-lg`}>Мои Туры</p></li>
                    <li className="mb-6 flex items-center gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 21L10.55 19.7C8.86667 18.1833 7.475 16.875 6.375 15.775C5.275 14.675 4.4 13.6875 3.75 12.8125C3.1 11.9375 2.64583 11.1333 2.3875 10.4C2.12917 9.66666 2 8.91666 2 8.14999C2 6.58333 2.525 5.27499 3.575 4.22499C4.625 3.17499 5.93333 2.64999 7.5 2.64999C8.36667 2.64999 9.19167 2.83333 9.975 3.19999C10.7583 3.56666 11.4333 4.08333 12 4.74999C12.5667 4.08333 13.2417 3.56666 14.025 3.19999C14.8083 2.83333 15.6333 2.64999 16.5 2.64999C18.0667 2.64999 19.375 3.17499 20.425 4.22499C21.475 5.27499 22 6.58333 22 8.14999C22 8.91666 21.8708 9.66666 21.6125 10.4C21.3542 11.1333 20.9 11.9375 20.25 12.8125C19.6 13.6875 18.725 14.675 17.625 15.775C16.525 16.875 15.1333 18.1833 13.45 19.7L12 21ZM12 18.3C13.6 16.8667 14.9167 15.6375 15.95 14.6125C16.9833 13.5875 17.8 12.6958 18.4 11.9375C19 11.1792 19.4167 10.5042 19.65 9.91249C19.8833 9.32083 20 8.73333 20 8.14999C20 7.14999 19.6667 6.31666 19 5.64999C18.3333 4.98333 17.5 4.64999 16.5 4.64999C15.7167 4.64999 14.9917 4.87083 14.325 5.31249C13.6583 5.75416 13.2 6.31666 12.95 6.99999H11.05C10.8 6.31666 10.3417 5.75416 9.675 5.31249C9.00833 4.87083 8.28333 4.64999 7.5 4.64999C6.5 4.64999 5.66667 4.98333 5 5.64999C4.33333 6.31666 4 7.14999 4 8.14999C4 8.73333 4.11667 9.32083 4.35 9.91249C4.58333 10.5042 5 11.1792 5.6 11.9375C6.2 12.6958 7.01667 13.5875 8.05 14.6125C9.08333 15.6375 10.4 16.8667 12 18.3Z"
                                fill='#838A7F'/>
                        </svg>
                        <p className={`text-[#838A7F] text-lg`}>Избранные</p></li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;