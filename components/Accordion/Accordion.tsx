"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={styles.item}>
      <div
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
        {isOpen ? (
          <img src="20.svg" className={`${styles.icon} ${styles.iconOpen}`} />
        ) : (
          <img src="8.svg" className={`${styles.icon} ${styles.iconClosed}`} />
        )}
      </div>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

interface AccordionProps {
  items: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          defaultOpen={index === 0}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};
