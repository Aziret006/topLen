import React from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './page.module.scss';

interface Content {
  img: string;
  cover: string;
}

interface RolesCarouselProps {
  content: Content[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

const Wrap =({
  content,
  currentIndex,
  onPrev,
  onNext,
  onDotClick,
}: RolesCarouselProps) => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselImage}>
        <Image
          src="/imageback2.svg"
          alt="Football"
          width={1380}
          height={778}
          className={styles.topImage}
        />
      </div>
      <div className={styles.carouselContent}>
        <div className={styles.imageContainer}>
          <img src={content[currentIndex].img} alt="Role" />
        </div>
        <div className={styles.textContainer}>
          <h1>Роли в нашем приложении</h1>
          <p>
            ТОП — это ваш путь к захватывающему футбольному опыту, будь вы
            любитель или профессионал. <br />
            <br /> Присоединяйтесь к нашему сообществу и наслаждайтесь
            футболом на новом уровне!
          </p>
          <div className={styles.sliderControls}>
            <div className={styles.sliderArrows}>
              <button onClick={onPrev} className={styles.arrowButton}>
                <IoIosArrowBack color="#fff" size={22} />
              </button>
              <button onClick={onNext} className={styles.arrowButton}>
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
                  onClick={() => onDotClick(index)}
                />
              ))}
            </div>
          </div>
          <div className={styles.imageGrid}>
            {content.map((item, index) => (
              <div
                key={index}
                className={`${styles.coverImage} ${
                  currentIndex === index ? styles.activeItem : ""
                }`}
                onClick={() => onDotClick(index)}
              >
                <img src={item.cover} alt={`Cover ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrap
