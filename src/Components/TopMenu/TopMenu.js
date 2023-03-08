import Styles from "./TopMenu.module.css";
import ButtonServices from "../ButtonServices/ButtonServices.js";

const TopMenu = () => {
    return (
        <ul className={Styles.menu}>
                <ButtonServices text='Строительство "под ключ"' />
                <ButtonServices text="Устройство фундаментов" />
                <ButtonServices text="Отделочные работы" />
                <ButtonServices text="Проектирование" />
        </ul>
    );
};

export default TopMenu;
