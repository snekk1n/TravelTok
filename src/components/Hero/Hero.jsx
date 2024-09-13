import Header from "../Header.jsx";
import "./Hero.scss"

const Hero = () => {
    return (
        <div className={'main text-white'}>
            <Header/>
            <div className={"flex flex-col items-center gap-8 my-48"}>
                <div className={'flex flex-col gap-5 items-center'}>
                    <h1 className={'tracking-wide text-5xl font-semibold'}>Авторские туры по всему Кыргызстану</h1>
                    <p className={'w-2/5 text-center'}>Бронируйте туры и откройте для себя Кыргызстан с новых сторон!
                        Уникальные маршруты, погружение в культуру, захватывающие приключения в горах и степях по всем
                        регионам.</p>
                </div>
                <div className={'buttons flex gap-5'}>
                    <button className={'py-3 rounded-xl'}>Выбрать тур</button>
                    <button className={'py-3 rounded-xl '}>Разместить тур</button>
                </div>
                <input className={'bg-transparent py-3 rounded-xl border px-12 text-lg'} type="text"
                       placeholder={'Куда собираетесь?..'}/>
            </div>
        </div>
    );
};

export default Hero;