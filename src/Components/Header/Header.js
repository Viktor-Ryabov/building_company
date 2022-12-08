import Styles from "../Header/Header.module.css";
import Logo from "../Logo/Logo.js";
import BurgerMenulogo from "../BurgerMenulogo/BurgerMenulogo";
import CaptureForm from "../CaptureForm/CaptureForm";

const Header = () => {
    return (
        <header className={Styles.header}>
            <nav className={Styles.contentWidth}>
                <Logo />
                <ul className={Styles.headerMenu}>
                    <BurgerMenulogo />
                    <div className={Styles.buttonList}>
                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <p className={`${Styles.navigationText}`}>
                                <a className={Styles.link} href="#">
                                    О нас
                                </a>
                            </p>
                        </li>

                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <p className={`${Styles.navigationText}`}>
                                <a className={Styles.link} href="#">
                                    Контакты
                                </a>
                            </p>
                        </li>

                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <p className={`${Styles.navigationText}`}>
                                <a className={Styles.link} href="#">
                                    Услуги
                                </a>
                            </p>
                        </li>

                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <p className={`${Styles.navigationText}`}>
                                <a className={Styles.link} href="#">
                                    Примеры работ
                                </a>
                            </p>
                        </li>
                    </div>

                    <p className={Styles.phone}>
                        <a className={Styles.link} href="tel:+79998887766">
                            +7 (978) 901-2010
                        </a>
                    </p>

                    <p className={Styles.mail}>
                        <a className={Styles.link} href="mailto:iprva@ya.ru">
                            iprva@ya.ru
                        </a>
                    </p>
                </ul>
            </nav>

            <section className={Styles.capture}>
                <p className={Styles.utp}>
                    Строительство домов в Крыму за 4 месяца без увеличения
                    стоимости сметы.
                </p>
                <CaptureForm />
            </section>
        </header>
    );
};

export default Header;
