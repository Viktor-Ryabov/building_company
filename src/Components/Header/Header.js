import Styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.js";
import BurgerMenulogo from "../BurgerMenulogo/BurgerMenulogo";

const Header = () => {
    return (
        <header className={Styles.header}>
            <nav className={Styles.contentWidth}>
                <Link to="/"><Logo /></Link>
                <ul className={Styles.headerMenu}>
                    <BurgerMenulogo />
                    <div className={Styles.buttonList}>

                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <Link to="/aboutPage" className={Styles.navigationButton}>О нас</Link>
                        </li>

                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <Link to="/contactsPage" className={Styles.navigationButton}>Контакты</Link>
                        </li>

                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <Link to="/servicesPage" className={Styles.navigationButton}>Услуги</Link>
                        </li>

                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <Link to="/examplesPage" className={Styles.navigationButton}>Примеры работ</Link>
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
        </header>
    );
};

export default Header;
