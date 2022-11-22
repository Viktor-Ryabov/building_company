import Styles from "../Header/Header.module.css";
import Logo from "../Logo/Logo.js";
import BurgerMenulogo from "../BurgerMenulogo/BurgerMenulogo";

const Header = () => {
    return (
        <header className={Styles.header}>
            <nav className={`${Styles.contentWidth}`}>
                <Logo />
                <ul className={`${Styles.headerMenu}`}>
                    <BurgerMenulogo />
                    <div className={`${Styles.buttonList}`}>
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
                    </div>

                    <p className={`${Styles.phone}`}>+7 (978) 901-2010</p>

                    <p className={`${Styles.mail}`}>iprva@ya.ru</p>
                </ul>
            </nav>
            <p className={`${Styles.utp}`}>
                Строительство домов в Крыму за 4 месяца без увеличения стоимости
                сметы.
            </p>
        </header>
    );
};

export default Header;
