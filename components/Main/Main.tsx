import React from "react";
import styles from "./page.module.scss";
const Main = () => {
  return (
    <div id="about" className={styles.topBackground}>
      <div className={styles.topFlex}>
        <div>
          <div className={styles.topText}>
            <span>
              <h2>Что такое “ТОП”?</h2>
              <p>
                В сердце нашей миссии лежит стремление вдохновлять каждого на
                игру, побуждать к творчеству и создавать мосты между людьми,
                разделяющими страсть к футболу.
              </p>
            </span>
            <hr className={styles.topLine} />
            <span>
              <h2>
                Основная цель <br /> проекта Тоp
              </h2>
              <p>
                Наша цель - не только в том, чтобы подарить вам увлекательные
                моменты футбола, но и вдохновить вас на творческое
                самовыражение, создание и, конечно же, наслаждение игрой
              </p>
            </span>
          </div>
          <div className={styles.topFlex2}>
            <div className={styles.topImage}>
              <button style={{ whiteSpace: "nowrap" }}>Про нас</button>
              <p>
                Мы верим, что футбол - это не просто игра, а средство
                объединения людей, вдохновения и творчества. Наш проект создан
                для тех, кто разделяет эту страсть и готов развиваться вместе с
                нами.
              </p>
            </div>
            <div className={styles.topAbsolute}>
              <img src="/image.svg" alt="Football" className={styles.topLogo} />
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=iJDtziSiaWM"
              >
                <img
                  src="/video.svg"
                  alt="Football"
                  className={styles.topLogo2}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
