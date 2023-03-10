import Styles from "./App.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer";
import { Main } from "../../pages/Main/Main.js";

export const App = () => (
    <section className={Styles.App}>
        <Header />
        <Main />
        <Footer />
    </section>
)
