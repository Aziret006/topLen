import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Image
            src="/toplogo3.svg"
            alt="ТОП"
            width={160}
            height={67}
            priority={true}
          />
          <div>
            <p>Разработано в компании:</p>
            <a target="blank" href="https://odigital.app/contacts">
              <Image
                src="/oracledigital.svg"
                alt="Digital Company"
                width={144}
                height={41}
                className={styles.oracleLogo}
                priority={true}
              />
            </a>
          </div>
        </div>

        <div className={styles.pagesSection}>
          <h3>Страницы</h3>
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <Link className={styles.homeLink} href="/">
                Главная
              </Link>
              <Link className={styles.homeLink} href="#about">
                Что такое &quot;ТОР&quot;
              </Link>
              <Link className={styles.homeLink} href="#roles">
                Роли
              </Link>
              <Link className={styles.homeLink} href="#roadmap">
                ROADMAP
              </Link>
            </div>
            <div className={styles.linkColumn}>
              <Link className={styles.homeLink} href="#mode">
                Режим &quot;Футболист&quot;
              </Link>
              <Link className={styles.homeLink} href="#organizer">
                Режим &quot;Организатор турнира&quot;
              </Link>
              <Link className={styles.homeLink} href="#ecosystem">
                Футбольная Экосистема
              </Link>
              <Link className={styles.homeLink} href="#platform">
                Платформа &quot;ТОР&quot; для ПК
              </Link>
            </div>
          </div>
        </div>
        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h3>Контакты</h3>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <p>Номер телефона</p>
              <a target="blank" href="tel:+996709683738">
                +996 709 68 37 38
              </a>
            </div>
            <div className={styles.contactItem}>
              <p>E-Mail</p>
              <a target="blank" href="mailto:info@topsport.asia">info@topsport.asia</a>
            </div>
          </div>
          <div className={styles.social}>
            <h5>Следите за нами</h5>
            <div className={styles.socialIcons}>
              <Link href="https://t.me/OracleDigital">
                <Image
                  src="/telegramm.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://www.instagram.com/top_borntoplay/">
                <Image
                  src="/instagramm.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
