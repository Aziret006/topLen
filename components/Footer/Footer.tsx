import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Image
            src="TopLogo2.svg"
            alt="Football"
            width={160}
            height={67}
            priority={true}
          />
          <p>
            Если у вас возникли вопросы или вы хотите получить дополнительную
            информацию, пожалуйста, свяжитесь с нами по электронной почте:
            [почта@вашсайт.ру] или телефону: [номер телефона].
          </p>
        </div>
        <div className={styles.linksSection}>
          <h3>Страницы</h3>
          <div className={styles.links}>
            <ul>
              <li>
                <Link href="#about"> Главная</Link>
              </li>
              <li>
                <Link href="#about">Что такое ТОР</Link>
              </li>
              <li>
                <Link href="#roles">Роли</Link>
              </li>
              <li>
                <Link href="#roadmap">ROADMAP</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#mode">Режим Футболист</Link>
              </li>
              <li>
                <Link href="#organizer">Режим Организатор турнира</Link>
              </li>
              <li>
                <Link href="#ecosystem">Футбольная Экосистема</Link>
              </li>
              <li>
                <Link href="#platform">Платформа ТОР для ПК</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.newsletterSection}>
          <h3>Подпишитесь на наши новости</h3>
          <div className={styles.subscriptionForm}>
            <div className={styles.inputContainer}>
              <FaEnvelope className={styles.icon} />
              <input
                type="email"
                placeholder="Ваша электронная почта"
                aria-label="Введите вашу электронную почту"
              />
              <button aria-label="Отправить">→</button>
            </div>
            <hr className={styles.underline} />
          </div>
          <div className={styles.social_aLL}>
            <h5>Следите за нами</h5>
            <div className={styles.socials}>
              <a href="#" aria-label="TikTok">
                <Image
                  src="/tiktok.svg"
                  alt="Football"
                  width={37}
                  height={37}
                  priority
                />
              </a>
              <a href="#" aria-label="Telegram">
                <Image
                  src="/telegramm.svg"
                  alt="Football"
                  width={37}
                  height={37}
                  priority
                />
              </a>
              <a href="#" aria-label="Instagram">
                <Image
                  src="/instagramm.svg"
                  alt="Football"
                  width={37}
                  height={37}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
