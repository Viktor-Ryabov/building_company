
import Styles from "./ButtonTop.module.css";

const ButtonTop = (props) => {
    return (
        <button className={Styles.listElement}>
                {props.text}
        </button>
    )
}

export default ButtonTop;