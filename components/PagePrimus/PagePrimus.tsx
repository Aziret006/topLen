import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
const PagePrimus = () => {
  return (
    <>
      <div id="primus" className={styles.Page_Primus}>
        <div className={styles.Page_Primus_Grid}>
          <div className={styles.Page_Primus_Image_Container}>
            <Image
              src="/image4.svg"
              alt="Football"
              width={606}
              height={823}
              className={styles.topImage4}
              priority
            />
            <div className={styles.Page_Primus_Cards}>
              <div className={styles.Page_Primus_Card}>
                <Image
                  src="/image6.svg"
                  alt="Football"
                  className={styles.topImage5}
                  width={295}
                  height={224}
                  priority
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
                  priority
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
                  className={styles.topImage5}
                  width={295}
                  height={224}
                  priority
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
                <Image
                  src="/image6.svg"
                  alt="Football"
                  className={styles.topImage5}
                  width={295}
                  height={224}
                  priority
                />
                <div className={styles.Page_Primus_Card_Text}>
                  <h3>Профессиональные тренировки</h3>
                  <p>
                    Эксперная оценка игроков и создание профессиональных матчей.
                  </p>
                </div>
              </div>
            </div>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=iJDtziSiaWM"
            >
              <Image
                src="/image7.svg"
                alt="Football"
                className={styles.topImage6}
                width={606}
                height={250}
                priority
              />
            </a>
          </div>
        </div>
      </div>
      <div id="primus" className={styles.Page_Primus2}>
        <div className={styles.Page_Primus_Grid}>
          <div className={styles.Page_Primus_Image_Container}>
            <h3 className={styles.Page_Primus_Big_Text_h3}>
              Какие <span className={styles.advantages}>ПРЕИМУЩЕСТВА</span>{" "}
              использования данного <br /> сервиса?
            </h3>
            <Image
              src="/image4.svg"
              alt="Football"
              width={606}
              height={823}
              className={styles.topImage4}
              priority
            />
            <div className={styles.Page_Primus_Cards}>
              <div className={styles.Page_Primus_Card}>
                <Image
                  src="/image6.svg"
                  alt="Football"
                  className={styles.topImage5}
                  width={295}
                  height={224}
                  priority
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
                  priority
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
            <div className={styles.Page_Primus_Cards}>
              <div className={styles.Page_Primus_Card2}>
                <Image
                  src="/image6.svg"
                  alt="Football"
                  className={styles.topImage5}
                  width={295}
                  height={224}
                  priority
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
                <Image
                  src="/image6.svg"
                  alt="Football"
                  className={styles.topImage5}
                  width={295}
                  height={224}
                  priority
                />
                <div className={styles.Page_Primus_Card_Text}>
                  <h3>Профессиональные тренировки</h3>
                  <p>
                    Эксперная оценка игроков и создание профессиональных матчей.
                  </p>
                </div>
              </div>
            </div>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=iJDtziSiaWM"
            >
              <Image
                src="/image7.svg"
                alt="Football"
                className={styles.topImage6}
                width={606}
                height={250}
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagePrimus;
