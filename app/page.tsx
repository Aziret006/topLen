"use client";
import Header from "@/components/Header/Header";
import s from "./page.module.scss";
import Section from "@/components/Section/Section";
import Main from "@/components/Main/Main";
// import PageComponent from "@/components/PageComponent/PageComponent";
import PagePrimus from "@/components/PagePrimus/PagePrimus";
import TopSlider from "@/components/TopForPC/TopSlider";
import Mode from "@/components/PageMode/Mode";
import Footer from "@/components/Footer/Footer";
import Technical from "@/components/Technical/Technical";
import Grade from "@/components/Grade/Grade";
import Trainermode from "@/components/TrainerMode.tsx/Trainermode";
import Organizer from "@/components/Organizer/Organizer";
import RoleCarousel from "@/components/PageRoles/Roles";
import Ecosystem from "@/components/Ecosystem/Ecosystem";
import Field from "@/components/FooballFiled/Field";
import Tryout from "@/components/Tryout/Tryout";
import PageComponent from "@/components/PageComponent/PageComponent";
import Wrap from "@/components/Test/Test";
import { useState } from "react";

export default function Home() {
  const content = [
    { img: '/path/to/image1.jpg', cover: '/path/to/cover1.jpg' },
    { img: '/path/to/image2.jpg', cover: '/path/to/cover2.jpg' },
    // ... more items
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : content.length - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < content.length - 1 ? prevIndex + 1 : 0));
  };
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={s.page}>
      <Header />
      <main>
        {/* <Section />
        <Main />
         <PageComponent />  
        <PagePrimus />
        <TopSlider />*/}
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
