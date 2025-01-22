"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./page.module.scss";
import SupportModal from "../SupportModal/SupportModal";

const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname.includes("#")) {
      const targetId = pathname.split("#")[1];
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const [currentHash, setCurrentHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return href === currentHash;
    }
    return pathname === href;
  };

  const navItems = [
    { href: "/#about", label: "О проекте" },
    { href: "/team-section", label: "Наша команда" },
    { href: "/#advantages", label: "Преимущества" },
    { href: "/#roadmap", label: "ROADMAP" },
    { href: "/#mode", label: "Режимы" },
    { href: "/#ecosystem", label: "Экосистема" },
    { href: "/#contacts", label: "Контакты" },
  ];

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    if (href.startsWith("/#")) {
      const targetId = href.substring(2);
      if (pathname === "/") {
        handleSmoothScroll(targetId);
        setCurrentHash(`#${targetId}`);
      } else {
        router.push(`/${href}`);
      }
    } else {
      router.push(href);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (pathname === "/" && currentHash) {
      setTimeout(() => {
        const targetId = currentHash.slice(1);
        handleSmoothScroll(targetId);
      }, 0);
    } else if (!currentHash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, currentHash]);

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
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
            <a
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? styles.active : ""}
              onClick={(e) => handleNavigation(e, item.href)}
            >
              {item.label}
            </a>
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
                <a
                  href={item.href}
                  className={isActive(item.href) ? styles.active : ""}
                  onClick={(e) => handleNavigation(e, item.href)}
                >
                  {item.label}
                </a>
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
