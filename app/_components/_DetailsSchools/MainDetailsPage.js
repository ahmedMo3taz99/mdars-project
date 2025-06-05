import Connect from "../_ِِAboutComponents/Connect";
import MainFaq from "../_ِِAboutComponents/MainFaq";
import AboutEveryPageDetails from "./AllDetails/AboutEveryPageDetails";
import AllRating from "./AllDetails/AllRAting";
import BannerDetails from "./AllDetails/BannerDetails";
import InstagramPhotos from "./AllDetails/InstgramPhotos";
import PriceSchool from "./AllDetails/PriceSchool";

export default function MainDetailsPage() {
  return (
    <>
      <BannerDetails />
      <AboutEveryPageDetails />
      <PriceSchool />
      <InstagramPhotos />
      <AllRating />
      <MainFaq />
      <Connect />
    </>
  );
}
