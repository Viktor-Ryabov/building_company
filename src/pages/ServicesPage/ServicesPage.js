import Styles from "./ServicesPage.module.css"
import Header from "../../Components/Header/Header";
import { TopBlocWithPicture } from "../../Components/About/TopBlocWithPicture/TopBlocWithPicture";
import Benefit from "../../Components/Benefit/Benefit";

export const ServicesPage = () => (
    <TopBlocWithPicture>
        <Header/>
        <Benefit/>
    </TopBlocWithPicture>
)