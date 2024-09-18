import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());

    const CustomInput = ({ value, onClick }) => (
        <button
            className="text-[1.5rem] font-medium text-gray-900 bg-transparent border-none cursor-pointer focus:outline-none"
            onClick={onClick}
        >
            {format(new Date(value), 'EEEE, LLLL d', { locale: ru })}
        </button>
    );

    return (
        <div className="w-full max-w-sm mx-auto p-5 bg-[#f9f3e7] rounded-2xl shadow-lg">
            <h2 className="text-[0.875rem] font-normal text-gray-700 mb-3">Выбрать дату</h2>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                locale={ru}
                customInput={<CustomInput />}
                renderCustomHeader={({
                                         date,
                                         decreaseMonth,
                                         increaseMonth,
                                         prevMonthButtonDisabled,
                                         nextMonthButtonDisabled
                                     }) => (
                    <div className="flex justify-between items-center mb-3 text-gray-700">
                        <button
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                            className={`p-2 text-gray-500 rounded-full ${prevMonthButtonDisabled ? 'opacity-50' : 'hover:bg-gray-200'}`}
                        >
                            {"<"}
                        </button>
                        <span className="text-[1rem] font-semibold">
              {format(date, 'LLLL yyyy', { locale: ru })}
            </span>
                        <button
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}
                            className={`p-2 text-gray-500 rounded-full ${nextMonthButtonDisabled ? 'opacity-50' : 'hover:bg-gray-200'}`}
                        >
                            {">"}
                        </button>
                    </div>
                )}
                inline
                calendarClassName="bg-[#f9f3e7] p-4 rounded-lg shadow-md"
                dayClassName={(date) =>
                    format(date, 'd') === format(startDate, 'd')
                        ? 'text-white bg-orange-500 rounded-full p-2'
                        : 'text-gray-900 hover:bg-orange-100 rounded-full p-2'
                }
                monthClassName="bg-transparent"
                weekDayClassName={() => 'text-gray-500 text-[0.75rem]'}
            />
            <div className="flex justify-between mt-5">
                <button className="text-orange-500 text-[1rem] font-medium hover:underline focus:outline-none">
                    Отмена
                </button>
                <button className="text-orange-500 text-[1rem] font-medium hover:underline focus:outline-none">
                    Готово
                </button>
            </div>
        </div>
    );
};

export default CustomDatePicker;
