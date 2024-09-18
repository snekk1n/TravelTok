import cls from "./footer.module.scss"
import Facebook from './../../assets/facebook.png'
import Linkedin from './../../assets/linkedin.png'
import Whatsapp from './../../assets/whatsapp.png'
import VK from './../../assets/vk.png'
import TG from './../../assets/tg.png'
import Twiiter from './../../assets/twitter.png'

const Footer = () => {
    return (
        <div className={cls.foot}>
            <div className={cls.container}>
                <div className={"flex gap-14 justify-center"}>
                    <div className={cls.logo}>
                        <a href="#" className={'text-3xl font-bold'}>
                            TravelTok
                        </a>
                        <div className={"pt-6"}>
                            <p>
                                    Разработка программного
                                    обеспечения для вашего бизнеса. Внедрение и полное сопровождение, техническая
                                    поддержка.
                                </p>
                            </div>
                            <div className={"mt-6"}>
                                <p>
                                    © Syntlex Kyrgyzstan, 2024
                                </p>
                            </div>
                        </div>
                    <div className={cls.logo}>
                        <div className={cls.col}>
                            <h2 className={"font-bold text-xl"}>
                                Контакты
                            </h2>
                            <p className={"pt-6"}>
                                Кыргызстан, <span>Бишкек</span>
                            </p>


                            <p>
                                Phone: <span>+996 (707) 18 88 70</span>
                            </p>
                            <p>
                                Email: <span> info@syntlex.kg</span>
                            </p>
                        </div>
                    </div>
                    <div className={cls.logo}>
                        <h2 className={"font-bold text-xl"}>
                            Наши сайты
                        </h2>
                      <div className={'flex gap-2 pt-6'}>
                          <img src={Facebook} alt=""/>
                          <img src={Linkedin} alt=""/>
                          <img src={Whatsapp} alt=""/>
                          <img src={VK} alt=""/>
                          <img src={TG} alt=""/>
                          <img src={Twiiter} alt=""/>
                      </div>
                    </div>
                    <div className={cls.logo}>
                        <div>
                            <h2 className={"font-bold text-xl"}>
                                Наши услуги
                            </h2>
                            <p className={"pt-6"}>
                                Групповые туры
                            </p>
                            <p>
                                Индивидуальные туры
                            </p>
                            <p>
                                Авторские туры
                            </p>
                            <p>
                                Разместить свой тур
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;