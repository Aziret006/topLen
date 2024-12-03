import Header from "@/components/Header/Header";
import s from "./page.module.scss";
import Section from "@/components/Section/Section";
import Main from "@/components/Main/Main";
import PagePrimus from "@/components/PagePrimus/PagePrimus";
import TopSlider from "@/components/TopForPC/TopSlider";
import Mode from "@/components/PageMode/Mode";
import Trainermode from "@/components/TrainerMode.tsx/Trainermode";
import Organizer from "@/components/Organizer/Organizer";
import Ecosystem from "@/components/Ecosystem/Ecosystem";

export default function Home() {
  return (
    <div className={s.page}>
      <Header />
      <main>
        <Section />
        <Main />
        <PagePrimus />
        <TopSlider />
      <Mode />
        <Trainermode />
        <Organizer />
       <Ecosystem />
      </main>
    </div>
  );
}
