"use client";
import Image from "next/image";
import styles from "./page.module.scss";

const Field = () => {
  return (
    <div className={styles.fieldBackground}>
      <img src="/backf.png" alt="" className={styles.field} />
      <div className={styles.devicesWrapper}>
        <Image
          src="/formobile.png"
          alt="devices"
          width={1321}
          height={1410}
          className={styles.devices}
          priority
        />
      </div>
    </div>
  );
};

export default Field;
