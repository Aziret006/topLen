import { useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [supportAmount, setSupportAmount] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the support submission here
    console.log("Support amount:", supportAmount);
    // You can add your logic to process the support
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.content}>
          <div className={styles.illustration}>
            <Image src="/Mask.png" alt="support" width={405} height={418} />
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>Поддержка проекту</h2>
            <p>
              Спасибо, что заходите на наш сайт! <br />
              <br />  Ваша поддержка помогает нам становиться лучше. <br />
              <br /> Если вам нравится наш контент, вы можете поддержать нас
              любым удобным способом
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                className={styles.input}
                placeholder="Сумма вашей поддержки"
                value={supportAmount}
                onChange={(e) => setSupportAmount(e.target.value)}
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
