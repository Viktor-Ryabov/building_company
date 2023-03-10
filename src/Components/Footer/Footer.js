import Styles from "./Footer.module.css";
import Logo from "../Logo/Logo.js";
import ButtonTop from "../ButtonTop/ButtonTop.js";

const Footer = () => {
    return (
        <section className={Styles.footer}>
            <div className={Styles.requisites}>
                <p className={Styles.text}>
                    ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ
                </p>
                <p className={Styles.text}>РЯБОВ ВИКТОР АЛЕКСАНДРОВИЧ</p>
                <p className={Styles.text}>ИНН: 500117624290</p>
                <p className={Styles.text}>ОГРН: 317505300071852</p>
            </div>

            <ul className={Styles.contacts}>
                <li className={Styles.listElement}>
                    <ButtonTop text="+7(978)901-2010"/>
                </li>
                <li className={Styles.listElement}>
                    <ButtonTop text="iprva@yandex.ru" />
                </li>
                <li className={Styles.listElement}>
                    <ButtonTop text="@rya_lt"/>
                </li>
            </ul>
            <Logo />
        </section>
    );
};

export default Footer;
