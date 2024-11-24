import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
const Grade = () => {
  return (
    <div className={styles.grade_container}>
      <div className={styles.grade_text}>
        <h1>
          <span>Экспертная оценка</span>
          <br /> игроков и<br /> <span>создание</span>
          <br /> профессиональных <br /> матчей
        </h1>
        <div className={styles.grade_image_container}>
          <Image
            src="/Black.svg"
            alt="Football"
            width={564}
            height={766}
            className={styles.grade_image}
          />
        </div>
      </div>
      <div className={styles.Page_Primus_flex}>
        <div className={styles.Page_Primus_Cards}>
          <div className={styles.Page_Primus_Card}>
            <Image
              src="/arbitr.svg"
              alt="Football"
              width={295}
              height={224}
              className={styles.topImage5}
            />
            <div className={styles.Page_Primus_Card_Text}>
              <h3>Арбитр</h3>
              <p>
                Обеспечьте честную игру с помощью опытных арбитров из нашей
                базы.
              </p>
            </div>
          </div>
          <div className={styles.Page_Primus_Card}>
            <Image
              src="/trener.svg"
              alt="Football"
              width={295}
              height={224}
              className={styles.topImage5}
            />
            <div className={styles.Page_Primus_Card_Text}>
              <h3>Тренер</h3>
              <p>
                Достигайте новых вершин с помощью индивидуальных тренировок от
                опытных тренеров.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.Page_Primus_Cards2}>
          <div className={styles.Page_Primus_Card}>
            <Image
              src="/skaut.svg"
              alt="Football"
              width={295}
              height={224}
              className={styles.topImage5}
            />
            <div className={styles.Page_Primus_Card_Text}>
              <h3>Арбитр</h3>
              <p>
                Обеспечьте честную игру с помощью опытных арбитров из нашей
                базы.
              </p>
            </div>
          </div>
          <div className={styles.Page_Primus_Card}>
            <Image
              src="/center.svg"
              alt="Football"
              width={295}
              height={224}
              className={styles.topImage5}
            />
            <div className={styles.Page_Primus_Card_Text}>
              <h3>Тренер</h3>
              <p>
                Достигайте новых вершин с помощью индивидуальных тренировок от
                опытных тренеров.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grade;
