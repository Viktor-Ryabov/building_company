import Styles from "./Footer.module.css";
import Logo from "../Logo/Logo.js";
import ActionButton from "../ActionButton/ActionButton.js";

const Footer = () => {
    return (
        <section className={Styles.footer}>
            <div className={Styles.requisites}>
                <text className={Styles.text}>
                    ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ РЯБОВ ВИКТОР АЛЕКСАНДРОВИЧ
                </text>
                <text className={Styles.text}>ИНН: 500117624290</text>
                <text className={Styles.text}>ОГРН: 317505300071852</text>
            </div>

            <ul className={Styles.contacts}>
                <li className={Styles.listElement}>
                    <ActionButton> +7(978)901-2010 </ActionButton>
                </li>
                <li className={Styles.listElement}>
                    <ActionButton> iprva@yandex.ru </ActionButton>
                </li>
                <li className={Styles.listElement}>
                    <ActionButton> @rya_lt </ActionButton>
                </li>
            </ul>
            <Logo />
        </section>
    );
};

export default Footer;
