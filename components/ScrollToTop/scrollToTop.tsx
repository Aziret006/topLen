"use client";
import React, { useEffect, useState } from "react";
import s from "./page.module.scss";
// import Image from "next/image";
import Image from "next/image";

export default function ScrollToTop(): JSX.Element {
  const [showToTopButton, setShowToTopButton] = useState<boolean>(false);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = (): void => {
    if (window.scrollY > 300) {
      setShowToTopButton(true);
    } else {
      setShowToTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={s.scrollToTop}>
      {showToTopButton && (
        <button onClick={scrollToTop} aria-label="Scroll to top">
          <Image
            width={78}
            height={78}
            src="/button.png"
            alt="Scroll to top"
            priority
          />
        </button>
      )}
    </div>
  );
}
