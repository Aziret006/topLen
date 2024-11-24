import Header from "@/components/Header/Header";
import s from "./page.module.scss";
import Section from "@/components/Section/Section";
import Main from "@/components/Main/Main";
import PageComponent from "@/components/PageComponent/PageComponent";
import PagePrimus from "@/components/PagePrimus/PagePrimus";
import TopSlider from "@/components/TopForPC/TopSlider";
// import Roles from "@/components/PageRoles/Roles";
import Mode from "@/components/PageMode/Mode";
import Footer from "@/components/Footer/Footer";
import Technical from "@/components/Technical/Technical";
import Grade from "@/components/Grade/Grade";
import Trainermode from "@/components/TrainerMode.tsx/Trainermode";
import Organizer from "@/components/Organizer/Organizer";
import RoleCarousel from "@/components/PageRoles/Roles";

// import RoleCarousel from "@/components/PageRoles/Roles";

export default function Home() {
  return (
    <div className={s.page}>
      <Header />
      <main>
        <Section />
        <Main />
        <PageComponent />
        <PagePrimus />
        <TopSlider />
        <RoleCarousel />
        <Mode />
        <Technical />
        <Grade />
        <Trainermode />
        <Organizer />
      </main>
      <Footer />
    </div>
  );
}
