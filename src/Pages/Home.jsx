import React from "react";
import HeroSection from "../Components/HomeHero";
import WhatIsCyberWarLab from "../Components/HomeVideo";
import AllInOneSecurity from "../Components/HomeSecurity";
import Certifications from "../Components/HomeCertifications";
import DidYouKnow from "../Components/DidYouKnow";
import TrustedExperts from "../Components/HomeExperts";
import PentestingReports from "../Components/HomePentesting";
import WebScanComponent from "../Components/HomeScan";
import HowItWorks from "../Components/HowItWorks";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WebScanComponent />
      <AllInOneSecurity />
      <Certifications />
      <DidYouKnow />
      <TrustedExperts />
      <PentestingReports />
      <WhatIsCyberWarLab />
      <HowItWorks />
    </div>
  );
};

export default Home;
