import { useState } from "react";
import styles from "./page.module.scss";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [supportAmount, setSupportAmount] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = supportAmount.replace(/[^\d]/g, '');
    console.log("Support amount:", amount);
    onClose();
  };

  const formatAmount = (value: string) => {
    // Удаляем все нецифровые символы
    const numbers = value.replace(/[^\d]/g, '');
    return numbers ? `${numbers} сом` : '';
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^\d]/g, '');
    setSupportAmount(formatAmount(rawValue));
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
              <input
                type="text"
                className={styles.input}
                placeholder="Сумма вашей поддержки"
                value={supportAmount}
                onChange={handleAmountChange}
              />
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
