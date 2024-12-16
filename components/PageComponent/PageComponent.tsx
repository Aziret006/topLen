import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const PageComponent: React.FC = () => {
  return (
    <section className={styles.page_all}>
      <header>
        <h3 className={styles.page_Text1}>
          Профессиональный подход к вашим футбольным потребностям!
        </h3>
      </header>
      <article className={styles.page_Text_Page}>
        <p className={styles.page_Text2}>
          Игра становится лучше, когда футболисты объединяются, создавая
          собственные игры и наслаждаясь процессом!
        </p>
        <figure className={styles.topImageAll}>
          <Image
            src="/image100.png"
            alt="Football"
            width={1150}
            height={1262}
            className={styles.topImage2}
            priority
            quality={100}
            unoptimized={true}
          />
          <Image
            src="/topFootball.svg"
            alt="Football"
            width={1446}
            height={416}
            className={styles.top_back_image}
            priority
          />
          <Image
            src="/image3.svg"
            alt="Football"
            width={331}
            height={92}
            className={styles.top_Football_image}
            priority
          />
        </figure>
        <p className={styles.page_Text3}>
          На нашей платформе мы стремимся предоставить вам всё, что нужно для
          организации и проведения футбольных матчей и турниров. Будь то
          бронирование полей, заказ услуг арбитров или создание собственных игр,
          — мы делаем это с максимальной простотой и профессионализмом. Мы
          понимаем, что каждый матч — это особенное событие, поэтому предлагаем
          удобные инструменты, которые позволят вам сосредоточиться на игре, а
          не на организационных мелочах.
          <br />
          <br />
          ТОП — это ваш надежный помощник в мире футбола, обеспечивающий
          высококачественное обслуживание и поддержку на каждом этапе вашего
          футбольного пути.
        </p>
      </article>
    </section>
  );
};

export default PageComponent;
