import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";

const Grade = () => {
  const cards = [
    {
      title: "АРБИТР",
      description: "Обеспечьте честную игру с помощью опытных арбитров из нашей базы.",
      image: "/arbitr.svg",
    },
    {
      title: "ТРЕНЕР",
      description: "Достигайте новых вершин с помощью индивидуальных тренировок от опытных тренеров.",
      image: "/trener.svg",
    },
    {
      title: "СКАУТ/АГЕНТ",
      description: "Поиск будущих звезд: скаутинговая платформа для поиска талантливых игроков.",
      image: "/skaut.svg",
    },
    {
      title: "ТЕСТИНГОВЫЙ ЦЕНТР",
      description: "Экспертная оценка игроков и создание профессиональных матчей.",
      image: "/center.svg",
    },
  ];

  return (
    <div className={styles.gradeContainer}>
      <div className={styles.heroSection}>
        <div className={styles.textContent}>
          <h1>
            <span className={styles.highlight}>Экспертная оценка</span>
            <br /> игроков и <br />
            <span className={styles.highlight}>создание</span>
            <br /> профессиональных <br /> матчей
          </h1>
        </div>
        <div className={styles.mobilePreview}>
          <Image
            src="/mobile-screens.png"
            alt="Mobile application preview"
            width={600}
            height={800}
            className={styles.mobileImage}
          />
        </div>
      </div>
      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={card.image}
                alt={card.title}
                width={295}
                height={224}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grade;

