import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale";
import format from "date-fns/format";
import { registerLocale } from "react-datepicker";
import './customStyles.css';

registerLocale("ru", ru);

const CustomCalendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [displayedMonth, setDisplayedMonth] = useState(new Date());
    const [isEditing, setIsEditing] = useState(false); // Контроль редактирования

    // Массив с названиями месяцев
    const months = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];

    const isSameMonth = (date) => {
        const selectedMonth = displayedMonth.getMonth();
        return date.getMonth() === selectedMonth;
    };

    const isToday = (date) => {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    };

    const isSelectedDay = (date) => {
        return (
            date.getDate() === startDate.getDate() &&
            date.getMonth() === startDate.getMonth() &&
            date.getFullYear() === startDate.getFullYear()
        );
    };

    const handleMonthChange = (event) => {
        const selectedMonthIndex = event.target.value;
        const newDate = new Date(displayedMonth.setMonth(selectedMonthIndex));
        setDisplayedMonth(newDate);
    };

    const customHeader = ({
                              date,
                              decreaseMonth,
                              increaseMonth,
                              prevMonthButtonDisabled,
                              nextMonthButtonDisabled,
                          }) => (
        <div className="flex justify-between items-center px-6 py-2">
            {/* Select для выбора месяца */}
            <select
                value={date.getMonth()}
                onChange={handleMonthChange}
                className="text-sm font-medium text-[#3A4533] bg-transparent border-none outline-none"
            >
                {months.map((month, index) => (
                    <option key={index} value={index}>
                        {month}
                    </option>
                ))}
            </select>

            <div className="flex gap-10">
                <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                >
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z" fill="#3A4533" />
                    </svg>
                </button>
                <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                >
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="#3A4533" />
                    </svg>
                </button>
            </div>
        </div>
    );

    const handleEditClick = () => {
        setIsEditing(true); // Включаем режим редактирования
    };

    const handleSaveClick = () => {
        setIsEditing(false); // Завершаем редактирование
    };

    const handleCancelClick = () => {
        setIsEditing(false); // Отменяем редактирование
    };

    return (
        <div className="flex flex-col items-center rounded-lg bg-[#f6ecdf]">
            <h3 className={'text-xs py-3 px-10 self-start'}>
                Выбрать дату
            </h3>
            <div className="flex justify-between items-center w-full px-10 py-2 border-b border-[#CAC4D0]">
                <p className="text-2xl text-[#3A4533]">
                    {(() => {
                        const day = format(startDate, "EEE", {locale: ru});
                        return day === "суб"
                            ? "Сб"
                            : day.charAt(0).toUpperCase() + day.charAt(1);
                    })()},&nbsp;
                    {format(startDate, "LLLL d", {locale: ru})
                        .charAt(0).toUpperCase() + format(startDate, "LLLL d", {locale: ru}).slice(1)}
                </p>


                {!isEditing && (
                    <button onClick={handleEditClick}>
                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 16H3.425L13.2 6.225L11.775 4.8L2 14.575V16ZM0 18V13.75L13.2 0.575C13.4 0.391667 13.6208 0.25 13.8625 0.15C14.1042 0.05 14.3583 0 14.625 0C14.8917 0 15.15 0.05 15.4 0.15C15.65 0.25 15.8667 0.4 16.05 0.6L17.425 2C17.625 2.18333 17.7708 2.4 17.8625 2.65C17.9542 2.9 18 3.15 18 3.4C18 3.66667 17.9542 3.92083 17.8625 4.1625C17.7708 4.40417 17.625 4.625 17.425 4.825L4.25 18H0ZM12.475 5.525L11.775 4.8L13.2 6.225L12.475 5.525Z"
                                fill="#3A4533"/>
                        </svg>
                    </button>
                )}
            </div>

            {/* Календарь - активен только при редактировании */}
            <DatePicker
                selected={startDate}
                onChange={(date) => isEditing && setStartDate(date)} // Только если редактируем
                locale="ru"
                inline
                renderCustomHeader={customHeader}
                dayClassName={(date) => {
                    if (isToday(date)) {
                        return "today-day";
                    }
                    if (isSelectedDay(date)) {
                        return "selected-day";
                    }
                    return isSameMonth(date)
                        ? "normal-day"
                        : "other-month-day";
                }}
                onMonthChange={(date) => setDisplayedMonth(date)}
                disabled={!isEditing} // Календарь заблокирован, если не редактируем
            />

            {/* Кнопки "Отмена" и "Готово" */}
            {isEditing && (
                <div className="flex gap-10 place-self-end pb-5 mr-10">
                    <button
                        className="text-[#f58634] font-medium"
                        onClick={handleCancelClick}
                    >
                        Отмена
                    </button>
                    <button
                        className="text-[#f58634] font-medium"
                        onClick={handleSaveClick}
                    >
                        Готово
                    </button>
                </div>
            )}
        </div>
    );
};

export default CustomCalendar;
