import React from "react";
import styles from "./page.module.scss";
const Field = () => {
  return (
    <div className={styles.fieldBackground}>
      <img src="/fieldback.svg" alt="" />
      <div className={styles.fieldOverlay}>
        <img src="/slick.svg" alt="" />
        <img src="/slick.svg" alt="" />
      </div>
      <div className={styles.devicesWrapper}>
        <img src="/phone.svg" alt="Device 1" className={styles.device1} />
        <img src="/phone2.svg" alt="Device 2" className={styles.device2} />
        <img src="/phone3.svg" alt="Device 3" className={styles.device3} />
      </div>
    </div>
  );
};

export default Field;
