"use client";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./page.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
// import { Roadmap } from "./Roadmap/Roadmap";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface FancyboxOptions {
  autoFocus: boolean;
  dragToClose: boolean;
  Toolbar: {
    display: {
      left: string[];
      middle: string[];
      right: string[];
    };
  };
  Image: {
    zoom: boolean;
    click: boolean;
    wheel: string;
  };
}

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
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      try {
        const options: FancyboxOptions = {
          autoFocus: false,
          dragToClose: false,
          Toolbar: {
            display: {
              left: [],
              middle: [],
              right: ["close"],
            },
          },
          Image: {
            zoom: true,
            click: true,
            wheel: "zoom",
          },
        };

        NativeFancybox.bind('[data-fancybox="gallery"]', options);

        return () => {
          NativeFancybox.destroy();
        };
      } catch (error) {
        console.error("Error initializing Fancybox:", error);
      }
    }
  }, [isMobile]);

  useEffect(() => {
    // Сохраняем текущий viewport meta tag
    const existingViewport = document.querySelector('meta[name="viewport"]');
    const originalContent = existingViewport?.getAttribute('content');

    // Создаем новый viewport meta tag, разрешающий zoom
    const viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1.0, user-scalable=yes';
    
    // Заменяем существующий viewport
    if (existingViewport) {
      existingViewport.replaceWith(viewportMeta);
    } else {
      document.head.appendChild(viewportMeta);
    }

    // Очистка при размонтировании компонента
    return () => {
      if (originalContent) {
        const resetViewport = document.createElement('meta');
        resetViewport.name = 'viewport';
        resetViewport.content = originalContent;
        viewportMeta.replaceWith(resetViewport);
      } else {
        viewportMeta.remove();
      }
    };
  }, []);

  const handleImageFullscreen = (event: React.MouseEvent<HTMLImageElement>) => {
    if (isMobile) {
      const element = event.target as HTMLImageElement;
      if (element.requestFullscreen) {
        element.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      }
    }
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
        <Box>
          <ImageList variant="masonry" cols={1} gap={8}>
            <ImageListItem key="roadmap">
              {!isMobile ? (
                <a data-fancybox="gallery" href="/roadmap.png">
                  <Image
                    id="roadmap"
                    width={1340}
                    height={754}
                    src="/roadmap.png"
                    alt="Background"
                    className={styles.rectangle}
                    priority={true}
                  />
                </a>
              ) : (
                <Image
                  id="roadmap"
                  width={1340}
                  height={754}
                  src="/roadmap.png"
                  alt="Background"
                  className={styles.rectangle}
                  priority={true}
                  onClick={handleImageFullscreen}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </ImageListItem>
          </ImageList>
        </Box>
      </div>
    </>
  );
};

export default TopSlider;
