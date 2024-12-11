import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
const Tryout = () => {
  return (
    <div className={styles.tryout_container}>
      <div className={styles.tryout_flex}>
        <div className={styles.tryout_text}>
          <h3>trYOUT</h3>
          <h1>Организация футбольных мероприятий и Просмотров («TRYOUT»)</h1>
          <p>
            Режим позволяет организовать просмотры в зарубежные и местные клубы
            и академии. Игрокам всего лишь необходимо быть зарегистрированным в
            нашей платформе.
          </p>
        </div>
      </div>
      <div className={styles.tryout_flex_all}>
        <Image
          width={630}
          height={785}
          src="/1.svg"
          alt=""
          className={styles.tryout_image}
          priority
        />
        <div className={styles.tryout_flex_content}>
          <h4>
            Получите полный доступ ко всем функциям — скачайте наше приложение и
            наслаждайтесь удобством
          </h4>
          <div className={styles.wrapper}>
            <a
              href="https://play.google.com/store/apps/details?id=dev.odigital.topkg" // Замените на фактическую ссылку на Google Play
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/googleplay.svg"
                alt="Google Play Icon"
                className={styles.icon}
                width={40}
                height={40}
                priority
              />
              <div>
                <span className={styles.smallText2}>Get it on</span>
                <span className={styles.largeText2}>Google Play</span>
              </div>
            </a>
            <a
              href="https://apps.apple.com/kg/app/top/id6477701651" // Замените на фактическую ссылку на App Store
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/appstore.svg"
                alt="App Store Icon"
                className={styles.icon}
                width={40}
                height={40}
                priority
              />
              <div>
                <span className={styles.smallText}>Download on the</span>
                <span className={styles.largeText}>App Store</span>
              </div>
            </a>
          </div>
          <div className={styles.tryout_flex_content2}>
            <span>
              <h4>2000+</h4>
              <p>
                Quis fringilla convallis et <br /> vitae volutpat at porttitor.{" "}
              </p>
            </span>
            <Image
              src="/finish.svg"
              alt="image"
              width={268}
              height={84}
              priority
            />
          </div>
          <div className={styles.wrapper2}>
            <a
              href="https://play.google.com" // Замените на фактическую ссылку на Google Play
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/googleplay.svg"
                alt="Google Play Icon"
                className={styles.icon}
                width={40}
                height={40}
                priority
              />
              <div>
                <span className={styles.smallText2}>Get it on</span>
                <span className={styles.largeText2}>Google Play</span>
              </div>
            </a>
            <a
              href="https://apps.apple.com" // Замените на фактическую ссылку на App Store
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/appstore.svg"
                alt="App Store Icon"
                className={styles.icon}
                width={40}
                height={40}
                priority
              />
              <div>
                <span className={styles.smallText}>Download on the</span>
                <span className={styles.largeText}>App Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tryout;
