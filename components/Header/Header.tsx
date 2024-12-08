"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./page.module.scss";
import { RiArrowRightUpLine } from "react-icons/ri";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className={s.header}>
        <Link href="/">
          <Image
            src="/toplogo.svg"
            alt="logo"
            width={130}
            height={48}
            className={s.logo}
            priority
          />
        </Link>
        <ul className={s.nav}>
          <li>
            <Link href="#about" className={pathname === "/" ? s.active : ""}>
              О проекте
            </Link>
          </li>
          <li>
            <Link
              href="#primus"
              className={pathname === "/advantages" ? s.active : ""}
            >
              Преимущества
            </Link>
          </li>
          <li>
            <Link
              href="#TOPFORPK"
              className={pathname === "/top" ? s.active : ""}
            >
              TOP для ПК
            </Link>
          </li>
          <li>
            <Link
              href="#RODMAP"
              className={pathname === "/Roadmap" ? s.active : ""}
            >
              ROADMAP
            </Link>
          </li>
          <li>
            <Link
              href="#MODE"
              className={pathname === "/contacts" ? s.active : ""}
            >
              Режимы
            </Link>
          </li>
          <li>
            <Link
              href="#ecosystem"
              className={pathname === "/contacts" ? s.active : ""}
            >
              Экосистема
            </Link>
          </li>
          <li>
            <Link
              href="# "
              className={pathname === "/contacts" ? s.active : ""}
            >
              Контакты
            </Link>
          </li>
          <a
            className={s.button}
            target="_blank"
            href="https://apps.apple.com/kg/app/top/id6477701651"
          >
            <button>
              Загрузить
              <span>
                <RiArrowRightUpLine />
              </span>
            </button>
          </a>
        </ul>
        <div className={s.bars}>
          {isOpen ? (
            <FaTimes
              onClick={() => setIsOpen(false)}
              size={24}
              className={s.icon}
              color="#fff"
            />
          ) : (
            <FaBars
              onClick={() => setIsOpen(true)}
              size={24}
              className={s.icon}
              color="#fff"
            />
          )}
        </div>
      </header>
      {isOpen && (
        <nav className={s.mobileNav}>
          <div className={s.header}>
            <Link href="/">
              <Image
                src="/toplogo.svg"
                alt="logo"
                width={130}
                height={48}
                className={s.logo}
                priority
              />
            </Link>
            <div className={s.bars}>
              {isOpen ? (
                <FaTimes
                  onClick={() => setIsOpen(false)}
                  size={24}
                  className={s.icon}
                  color="#fff"
                />
              ) : (
                <FaBars
                  onClick={() => setIsOpen(true)}
                  size={24}
                  className={s.icon}
                  color="#fff"
                />
              )}
            </div>
          </div>
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? s.active : ""}>
                О проекте
              </Link>
            </li>
            <li>
              <Link
                href="/advantages"
                className={pathname === "/advantages" ? s.active : ""}
              >
                Преимущества
              </Link>
            </li>
            <li>
              <Link href="/top" className={pathname === "/top" ? s.active : ""}>
                TOP для ПК
              </Link>
            </li>
            <li>
              <Link
                href="/roadmap"
                className={pathname === "/roadmap" ? s.active : ""}
              >
                ROADMAP
              </Link>
            </li>
            <li>
              <Link
                href="/modes"
                className={pathname === "/modes" ? s.active : ""}
              >
                Режимы
              </Link>
            </li>
            <li>
              <Link
                href="/ecosystem"
                className={pathname === "/ecosystem" ? s.active : ""}
              >
                Экосистема
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className={pathname === "/contacts" ? s.active : ""}
              >
                Контакты
              </Link>
            </li>
          </ul>
          <div className={s.socialWrapper}>
            <p className={s.socialLabel}>Следите за нами</p>
            <div className={s.socialIcons}>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
