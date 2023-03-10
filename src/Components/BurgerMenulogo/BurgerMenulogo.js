import Styles from "./BurgerMenulogo.module.css"
import Logo_burger_menu from "../../img/burger_menu.png"

const BurgerMenulogo = (props) => {
    console.log(props)
    return (
        <button className={Styles.button} onClick={() => {
            props.openFunc();
        }}>
            <img alt='иконка меню' src={Logo_burger_menu} className={Styles.logo} />
        </button>
    )
}

export default BurgerMenulogo;