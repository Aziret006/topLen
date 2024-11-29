import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
const Ecosystem = () => {
  return (
    <div className={styles.ecosystem_All}>
      <div className={styles.ecosystem_text}>
        <h1>ФУТБОЛЬНАЯ ЭКОСИСТЕМА</h1>
        <p>
          Наше приложение объединяет все аспекты футбольной карьеры в одном
          месте, предоставляя уникальную экосистему для каждого игрока. <br />
          <br /> В центре этой экосистемы – сам футболист, окруженный поддержкой
          и ресурсами, необходимыми для достижения успеха:
        </p>
      </div>
      <div className={styles.ecosystem_container_image}>
        <Image
          className={styles.ecosystem_image}
          src="/ecosystem.svg"
          alt="Football"
          width={1240}
          height={950}
        />
      </div>
    </div>
  );
};

export default Ecosystem;
