import Styles from "./Footer.module.css";
import Logo from "../Logo/Logo.js";
import ButtonTop from "../ButtonTop/ButtonTop.js";

const Footer = () => {
    return (
        <section className={Styles.footer}>
            <div className={Styles.requisites}>
                <text className={Styles.text}>
                    ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ
                </text>
                <text className={Styles.text}>РЯБОВ ВИКТОР АЛЕКСАНДРОВИЧ</text>
                <text className={Styles.text}>ИНН: 500117624290</text>
                <text className={Styles.text}>ОГРН: 317505300071852</text>
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
