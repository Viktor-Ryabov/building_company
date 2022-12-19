import Styles from "../Benefit/Benefit.module.css";
import norms from "../../img/norms.png";
import tehnologies from "../../img/tehnologies.png";
import time from "../../img/time.png";
import cost from "../../img/cost.png";
import tools from "../../img/tools.png";
import stage from "../../img/stage.png";

const Benefit = () => {
    return (
        <>
            <ul className={Styles.menu}>
                <button className={Styles.listElement}>
                    <img src={norms} alt="нормы" className={Styles.imageFoto} />
                    <li>Строгое соблюдение строительных норм и правил</li>
                </button>
                <button className={Styles.listElement}>
                    <img
                        src={tehnologies}
                        alt="технологии"
                        className={Styles.imageFoto}
                    />
                    <li>Современные материалы и технологии их использования</li>
                </button>
                <button className={Styles.listElement}>
                    <img src={time} alt="сроки" className={Styles.imageFoto} />
                    <li>Гарантированные сроки выполнения работ</li>
                </button>
                <button className={Styles.listElement}>
                    <img
                        src={tools}
                        alt="инструменты"
                        className={Styles.imageFoto}
                    />
                    <li>Работаем немецким инструментом</li>
                </button>
                <button className={Styles.listElement}>
                    <img src={stage} alt="этапы" className={Styles.imageFoto} />
                    <li>
                        Возможность поэтапного / частичного строительства дома
                    </li>
                </button>
                <button className={Styles.listElement}>
                    <img src={cost} alt="цены" className={Styles.imageFoto} />
                    <li>Доступные цены и квалифицированный персонал</li>
                </button>
            </ul>
            <section></section>
        </>
    );
};

export default Benefit;
