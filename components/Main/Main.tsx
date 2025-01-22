import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
const Main = () => {
  return (
    <div id="#about" className={styles.top_back}>
      <div className={styles.top__flex}>
        <div className={styles.top_text}>
          <div>
            <h2>Что такое ТОП ?</h2>
            <p>
              В сердце нашей миссии лежит стремление вдохновлять каждого на
              игру, побуждать к творчеству и создавать мосты между людьми,
              разделяющими страсть к футболу.
            </p>
          </div>
          <hr className={styles.top_line} />
          <div>
            <h2>
              Основная цель <br /> проекта Тоp
            </h2>
            <p>
              Наша цель - не только в том, чтобы подарить вам увлекательные
              моменты футбола, но и вдохновить вас на творческое самовыражение,
              создание и, конечно же, наслаждение игрой
            </p>
          </div>
        </div>
        <div className={styles.top_flex2}>
          <div className={styles.top_image}>
            <button style={{ whiteSpace: "nowrap" }}>Про нас</button>
            <p>
              Мы верим, что футбол - это не просто игра, а средство объединения
              людей, вдохновения и творчества. Наш проект создан для тех, кто
              разделяет эту страсть и готов развиваться вместе с нами.
            </p>
          </div>
          <div className={styles.top_absolute}>
            <Image
              src="/5.png"
              alt="Football"
              width={354}
              height={392}
              className={styles.top_img}
              priority={true}
            />
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=iJDtziSiaWM"
              className={styles.video_container}
              rel="noopener noreferrer"
            >
              <iframe
                width="263"
                height="256"
                src="https://www.youtube.com/embed/UBN4o6njLcA?si=FDJu3ReF_TJVjrLU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className={styles.top_img2}
              ></iframe>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
