import Styles from "../TopMenu/TopMenu.module.css";

const TopMenu = () => {
    return (
        <ul className={Styles.menu}>
            <button className={Styles.listElement}>
                <li>Строительство "под ключ"</li>
            </button>
            <button className={Styles.listElement}>
                <li>Устройство фундаментов</li>
            </button>
            <button className={Styles.listElement}>
                <li>Отделочные работы</li>
            </button>
            <button className={Styles.listElement}>
                <li>Проектирование</li>
            </button>
        </ul>
    );
};

export default TopMenu;
