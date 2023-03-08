import Styles from "./About.module.css";
import ActionButton from "../ActionButton/ActionButton.js";

const About = () => {
    return (
        <section className={Styles.main}>
            <article className={Styles.article}>
                <h2 className={Styles.h2}>Мы строим очень хорошо.</h2>
                <p className={Styles.text}>
                    Соблюдаем сроки, следим за качеством работ и материалов.
                </p>
                <p className={Styles.text}>
                    Советуем клиентам как сделать лучше.
                </p>
                <p className={Styles.text}>
                    Предоставляем гарантию на выполненные работы.
                </p>
                <p className={Styles.text}>Делаем дома как себе.</p>
                <p className={Styles.text}>Нам верят наши Клиенты.</p>
            </article>

            <div className={Styles.author}>
                <div className={Styles.photo} />
                <>
                    <h3 className={Styles.name}>Виктор Рябов</h3>
                    <p className={Styles.post}>Руководитель</p>
                </>
                <ActionButton text="звонок Руководителю" />
            </div>
        </section>
    );
};

export default About;
