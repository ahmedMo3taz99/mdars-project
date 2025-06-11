
import MainAchievement from "../_components/_HomeComponents/Achievement/MainAchievement";
import MainFeatures from "../_components/_HomeComponents/Features/MainFeatures";
import MainGoal from "../_components/_HomeComponents/Goal/MainGoal";
import Hero from "../_components/_HomeComponents/Hero/Hero";
import MainMap from "../_components/_HomeComponents/Map/MainMap";
import MainPartner from "../_components/_HomeComponents/Partner/MainPartner";
import Distinctive from "../_components/_HomeComponents/SchoolCard/Distinctive";
import AOSProvider from "../_components/AOSProvider";

export default function Page() {

  return (
    <AOSProvider>
      <Hero /> 
      <Distinctive />
      <MainMap />
      <MainFeatures />
      <MainAchievement />
      <MainGoal />
      <MainPartner />
    </AOSProvider>
  );
}
