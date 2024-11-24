import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
const PagePrimus = () => {
  return (
    <div className={styles.Page_Primus}>
      <div className={styles.Page_Primus_Grid}>
        <div className={styles.Page_Primus_Image_Container}>
          <Image
            src="/image4.svg"
            alt="Football"
            width={606}
            height={823}
            className={styles.topImage4}
          />
          <div className={styles.Page_Primus_Cards}>
            <div className={styles.Page_Primus_Card}>
              <Image
                src="/image6.svg"
                alt="Football"
                width={295}
                height={224}
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
              <Image
                src="/image8.svg"
                alt="Football"
                width={295}
                height={224}
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
              <Image
                src="/image6.svg"
                alt="Football"
                width={295}
                height={224}
                className={styles.topImage5}
              />
              <div className={styles.Page_Primus_Card_Text}>
                <h3 className={styles.Page_Primus_Card_Text_h3}>
                  Бронирование полей
                </h3>
                <p>
                  Система бронирования футбольных полей в &quot;Top&quot;
                  обеспечивает надежную защиту данных, предотвращая возможные
                  конфликты
                </p>
              </div>
            </div>
            <div className={styles.Page_Primus_Card2}>
              <Image
                src="/image6.svg"
                alt="Football"
                width={295}
                height={224}
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
          </div>
          <Image
            src="/image7.svg"
            alt="Football"
            width={606}
            height={250}
            className={styles.topImage6}
          />
        </div>
      </div>
    </div>
  );
};

export default PagePrimus;
