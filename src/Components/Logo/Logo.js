import Styles from "./Logo.module.css"
import Logo_foto from "../../img/ryabov_new_white.png";

const Logo = () => {
    return (
        <div className={Styles.logo}>
            <img alt='иконка лого' src={Logo_foto} className={Styles.logo} />
        </div>
    );
};
export default Logo;
