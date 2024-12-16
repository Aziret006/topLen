import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
const Section = () => {
  return (
    <>
      <div id="about" className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.topText}>
            <h1>ДОБРО ПОЖАЛОВАТЬ </h1>
            <div className={styles.topLogoflex}>
              <Image
                src="/Rectangle.svg"
                alt="Логотип футбольного приложения ТОП"
                width={160}
                height={67}
                className={styles.topPhone}
                priority={true}
              />
              <h1> В МИР ФУТБОЛА </h1>
            </div>
            <h1>
              С ПРИЛОЖЕНИЕМ <br /> ТОП!
            </h1>
          </div>
          <div className={styles.storeButtons}>
            <h4>Доступно на </h4>
            <div className={styles.wrapper}>
              <a
                href="https://apps.apple.com/kg/app/top/id6477701651"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/appstore.svg"
                  alt="Иконка App Store"
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
              <a
                href="https://play.google.com/store/apps/details?id=dev.odigital.topkg"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/googleplay.svg"
                  alt="Иконка Google Play"
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
            </div>
            <p>
              ТОП — это современная онлайн-платформа, которая объединяет все
              аспекты футбольной жизни для любителей и профессионалов в СНГ и за
              его пределами
            </p>
          </div>
        </div>
        <div className={styles.phoneImage}>
          <Image
            src="/2.svg"
            alt="Превью приложения ТОП на iPhone 14"
            width={539}
            height={830}
            className={styles.phoneImage2}
            priority
          />
          <Image
            className={styles.topFootball}
            src="/topFootball.svg"
            alt="Футбольный фон"
            width={862}
            height={417}
            priority={true}
          />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.leftContent}>
          <div>
            <h1>ДОБРО ПОЖАЛОВАТЬ </h1>
            <div className={styles.topLogoflex}>
              <Image
                src="/Rectangle.svg"
                alt="Логотип футбольного приложения ТОП"
                width={160}
                height={67}
                className={styles.topPhone}
                priority={true}
              />
              <h1> В МИР ФУТБОЛА </h1>
            </div>
            <h1>
              С ПРИЛОЖЕНИЕМ <br /> ТОП!
            </h1>
          </div>
          <div className={styles.phoneImage}>
            <Image
              src="/2.svg"
              alt="Превью приложения ТОП на iPhone 14"
              width={539}
              height={830}
              className={styles.phoneImage2}
              priority
            />
            <Image
              className={styles.topFootball}
              src="/topFootball.svg"
              alt="Футбольный фон"
              width={1462}
              height={417}
              priority={true}
            />
          </div>
          <div className={styles.storeButtons}>
            <h4>Доступно на </h4>
            <div className={styles.wrapper}>
              <a
                href="https://apps.apple.com/kg/app/top/id6477701651"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/appstore.svg"
                  alt="Иконка App Store"
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
              <a
                href="https://play.google.com/store/apps/details?id=dev.odigital.topkg"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/googleplay.svg"
                  alt="Иконка Google Play"
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
            </div>
            <p>
              ТОП — это современная онлайн-платформа, которая объединяет все
              аспекты футбольной жизни для любителей и профессионалов в СНГ и за
              его пределами
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
