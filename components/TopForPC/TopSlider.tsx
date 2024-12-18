"use client";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./page.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
// import { Roadmap } from "./Roadmap/Roadmap";

const TopSlider: React.FC = () => {
  const slides = [
    {
      title: "Профиль",
      text: `Главная страница нашего приложения создана для удобного управления футбольной деятельностью. Это универсальный инструмент CRM, который помогает любителям и профессионалам эффективно бронировать футбольные поля, организовывать игры, управлять командами и следить за предстоящими турнирами.`,
      text2:
        "Сразу после входа пользователь видит:Доступные футбольные поля: вся информация о ближайших площадках, включая цену, рейтинг и расстояние.Объявления: раздел для поиска игроков, набора команд или участия в академиях.Календарь мероприятий: список предстоящих турниров и событий с возможностью регистрации.Персонализированные функции: быстрый доступ к вашему клубу, сообщениям, настройкам профиля и другим инструментам.",
      image: "/mac2.png",
    },
    {
      title: "Главная",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.`,
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.",
      image: "/mac1.png",
    },
    {
      title: "Сообщения",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.`,
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.",
      image: "/mac3.png",
    },
    {
      title: "События",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.`,
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.",
      image: "/mac4.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, handleNext]);

  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      <div className={styles.topSlider} id="platform">
        <div>
          <h1>
            у нас так же есть платформа <br /> <span>TOP для пк</span>
          </h1>
          <div className={styles.topSliderFlex}>
            <div className={styles.topSliderInner}>
              <div className={styles.content}>
                <h4>{slides[currentIndex].title}</h4>
                <p>{slides[currentIndex].text}</p>
                <p>{slides[currentIndex].text2}</p>
              </div>
              <div className={styles.sliderButtons}>
                <div className={styles.sliderDots}>
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`${styles.dot} ${
                        index === currentIndex ? styles.activeDot : ""
                      }`}
                      onClick={() => handleDotClick(index)}
                    />
                  ))}
                </div>
                <div className={styles.sliderArrows}>
                  <button
                    onClick={() => {
                      handlePrev();
                      setIsAutoPlaying(false);
                    }}
                    className={styles.prevButton}
                    aria-label="Previous slide"
                  >
                    <IoIosArrowBack size={22} />
                  </button>
                  <button
                    onClick={() => {
                      handleNext();
                      setIsAutoPlaying(false);
                    }}
                    className={styles.nextButton}
                    aria-label="Next slide"
                  >
                    <IoIosArrowForward size={22} />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.topSliderImage}>
              <Image
                width={860}
                height={598}
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className={styles.topLogo}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.roadmap}>
        <Image
          id="roadmap"
          width={1340}
          height={754}
          src="/roadmap.png"
          alt="Background"
          className={`${styles.rectangle} ${isZoomed ? styles.zoomed : ""}`}
          priority={true}
        />
        <p onClick={toggleZoom} className={styles.zoomButton}>
          {isZoomed ? "Уменьшить" : "Увеличить"}
        </p>
      </div>
    </>
  );
};

export default TopSlider;
