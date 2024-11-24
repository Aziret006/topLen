import React from "react";
import styles from "./page.module.scss";
const Roadmap = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Долгая дорога к AGI</h1>
        <div className={styles.timeline}>
          <div className={styles.event}>
            <div className={styles.year}>2014</div>
            <div className={styles.description}>
              <p>
                Тьюринг тест пройден формально <br /> инженерным методом
              </p>
              <ul>
                <li>Бот Евгений Густман</li>
                <li>Владимир Веселов</li>
                <li>Сергей Уласенко</li>
                <li>Евгений Демченко</li>
              </ul>
            </div>
          </div>

          <div className={styles.event}>
            <div className={styles.year}>2023</div>
            <div className={styles.description}>
              <p>Тьюринг тест пройден неформально</p>
              <ul>
                <li>LLM ChatGPT</li>
                <li>Сэм Альтман</li>
                <li>Грег Брокман</li>
                <li>Илья Сутскевер</li>
              </ul>
            </div>
          </div>

          <div className={styles.event}>
            <div className={styles.year}>203?</div>
            <div className={styles.description}>
              <p>LLM/GPT научились...</p>
              <p>Инкрементальному обучению...</p>
            </div>
          </div>

          <div className={styles.event}>
            <div className={styles.year}>204?</div>
            <div className={styles.description}>
              <p>Можем тренировать AGI на смартфоне?</p>
              <p>Можем доверить AGI энергоблок?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
