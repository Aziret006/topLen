"use client";
import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const RoleCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselImage}>
        <Image
          src="/imageback2.svg"
          alt="Football"
          width={1380}
          height={778}
          className={styles.topImage}
        />
      </div>
      <div className={styles.carousel_all}>
        <div className={styles.roles__content_back}>
          <h1>Роли в нашем приложении</h1>
          <p>
            ТОП — это ваш путь к захватывающему футбольному опыту, будь вы
            любитель или профессионал. <br />
            <br /> Присоединяйтесь к нашему сообществу и наслаждайтесь футболом
            на новом уровне!
          </p>
        </div>
      </div>
      <div className={styles.carousel_all}>
        <div className={styles.container}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <span>
                <h3 className={styles.title}>Режим «Менеджер клуба»</h3>
                <p className={styles.description}>
                  Режим позволяет управлять футбольным клубом.
                </p>
              </span>
            </div>
            <div className={styles.card}>
              <Image
                src="/imageblock.svg"
                alt="Football"
                width={295}
                height={295}
                className={styles.topImage2}
              />
              {/* <span>
                <h3 className={styles.title}>Режим «Тренер»</h3>
                <p className={styles.description}>
                  Режим позволяет управлять тренировочным процессом и игроками.
                </p>
              </span> */}
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.card2}>
              <span>
                <h3 className={styles.title}>Режим «Скаут/Агент»</h3>
                <p className={styles.description}>
                  Позволяет просматривать игроков по определённым
                  критериям/фильтрам.
                </p>
              </span>
            </div>
            <div className={styles.card}>
              <span>
                <h3 className={styles.title}>Режим «Футболист»</h3>
                <p className={styles.description}>
                  Создание собственных матчей и поиск игроков и команд среди
                  любителей. Поиск и бронирование футбольных площадок.
                </p>
              </span>
            </div>
          </div>
          <div className={styles.card_Organizer}>
            <span>
              <h3 className={styles.title}>Режим «Организатор турнира»</h3>
              <p className={styles.description}>
                Режим позволяет автоматизировать организаторские процессы
                турнира и вести всю необходимую статистику.
              </p>
            </span>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <span>
                <h3 className={styles.title}>Режим «Арбитр»</h3>
                <p className={styles.description}>
                  Позволяет управлять судейскими назначениями и отслеживать
                  статистику матчей.
                </p>
              </span>
            </div>
            <div className={styles.card}>
              <span>
                <h3 className={styles.title}>Функция «TRYOUT»</h3>
                <p className={styles.description}>
                  Позволяет организовать просмотры в мировые академии и клубы.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleCarousel;
