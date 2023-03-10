import Styles from "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Main } from "../../pages/Main/Main.js";
import { ContactsPage } from "../../pages/ContactsPage/ContactsPage";
import { ExamplesOfWorksPage } from "../../pages/ExamplesOfWorksPage/ExamplesOfWorksPage";
import {AboutPage} from "../../pages/AboutPage/AboutPage.js"
import { ServicesPage } from "../../pages/ServicesPage/ServicesPage.js";

export const App = () => (
    <section className={Styles.App}>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Main />} />
                <Route path="aboutPage" element={<AboutPage />} />
                <Route path="contactsPage" element={<ContactsPage />} />
                <Route path="examplesPage" element={<ExamplesOfWorksPage />} />
                <Route path="servicesPage" element={<ServicesPage />} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </section>
);
