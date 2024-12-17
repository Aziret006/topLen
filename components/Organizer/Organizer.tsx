"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const Organizer = () => {
  const [currentImage, setCurrentImage] = useState("/place.png");

  const handleBlockClick = (imagePath: string) => {
    setCurrentImage(imagePath);
  };

  return (
    <div className={styles.Organizer_container}>
      <Image
        width={1273}
        height={1101}
        src="/club.png"
        alt="Football"
        className={styles.Organizer_img}
        priority
      />
      <div id="organizer" className={styles.Organizer_text}>
        <h1>Режим Организатора турнира</h1>
        <p>Возможности организатора:</p>
      </div>
      <div className={styles.Organizer_grid_fex}>
        <div className={styles.container}>
          <div
            className={styles.feature}
            style={{ backgroundColor: "white" }}
            onClick={() => handleBlockClick("/smart.png")}
          >
            <div className={styles.icon}>
              <img src="/icon.png" alt="" />
            </div>
            <p className={styles.text}>
              Выбор типа турнира; Круговая система, олимпийская система или лига
              чемпионов;
            </p>
          </div>
          <div
            className={styles.feature}
            style={{ backgroundColor: "lightgreen", border: "none" }}
            onClick={() => handleBlockClick("/smart2.png")}
          >
            <div className={styles.icon}>
              <img src="/icon2.png" alt="" />
            </div>
            <p className={styles.text}>
              Автоматическое распределение мест и подсчет очков;
            </p>
          </div>
          <div
            className={styles.feature}
            style={{ backgroundColor: "green" }}
            onClick={() => handleBlockClick("/smart3.png")}
          >
            <div className={styles.icon}>
              <img src="/icon3.png" alt="" />
            </div>
            <p style={{ color: "white" }} className={styles.text}>
              Генерация расписания игр, в которые можно вносить правки;
            </p>
          </div>
          <div
            className={styles.feature}
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => handleBlockClick("/smart4.png")}
          >
            <div className={styles.icon}>
              <img src="/icon4.png" alt="" />
            </div>
            <p style={{ color: "white" }} className={styles.text}>
              Индивидуальная статистика игроков;
            </p>
          </div>
          <div
            className={styles.feature}
            style={{ backgroundColor: "orange" }}
            onClick={() => handleBlockClick("/smart5.png")}
          >
            <div className={styles.icon}>
              <img src="/icon5.png" alt="" />
            </div>
            <p className={styles.text}>
              Настройки турнира под ваши требования;
            </p>
          </div>
          <div
            className={styles.feature}
            style={{ backgroundColor: "white" }}
            onClick={() => handleBlockClick("/smart3.png")}
          >
            <div className={styles.icon}>
              <img src="/icon6.png" alt="" />
            </div>
            <p className={styles.text}>
              Электронный протокол: составы команд, голы, передачи,
              предупреждения, нарушения в матче;
            </p>
          </div>
        </div>
        <div className={styles.Organizer_image}>
          <Image
            src={currentImage}
            alt="Football"
            width={595}
            height={865}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Organizer;
