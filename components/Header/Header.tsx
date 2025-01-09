"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./page.module.scss";
import SupportModal from "../SupportModal/SupportModal";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "О проекте" },
    { href: "/team-section", label: "Наша команда" }, // убедитесь что путь совпадает с названием папки
    { href: "#advantages", label: "Преимущества" },
    { href: "#roadmap", label: "ROADMAP" },
    { href: "#mode", label: "Режимы" },
    { href: "#ecosystem", label: "Экосистема" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}>
          <Image
            src="/toplogo.svg"
            alt="logo"
            width={130}
            height={48}
            className={styles.logo}
            priority
          />
        </Link>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? styles.active : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div>
          <span
            onClick={() => setIsModalOpen(true)}
            className={styles.buttonInner}
          >
            Помочь проекту
            <span className={styles.buttonIcon}>
              <RiArrowRightUpLine />
            </span>
          </span>
          <button className={styles.bars} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>
      {isModalOpen && (
        <SupportModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {isOpen && (
        <nav className={styles.mobileNav}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? styles.active : ""}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.socialWrapper}>
            <div className={styles.social_aLL}>
              <h5>Следите за нами</h5>
              <div className={styles.socials}>
                <a
                  href="https://t.me/OracleDigital"
                  aria-label="Telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/telegramm.svg"
                    alt="Telegram"
                    width={37}
                    height={37}
                    priority
                  />
                </a>
                <a
                  href="https://www.instagram.com/top_borntoplay/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/instagramm.svg"
                    alt="Instagram"
                    width={37}
                    height={37}
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
