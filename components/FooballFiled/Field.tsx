"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { useState, useEffect } from "react";

const Field = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate image height based on window width
  const getImageHeight = () => {
    if (windowWidth >= 1280) return 867;
    if (windowWidth >= 1024) return 694;
    if (windowWidth >= 768) return 607;
    if (windowWidth >= 640) return 520;
    return 300;
  };

  return (
    <div className={styles.fieldBackground}>
      <Image
        width={1388}
        height={getImageHeight()}
        src="/bigimage.svg"
        alt="Field background"
        className={styles.fieldImage}
        priority
      />
    </div>
  );
};

export default Field;
