import Styles from "./Main.module.css";
import Benefit from "../../Components/Benefit/Benefit.js";
import About from "../../Components/About/About.js";
import { UtpAndForm } from "../../Components/UtpAndForm/UtpAndForm.js";
import Header from "../../Components/Header/Header.js";
import TopMenu from "../../Components/TopMenu/TopMenu.js";
import { TopBlocWithPicture } from "../../Components/About/TopBlocWithPicture/TopBlocWithPicture";

export const Main = () => {
    return (
        <section className={Styles.main}>
            <TopBlocWithPicture>
                <Header />
                <UtpAndForm />
                <TopMenu />
            </TopBlocWithPicture>
            <About />
            <Benefit />
        </section>
    );
};
