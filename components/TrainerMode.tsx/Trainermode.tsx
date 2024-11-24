import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
const Trainermode = () => {
  return (
    <div className={styles.trainermode_container}>
      <div className={styles.trainermode_text}>
        <h1>Режим «Тренер»</h1>
      </div>
      <div className={styles.trainermode_grid_flex}>
        <div className={styles.trainermode_grid}>
          <div className={styles.gridContainer}>
            <div className={styles.card}>
              <div className={styles.line}></div>
              <span className={styles.text}>Геймификация</span>
              <span className={styles.arrow}>&#8599;</span>
            </div>
            <div className={styles.card}>
              <div className={styles.line}></div>
              <span className={styles.text}>
                Управление группами и игроками
              </span>
              <span className={styles.arrow}>&#8599;</span>
            </div>
            <div className={styles.card}>
              <div className={styles.line}></div>
              <span className={styles.text}>Персональные данные тренера</span>
              <span className={styles.arrow}>&#8599;</span>
            </div>
            <div className={styles.card}>
              <div className={styles.line}></div>
              <span className={styles.text}>
                Создание электронного Технического Паспорта игрока.
              </span>
            </div>
            <div className={styles.card}>
              <div className={styles.line}></div>
              <span className={styles.text}>
                Управление электронным дневником игрока.
              </span>
              <span className={styles.arrow}>&#8599;</span>
            </div>
            <div className={styles.card}>
              <div className={styles.line}></div>
              <span className={styles.text}>
                Электронная подача заявок игроков и команд для участия в
                турнирах.
              </span>
            </div>
            <div className={styles.card}>
              <div className={styles.line}></div>
              <span className={styles.text}>Персональные данные тренера</span>
              <span className={styles.arrow}>&#8599;</span>
            </div>
            <div className={styles.card}>
              <div className={styles.line}></div>
              <span className={styles.text}>
                Выставление баллов за достижение результатов во время
                тренировок/тестов/игр (геймификация).
              </span>
            </div>
            <div className={styles.card2}>
              <div className={styles.line}></div>
              <span className={styles.text}>
                Подведение итоговых баллов в конце сезона и награждение в
                номинациях лучший бомбардир, лучщий плеймекер и т.д..
              </span>
            </div>
          </div>
        </div>
        <div className={styles.mobile_image}>
          <Image
            src="/profilemobile.svg"
            alt="Football"
            width={332}
            height={900}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Trainermode;
