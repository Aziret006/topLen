import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
const Technical = () => {
  return (
    <div className={styles.technical_container}>
      <div className={styles.technical_text}>
        <h1>Технический паспорт футболиста</h1>
      </div>
      <div className={styles.technical_image_text_flex}>
        <div className={styles.technical_image_text}>
          <span></span>
          <h4>Награды и достижения</h4>
        </div>
        <div className={styles.technical_image_and_text}>
          <Image
            src="/mobile.png"
            alt="Football"
            width={639}
            height={900}
            className={styles.technical_image_mobile}
            priority
          />
        </div>
        <Image
          src="/topFootball.svg"
          alt="Football"
          width={1462}
          height={417}
          className={styles.technical_image_desktop}
          priority
        />
        <div className={styles.technical_image_text}>
          <span></span>
          <h4>Игровые показатели</h4>
        </div>
      </div>
      <div className={styles.technical_image_text_flex_all}>
        <div className={styles.technical_image_text_flex2}>
          <div className={styles.technical_image_text2}>
            <span></span>
            <p>
              Показатели тестов по физике; Бег 10,30,50 м, челночный бег,
              взрывная сила и .т.д.
            </p>
          </div>
          <div className={styles.technical_image_text3}>
            <span></span>
            <p>
              В техническом паспорте отражаются персональные данные и
              характеристики футболиста по категориям; техника, физика, тактика,
              психология.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.container}>
          <div className={styles.section}>
            <h2 className={styles.title}>Награды и достижения</h2>
          </div>
          <div className={styles.section}>
            <h2 className={styles.title}>Игровые показатели</h2>
          </div>
          <div className={styles.section}>
            <p className={styles.description}>
              Показатели тестов по физике: Бег 10,30,50 м, челночный бег,
              взрывная сила и т.д.
            </p>
          </div>
          <div className={styles.section}>
            <p className={styles.description}>
              В техническом паспорте отражаются персональные данные и
              характеристики футболиста по категориям: техника, физика, тактика,
              психология.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
