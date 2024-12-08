import React from "react";
import Link from "next/link";
import s from "./Header.module.scss";

interface MobileNavProps {
  pathname: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ pathname }) => {
  return (
    <nav className={s.mobileNav}>
      <ul>
        {[
          "О проекте",
          "Преимущества",
          "TOP для ПК",
          "ROADMAP",
          "Режимы",
          "Экосистема",
          "Контакты",
        ].map((item, index) => (
          <li key={index}>
            <Link
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={
                pathname === `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  ? s.active
                  : ""
              }
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div className={s.socialWrapper}>
        <p className={s.socialLabel}>Следите за нами</p>
        <div className={s.socialIcons}>
          {[
            { href: "https://tiktok.com", icon: "fa-brands fa-tiktok" },
            { href: "https://telegram.org", icon: "fa-brands fa-telegram" },
            { href: "https://instagram.com", icon: "fa-brands fa-instagram" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
