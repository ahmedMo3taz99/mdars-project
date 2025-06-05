"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import MainAchievement from "../_components/HomeComponents/Achievement/MainAchievement";
import MainFeatures from "../_components/HomeComponents/Features/MainFeatures";
import MainGoal from "../_components/HomeComponents/Goal/MainGoal";
import Hero from "../_components/HomeComponents/Hero/Hero";
import MainMap from "../_components/HomeComponents/Map/MainMap";
import MainPartner from "../_components/HomeComponents/Partner/MainPartner";
import Distinctive from "../_components/HomeComponents/SchoolCard/Distinctive";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Hero />
      <Distinctive />
      <MainMap />
      <MainFeatures />
      <MainAchievement />
      <MainGoal />
      <MainPartner />
    </>
  );
}
