import { Suspense } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import Main from "@/components/Main/Main";
import PagePrimus from "@/components/PagePrimus/PagePrimus";
import TopSlider from "@/components/TopForPC/TopSlider";
import Mode from "@/components/PageMode/Mode";
import Technical from "@/components/Technical/Technical";
import Organizer from "@/components/Organizer/Organizer";
import RoleCarousel from "@/components/PageRoles/Roles";
import Ecosystem from "@/components/Ecosystem/Ecosystem";
import Tryout from "@/components/Tryout/Tryout";
import PageComponent from "@/components/PageComponent/PageComponent";
import styles from "./page.module.scss";
import Trainermode from "@/components/TrainerMode.tsx/Trainermode";
import Field from "@/components/FooballFiled/Field";
import Grade from "@/components/Grade/Grade";

export const metadata = {
  title: "topsport Resources and Information.",
  description:
    "ТОП — современная онлайн-платформа для любителей и профессионалов футбола в СНГ и за его пределами",
  openGraph: {
    images: [
      {
        url: "/Logo.svg",
        width: 1200,
        height: 630,
        alt: "ТОП Landing Page",
      },
    ],
  },
  
  keywords: [
    "ТОП",
    "футбол",
    "платформа",
    "футбольная жизнь",
    "любители",
    "профессионалы",
  ],
  icons: {
    icon: "/Logo.svg",
  },
};
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Section />
        <Main />
        <PageComponent />
        <PagePrimus />
        <Suspense fallback={<div>Loading Top Slider...</div>}>
          <TopSlider />
        </Suspense>
        <RoleCarousel />
        <Mode />
        <Technical />
        <Grade />
        <Trainermode />
        <Organizer />
        <Ecosystem />
        <Field />
        <Tryout />
      </main>
      <Footer />
    </div>
  );
}
