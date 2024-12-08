import React from "react";
import styles from "./page.module.scss";
const Mode = () => {
  const data = [
    {
      id: 1,
      text: "Участие в местных и международных турнирах и просмотрах.",
    },
    {
      id: 2,
      text: "Технический паспорт для скаутов и агентов.",
    },
    {
      id: 3,
      text: "Создание собственных матчей, поиск игроков и команд среди любителей.",
    },
    {
      id: 4,
      text: "Отслеживание расписания тренировок и предстоящих игр.",
    },
    {
      id: 5,
      text: "Доступ к обучающему центру.",
    },
    {
      id: 6,
      text: "Поиск и бронирование футбольных площадок.",
    },
    {
      id: 7,
      text: "Трекинг сыгранных игр, голов, голевых передач и штрафов.",
    },
    {
      id: 8,
      text: "Трекинг начисленных баллов за успехи в тренировочном процессе и тестах.",
    },
    {
      id: 9,
      text: "Регулярное оценивание своих одноклубников (peer-to-peer evaluation).",
    },
  ];

  return (
    <div id="MODE" className={styles.Mode}>
      <div className={styles.Mode__content}>
        <h1>Режим «ФУТБОЛИСТ»</h1>
        <p>
          Позволяет найти свой клуб и начать карьеру футболиста. Возможность
          тренироваться онлайн и участвовать в турнирах и просмотрах.
        </p>
      </div>
      <div className={styles.Mode__flex}>
        <div className={styles.Mode__cards}>
          {data.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.number}>
                <span>{item.id}</span>
                <p className={styles.text}>{item.text}</p>
                <hr className={styles.line}></hr>
              </div>
            </div>
          ))}
        </div>
        <img
          src="/imagefootball.svg"
          alt="Football"
          className={styles.bornplay}
        />
      </div>
    </div>
  );
};

export default Mode;
