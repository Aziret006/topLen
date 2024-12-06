import React from "react";
import styles from "./page.module.scss";
const PagePrimus = () => {
  return (
    <div className={styles.Page_Primus}>
      <div className={styles.Page_Primus_Grid}>
        <div className={styles.Page_Primus_Image_Container}>
          <img src="/image4.svg" alt="Football" className={styles.topImage4} />
          <div className={styles.Page_Primus_Cards}>
            <div className={styles.Page_Primus_Card}>
              <img
                src="/image6.svg"
                alt="Football"
                className={styles.topImage5}
              />
              <div className={styles.Page_Primus_Card_Text}>
                <h3>Cоздание игры</h3>
                <p>
                  Удобный  и понятный интерфейс для создания игр и приглашения
                  игроков.
                </p>
              </div>
            </div>
            <div className={styles.Page_Primus_Card}>
              <img
                src="/image8.svg"
                alt="Football"
                className={styles.topImage5}
              />
              <div className={styles.Page_Primus_Card_Text3}>
                <h3>
                  Экспертная <br /> оценка
                </h3>
                <p>
                  Возможность пригласить скаута/агента, который ведёт
                  объективную оценку уровня игроков и их футбольных навыков.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Page_Primus_Big_Text}>
          <h3 className={styles.Page_Primus_Big_Text_h3}>
            Какие <span className={styles.advantages}>ПРЕИМУЩЕСТВА</span>{" "}
            использования данного <br /> сервиса?
          </h3>
          <div className={styles.Page_Primus_Cards}>
            <div className={styles.Page_Primus_Card2}>
              <img
                src="/image6.svg"
                alt="Football"
                className={styles.topImage5}
              />
              <div className={styles.Page_Primus_Card_Text}>
                <h3 className={styles.Page_Primus_Card_Text_h3}>
                  Бронирование полей
                </h3>
                <p className={styles.p}>
                  Система бронирования футбольных полей в &quot;Top&quot;
                  обеспечивает надежную защиту данных, предотвращая возможные
                  конфликты
                </p>
              </div>
            </div>
            <div className={styles.Page_Primus_Card2}>
              <img
                src="/image6.svg"
                alt="Football"
                className={styles.topImage5}
              />
              <div className={styles.Page_Primus_Card_Text}>
                <h3>Профессиональные тренировки</h3>
                <p>
                  Эксперная оценка игроков и создание профессиональных матчей.
                </p>
              </div>
            </div>
          </div>
          <a target="_blank" href="https://www.youtube.com/watch?v=iJDtziSiaWM">
            <img
              src="/image7.svg"
              alt="Football"
              className={styles.topImage6}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PagePrimus;
