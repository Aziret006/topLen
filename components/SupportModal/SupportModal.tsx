import { useState, useRef } from "react";
import styles from "./page.module.scss";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [supportAmount, setSupportAmount] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseInt(supportAmount.replace(/[^\d]/g, ""));

    if (!amount || amount < 1) {
      setError("Пожалуйста, введите сумму больше 0");
      return;
    }

    if (amount > 1000000) {
      setError("Максимальная сумма поддержки 1,000,000 сом");
      return;
    }

    console.log("Support amount:", amount);
    setError("");
    onClose();
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    let value = input.value.replace(/[^\d]/g, ""); // Оставляем только цифры

    // Ограничиваем ввод до 6 цифр
    if (value.length > 7) {
      value = value.slice(0, 7);
    }

    // Если есть значение, добавляем "сом"
    const formattedValue = value ? `${value} сом` : "";
    setSupportAmount(formattedValue);
    setError(""); // Сбрасываем ошибку при изменении

    // Устанавливаем курсор перед "сом"
    setTimeout(() => {
      const position = value.length;
      input.setSelectionRange(position, position);
    }, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Разрешаем: цифры, backspace, delete, стрелки
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
    ];
    if (!allowedKeys.includes(e.key) && !/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.content}>
          <div className={styles.illustration}>
            <img src="/Mask2.png" alt="support" className={styles.image} />
          </div>
          <div className={styles.info}>
            <h2 style={{ flexWrap: "nowrap" }} className={styles.title}>
              Поддержка проекту
            </h2>
            <p className={styles.text}>
              Спасибо, что заходите на наш сайт! <br />
              <br /> Ваша поддержка помогает нам становиться лучше. <br />
              <br /> Если вам нравится наш контент, вы можете поддержать нас
              любым удобным способом
            </p>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputWrapper}>
                <input
                  ref={inputRef}
                  type="text"
                  className={`${styles.input} ${
                    error ? styles.inputError : ""
                  }`}
                  placeholder="Сумма вашей поддержки"
                  value={supportAmount}
                  onChange={handleAmountChange}
                  onKeyDown={handleKeyDown}
                />
                {error && <div className={styles.errorMessage}>{error}</div>}
              </div>
              <button type="submit" className={styles.button}>
                Поддержать
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
