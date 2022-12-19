import Styles from "./About.module.css";
import foto from "../../img/ceo.jpeg";

const About = () => {
    return (
        <section className={Styles.about}>
            <article className={Styles.article}>
                <h2 className={Styles.h2}>Наша организация</h2>
                <p className={Styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                </p>
            </article>

            <div className={Styles.author}>
                <div className={Styles.photo} />
                <>
                    <h3 className={Styles.name}>Виктор Рябов</h3>
                    <p className={Styles.post}>Руководитель</p>
                </>
            </div>
        </section>
    );
};

export default About;
