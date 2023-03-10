import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import { TopBlocWithPicture } from "../../Components/About/TopBlocWithPicture/TopBlocWithPicture";

export const AboutPage = () => (
    <TopBlocWithPicture>
        <Header/>
        <About/>
    </TopBlocWithPicture>
)