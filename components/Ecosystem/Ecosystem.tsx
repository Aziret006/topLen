import React from "react";
import styles from "./page.module.scss";

const Ecosystem = () => {
  return (
    <div id="ecosystem" className={styles.ecosystem_All}>
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
        <img
          className={styles.ecosystem_image}
          src="/ecosystem.svg"
          alt="Football"
        />
      </div>
    </div>
  );
};

export default Ecosystem;
