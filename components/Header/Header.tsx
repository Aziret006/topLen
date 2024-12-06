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
          />
        </Link>
        <ul className={s.nav}>
          <li>
            <Link href="/" className={pathname === "/" ? s.active : ""}>
              О проекте
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={pathname === "/advantages" ? s.active : ""}
            >
              Преимущества
            </Link>
          </li>
          <li>
            <Link href="#id" className={pathname === "/top" ? s.active : ""}>
              TOP для ПК
            </Link>
          </li>
          <li>
            <Link href="#" className={pathname === "/Roadmap" ? s.active : ""}>
              ROADMAP
            </Link>
          </li>
          <li>
            <Link href="#" className={pathname === "/contacts" ? s.active : ""}>
              Контакты
            </Link>
          </li>
          <li>
            <Link href="#" className={pathname === "/contacts" ? s.active : ""}>
              Режимы
            </Link>
          </li>
          <li>
            <Link href="#" className={pathname === "/contacts" ? s.active : ""}>
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
          <button>
            Загрузить
            <span>
              <RiArrowRightUpLine />
            </span>
          </button>
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
        <div className={s.mobileNav}>
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
                href="/contacts"
                className={pathname === "/contacts" ? s.active : ""}
              >
                Контакты
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className={pathname === "/contacts" ? s.active : ""}
              >
                Режимы
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className={pathname === "/contacts" ? s.active : ""}
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
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
