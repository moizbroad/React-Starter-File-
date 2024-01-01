import React from "react";
import Header from "../Components/HeaderSection/Header";
import Footer from "../Components/FooterSection/Footer";
import Home from "../Components/HomeSection/HeroSection";
import AccountCreate from "../Components/HomeSection/AccountCreateSection";
import BillPaySetups from "../Components/HomeSection/SetupsToPaySection";
import Cards from "../Components/HomeSection/CategorySection";
import Slider from "../Components/HomeSection/TestimonialSection";
import GetStartedFree from "../Components/HomeSection/DownloadAppSection";

const Main = () => {
  return (
    <>
      <div>
        <Header />
        <Home />
        <AccountCreate />
        <BillPaySetups />
        <Cards />
        <Slider />
        <GetStartedFree />
        <Footer />
      </div>
    </>
  );
};

export default Main;
