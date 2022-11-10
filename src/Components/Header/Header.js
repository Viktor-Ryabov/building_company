import Styles from "../Header/Header.module.css";
import Logo from "../../img/ryabov_new_white.png";

const Header = () => {
    return (
        <header className={Styles.header}>
            <nav>
                <section className={`${Styles.contentWidth}`}>
                    <ul className={`${Styles.buttonList}`}>
                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <p className={`${Styles.navigationText}`}>О нас</p>
                        </li>

                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <p className={`${Styles.navigationText}`}>
                                Контакты
                            </p>
                        </li>
                    </ul>

                    <div className={Styles.logo}>
                        <img src={Logo} className={Styles.logo} />
                    </div>

                    <ul className={`${Styles.buttonList}`}>
                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <p className={`${Styles.navigationText}`}>Услуги</p>
                        </li>

                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <p className={`${Styles.navigationText}`}>
                                Примеры работ
                            </p>
                        </li>

                        <li
                            className={`${Styles.navigationButton}`}
                        >
                            <a
                                href="tel:+79789012010"
                                className={`${Styles.navigationText}`}
                            >
                                +7(978) 901-2010
                            </a>
                        </li>
                    </ul>
                </section>
            </nav>
        </header>
    );
};

export default Header;
