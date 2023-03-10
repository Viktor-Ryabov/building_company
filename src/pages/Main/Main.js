import Benefit from "../../Components/Benefit/Benefit.js";
import About from "../../Components/About/About.js";
import { UtpAndForm } from "../../Components/UtpAndForm/UtpAndForm.js";

export const Main = () => {
    return(
        <section className="Styles.main">
            <About />
            <Benefit />
        </section>
    );
};
