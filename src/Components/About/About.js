import Styles from "./About.module.css";

const About = () => {
    return (
        <section className={Styles.main}>
            <article className={Styles.article}>
                <h2 className={Styles.h2}>Строительная организация в Республике Крым</h2>
                <p className={Styles.text}>Меня зовут Виктор Рябов</p>
                <p className={Styles.text}>Я - профессиональный строитель</p>
                <p className={Styles.text}>Хочу предложить Вам возвести Монолитный или сборный железобетонный фундамент под ключ в срок от 10 дней с гарантией 10 лет.</p>
                <ul className={Styles.text}>Можем выполнить следующие виды фундаментов:
                    <li className={Styles.list}>- ленточный</li>
                    <li className={Styles.list}>- ленточно-свайный</li>
                    <li className={Styles.list}>- плитный</li>
                    <li className={Styles.list}>- монолитный и сборный</li>
                    <li className={Styles.list}>- свайный (набивной, забивной, буронабивной, завинчивающийся, составной)</li>
                    <li className={Styles.list}>- столбчатый</li>
                    <li className={Styles.list}>- блочный</li>
                    <li className={Styles.list}>- незаглубленный фундамент (совпадает с нулевым уровнем грунта или ниже не более 10 см)</li>
                </ul>
                <p className={Styles.text}></p>
                <p className={Styles.text}></p>
                <p className={Styles.text}></p>


                <p className={Styles.text}>
              
❗️Важно, я могу представить Вам выполненные фундаменты на готовых объектах.
❗️Все фотографии, представленные в объявлении реально мои.

💱 Цена на фундамент под ключ, зависит от типа фундамента, высоты цоколя.И составляет от 8 000,00 руб до 22 000,00 руб. за 1 м3 - цокольный этаж с перекрытием

✅ Фото и видео отчет процесса.
✅ Решение всех вопросов, связанных с согласованием и проведением коммуникаций, разрешением на строительство, введением в эксплуатацию.
✅ Работа по договору
✅ Сроки строительства, авансы, гарантия подтверждена договором
✅ Любой удобный способ оплаты
✅ Все работы выполняются в соответствии с ГОСТами и СНИПами РФ.

🎁 Проект и смета в подарок, при заключении договора на выполнение строительно-монтажных работ

_______________________________________________________________

📳 Звоните или пишите прямо сейчас!

✅ Мобильный
✅ WhatsApp
✅ Viber
✅ Telegram

_______________________________________________________________

Отвечу на все ваши вопросы!

➡️ Произведу расчёт любой сложности в самый короткий срок!
➡️ Работаем по наброску вашей идеи на бумаге. Мы полностью подготовим полноценный проект фундамента для строительства объекта.
➡️ Выполняем проекты любой сложности
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
