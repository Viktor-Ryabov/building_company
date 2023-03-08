import Styles from "./BurgerMenulogo.module.css"
import Logo_burger_menu from "../../img/burger_menu.png"

const BurgerMenulogo = () => {
    return (
        <button className={Styles.button}>
            <img alt='иконка меню' src={Logo_burger_menu} className={Styles.logo} />
        </button>
    )
}

export default BurgerMenulogo;