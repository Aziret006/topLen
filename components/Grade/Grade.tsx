import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const Grade = () => {
  return (
    <div className={styles.grade_container}>
      <div className={styles.grade_content}>
        <div className={styles.grade_text}>
          <h1>
            <span className={styles.span} style={{ flexWrap: "nowrap" }}>
              Экспертная оценка
            </span>
            <br /> игроков и<br /> <span>создание</span>
            <br /> профессиональных <br /> матчей
          </h1>
        </div>
        <div className={styles.grade_image_container}>
          <img src="/grade.png" alt="Football" className={styles.grade_image} />
        </div>
      </div>
      <div className={styles.Page_Primus_flex}>
        <div className={styles.Page_Primus_Cards}>
          <Card
            imageSrc="/20.jpg"
            title="Арбитр"
            description="Обеспечьте честную игру с помощью опытных арбитров из нашей базы."
          />
          <Card
            imageSrc="/trener.svg"
            title="Тренер"
            description="Достигайте новых вершин с помощью индивидуальных тренировок от опытных тренеров."
          />
        </div>
        <div className={styles.Page_Primus_Cards2}>
          <Card
            imageSrc="/skaut.svg"
            title="Скаут"
            description="Найдите талантливых игроков с помощью наших опытных скаутов."
          />
          <Card
            imageSrc="/center.svg"
            title="Центр"
            description="Используйте наши современные тренировочные центры для развития своих навыков."
          />
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className={styles.Page_Primus_Card}>
      <Image
        width={294}
        height={224}
        src={imageSrc}
        alt={title}
        className={styles.topImage5}
        priority
      />
      <div className={styles.Page_Primus_Card_Text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Grade;
