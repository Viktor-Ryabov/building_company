import Styles from "./Header.module.css";
import Logo from "../Logo/Logo.js";
import BurgerMenulogo from "../BurgerMenulogo/BurgerMenulogo";
import CaptureForm from "../CaptureForm/CaptureForm";
import TopMenu from "../TopMenu/TopMenu";
import ButtonTop from "../ButtonTop/ButtonTop";
import { UtpAndForm } from "../UtpAndForm/UtpAndForm.js";

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
                            <ButtonTop  text="О нас" />
                        </li>

                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <ButtonTop text="Контакты" />
                        </li>

                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <ButtonTop text="Услуги" />
                        </li>

                        <li
                            className={`${Styles.navigationButton} ${Styles.profile}`}
                        >
                            <ButtonTop text="Примеры работ" />
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
            <UtpAndForm/>
            <TopMenu />
        </header>
    );
};

export default Header;
