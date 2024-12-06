"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useWindowSize } from "./useWindowSize";

const content = [
  {
    id: 1,
    img: "iphone.svg",
    cover: "blockimg.svg",
  },
  {
    id: 2,
    img: "iphone2.svg",
    cover: "blockimg3.svg",
  },
  {
    id: 3,
    img: "iphone3.svg",
    cover: "blockimg5.svg",
  },
  {
    id: 4,
    img: "iphone4.svg",
    cover: "blockimg6.svg",
  },
  {
    id: 5,
    img: "iphone5.svg",
    cover: "blockimg2.svg",
  },
  {
    id: 6,
    img: "iphone6.svg",
    cover: "blockimg4.svg",
  },
  {
    id: 7,
    img: "iphone5.svg",
    cover: "blockimg7.svg",
  },
];

const content2 = [
  {
    id: 1,
    img: "iphone.svg",
    cover: "ipad.svg",
  },
  {
    id: 2,
    img: "iphone2.svg",
    cover: "ipad2.svg",
  },
  {
    id: 3,
    img: "iphone3.svg",
    cover: "ipad3.svg",
  },
  {
    id: 4,
    img: "iphone4.svg",
    cover: "ipad4.svg",
  },

  {
    id: 6,
    img: "iphone6.svg",
    cover: "ipad8.svg",
  },
  {
    id: 7,
    img: "iphone5.svg",
    cover: "ipad7.svg",
  },
  {
    id: 5,
    img: "iphone5.svg",
    cover: "ipad5.svg",
  },
];

const RoleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const size = useWindowSize();

  const isTablet = size.width >= 300 && size.width <= 1095; // Планшет
  const isDesktop = size.width > 1095;

  return (
    <>
      <div className={styles.carouselContainer}>
        {isDesktop && (
          <div className={styles.carouselImage}>
            <div className={styles.carousel__all}>
              <div className={styles.carousel}>
                <div className={styles.imageContainer}>
                  <img src={content[currentIndex].img} alt="Role" />
                </div>
                <div className={styles.arrows_image}>
                  <div className={styles.roles__content_back}>
                    <h1>Роли в нашем приложении</h1>
                    <p>
                      ТОП — это ваш путь к захватывающему футбольному опыту,
                      будь вы любитель или профессионал. <br />
                      <br /> Присоединяйтесь к нашему сообществу и наслаждайтесь
                      футболом на новом уровне!
                    </p>
                  </div>
                  <div className={styles.sliderGrid}>
                    <div className={styles.sliderButtons}>
                      <div className={styles.sliderArrows}>
                        <button
                          onClick={handlePrev}
                          className={styles.prevButton}
                        >
                          <IoIosArrowBack color="#fff" size={22} />
                        </button>
                        <button
                          onClick={handleNext}
                          className={styles.nextButton}
                        >
                          <IoIosArrowForward color="#fff" size={22} />
                        </button>
                      </div>
                      <div className={styles.sliderDots}>
                        {content.map((_, index) => (
                          <div
                            key={index}
                            className={`${styles.dot} ${
                              index === currentIndex ? styles.activeDot : ""
                            }`}
                            onClick={() => handleDotClick(index)}
                          />
                        ))}
                      </div>
                    </div>
                    <div className={styles.imageContainer2}>
                      {content.map((item, index) => (
                        <img
                          onClick={() => handleDotClick(index)}
                          key={index}
                          src={item.cover}
                          alt={`Cover ${index}`}
                          className={`${styles.coverImage} ${
                            currentIndex === index ? styles.activeItem : ""
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {isTablet && (
          <div className={styles.roles__content2}>
            <div className={styles.roles__content_back}>
              <h1>Роли в нашем приложении</h1>
              <p>
                ТОП — это ваш путь к захватывающему футбольному опыту, будь вы
                любитель или профессионал. Присоединяйтесь к нашему сообществу и
                наслаждайтесь футболом на новом уровне!
              </p>
            </div>
            <div className={styles.carouselImage2}>
              <div className={styles.carousel__all}>
                <div className={styles.carousel}>
                  <div>
                    <div className={styles.imageContainer}>
                      <img src={content[currentIndex].img} alt="Role" />
                    </div>
                    <div className={styles.sliderButtons}>
                      <div className={styles.sliderArrows}>
                        <button
                          onClick={handlePrev}
                          className={styles.prevButton}
                        >
                          <IoIosArrowBack color="#fff" size={22} />
                        </button>
                        <button
                          onClick={handleNext}
                          className={styles.nextButton}
                        >
                          <IoIosArrowForward color="#fff" size={22} />
                        </button>
                      </div>
                      <div className={styles.sliderDots}>
                        {content.map((_, index) => (
                          <div
                            key={index}
                            className={`${styles.dot} ${
                              index === currentIndex ? styles.activeDot : ""
                            }`}
                            onClick={() => handleDotClick(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={styles.imageContainer2}>
                    {content2.map((item, index) => (
                      <img
                        onClick={() => handleDotClick(index)}
                        key={index}
                        src={item.cover}
                        alt={`Cover ${index}`}
                        className={`${styles.coverImage} ${
                          currentIndex === index ? styles.activeItem : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RoleCarousel;
