import Styles from "../Logo/Logo.module.css"
import Logo_foto from "../../img/ryabov_new_white.png";

const Logo = () => {
    return (
        <div className={Styles.logo}>
            <img src={Logo_foto} className={Styles.logo} />
        </div>
    );
};
export default Logo;