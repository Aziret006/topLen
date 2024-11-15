"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./page.module.scss";
import TopLogo from "@/public/svg/TopLogo";
import { RiArrowRightUpLine } from "react-icons/ri";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={s.header}>
      <Link href="/">
        <TopLogo />
      </Link>
      <ul className={s.nav}>
        <li>
          <Link href="/" className={pathname === "/" ? s.active : ""}>
            О проекте
          </Link>
        </li>
        <li>
          <Link href="#" className={pathname === "/advantages" ? s.active : ""}>
            Преимущества
          </Link>
        </li>
        <li>
          <Link href="#" className={pathname === "/top" ? s.active : ""}>
            TOP для ПК
          </Link>
        </li>
        <li>
          <Link href="#" className={pathname === "/roadmap" ? s.active : ""}>
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
          <Link href="# " className={pathname === "/contacts" ? s.active : ""}>
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
    </header>
  );
};

export default Header;
