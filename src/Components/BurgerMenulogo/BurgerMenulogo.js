import Styles from "../BurgerMenulogo/BurgerMenulogo.module.css"
import Logo_burger_menu from "../../img/burger_menu.png"

const BurgerMenulogo = () => {
    return (
        <div>
            <img src={Logo_burger_menu} className={Styles.logo} />
        </div>
    )
}

export default BurgerMenulogo;