"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import React from "react";
import Breadcrumb from "./Breadcrumb";
import MainAbout from "./MainAbout";
import ParentService from "./ParentService";
import SchoolService from "./SchoolService";
import MainFaq from "./MainFaq";
import Connect from "./Connect";

export default function ParentOfAbout() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Breadcrumb />
      <MainAbout />
      <ParentService />
      <SchoolService />
      <MainFaq />
      <Connect />
    </div>
  );
}
