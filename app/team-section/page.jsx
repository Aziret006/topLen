import React from "react";
import styles from "./page.module.scss";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Accordion } from "@/components/Accordion/Accordion";

const founders = [
  {
    name: "АСКАР БЕГАЛИЕВ",
    role: "CEO & Co-Founder - «TOP - Born TO Play»",
    image: "/founder5.jpg?height=400&width=300",
  },
  {
    name: "АШИМ КУЛЧАРОВ",
    role: "CEO & Co-Founder - «TOP - Born TO Play»",
    image: "/founder6.jpg?height=400&width=300",
  },
  {
    name: "ЭРМЕК ДЖУМАЛИЕВ",
    role: "CEO & Co-Founder - «TOP - Born TO Play»",
    image: "/founder7.jpg?height=400&width=300",
  },
  {
    name: "ЭРМЕК ДЖУМАЛИЕВ",
    role: "CEO & Co-Founder - «TOP - Born TO Play»",
    image: "/founder8.jpg?height=400&width=300",
  },
];

const TeamMemberGrid = ({ members }) => (
  <div className={styles.membersGrid}>
    {members.map((member, index) => (
      <div key={index} className={styles.memberCard}>
        <div className={styles.imageWrapper}>
          <img
            src={member.image}
            alt={member.name}
            className={styles.memberImage}
          />
        </div>
        <div className={styles.memberInfo}>
          <h3
            className={`${styles.name} ${
              index === 1
                ? styles.tweerthName
                : index === 2
                ? styles.thirdName
                : index === 3
                ? styles.fourthName
                : ""
            }`}
          >
            {member.name}
          </h3>
          <p
            className={`${styles.role} ${
              index === 1
                ? styles.tweerthName
                : index === 2
                ? styles.thirdName
                : index === 3
                ? styles.fourthName
                : ""
            }`}
          >
            {member.role}
          </p>
        </div>
      </div>
    ))}
  </div>
);

const sections = [
  {
    id: "founders",
    title: "ОСНОВАТЕЛИ",
    content: <TeamMemberGrid members={founders} />,
  },
  {
    id: "designers",
    title: "ДИЗАЙНЕРЫ",
    content: <p>Content for designers</p>,
  },
  {
    id: "backend",
    title: "BACK-END DEVELOPERS",
    content: <p>Content for back-end developers</p>,
  },
  {
    id: "frontend",
    title: "FRONT-END DEVELOPERS",
    content: <p>Content for front-end developers</p>,
  },
  {
    id: "mobile",
    title: "MOBILE DEVELOPERS",
    content: <p>Content for mobile developers</p>,
  },
];

export default function TeamSectionPage() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>НАША КОМАНДА</h1>
        <p className={styles.description}>
          ТОП — это современная онлайн-платформа, которая объединяет все аспекты
          футбольной жизни для любителей и профессионалов в СНГ и за его
          пределами
        </p>
        <Accordion items={sections} defaultOpenIndex={0} />
      </div>
      <Footer />
    </div>
  );
}
