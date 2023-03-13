import Styles from "./Benefit.module.css";
import norms from "../../img/norms.png";
import tehnologies from "../../img/tehnologies.png";
import time from "../../img/time.png";
import cost from "../../img/cost.png";
import tools from "../../img/tools.png";
import stage from "../../img/stage.png";
import video from "../../video/building_1.mp4"

const Benefit = () => {
    return (
        <section className={Styles.main}>
            <ul className={Styles.benefit}>
                <button className={Styles.listElement}>
                    <img src={norms} alt="нормы" className={Styles.imageFoto} />
                    <li className={Styles.text}>Строгое соблюдение строительных норм и правил</li>
                </button>
                <button className={Styles.listElement}>
                    <img
                        src={tehnologies}
                        alt="технологии"
                        className={Styles.imageFoto}
                    />
                    <li className={Styles.text}>Современные материалы и технологии их использования</li>
                </button>
                <button className={Styles.listElement}>
                    <img src={time} alt="сроки" className={Styles.imageFoto} />
                    <li className={Styles.text}>Гарантированные сроки выполнения работ</li>
                </button>
                <button className={Styles.listElement}>
                    <img
                        src={tools}
                        alt="инструменты"
                        className={Styles.imageFoto}
                    />
                    <li className={Styles.text}>Работаем немецким инструментом</li>
                </button>
                <button className={Styles.listElement}>
                    <img src={stage} alt="этапы" className={Styles.imageFoto} />
                    <li className={Styles.text}>
                        Возможность поэтапного / частичного строительства дома
                    </li>
                </button>
                <button className={Styles.listElement}>
                    <img src={cost} alt="цены" className={Styles.imageFoto} />
                    <li className={Styles.text}>Доступные цены и квалифицированный персонал</li>
                </button>
            </ul>
            <video type="video/mp4" loop muted className={Styles.video} controls src={video} autoPlay={true} />
        </section>
    );
};

export default Benefit;
