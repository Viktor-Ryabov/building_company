import Styles from "../CaptureForm/CaptureForm.module.css";

const CaptureForm = () => {
    return (
        <div className={Styles.form}>
            <h2 className={Styles.subtitle}>
                Заполни форму и получи смету бесплатно
            </h2>
            <>
                <input
                    className={Styles.input}
                    minlength="3"
                    required
                    placeholder="Виктор Рябов"
                    type="text"
                />
                <input
                    className={Styles.input}
                    minlength="3"
                    required
                    placeholder="+7 (999) 999-9999"
                    type="tel"
                />
                <input
                    className={Styles.input}
                    type="email"
                    name="user_email"
                    required
                    placeholder="ho4y-dom@ya.ru"
                />
                <textarea
                    className={Styles.input}
                    name="message"
                    cols="30"
                    rows="4"
                    placeholder="Введите сообщение"
                />
            </>
            <a href="#" className={Styles.button}>
                Получить смету<span className={Styles.flare}></span>
            </a>
        </div>
    );
};

export default CaptureForm;
