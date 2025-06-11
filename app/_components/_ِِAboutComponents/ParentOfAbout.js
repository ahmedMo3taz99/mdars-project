import React from "react";
import Breadcrumb from "./Breadcrumb";
import MainAbout from "./MainAbout";
import ParentService from "./ParentService";
import SchoolService from "./SchoolService";
import MainFaq from "./MainFaq";
import Connect from "./Connect";
import AOSProvider from "../AOSProvider";

export default function ParentOfAbout() {
  return (
    <AOSProvider>
      <Breadcrumb />
      <MainAbout />
      <ParentService />
      <SchoolService />
      <MainFaq />
      <Connect />
    </AOSProvider>
  );
}
