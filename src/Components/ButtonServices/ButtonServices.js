import Styles from "./ButtonServices.module.css";

const ButtonServices = (props) => {
    return (
        <li className={Styles.list}>
            <button className={Styles.button}>{props.text}</button>
        </li>
    );
};

export default ButtonServices;
