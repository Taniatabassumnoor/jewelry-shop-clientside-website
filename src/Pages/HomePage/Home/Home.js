import React from "react";
import Gallery from "../../Gallery/Gallery";

import Footer from "../../Shared/Footer/Footer";
import WhyWeSpecial from "../../WhyWeSpecial/WhyWeSpecial";
import AllReviews from "../AllReviews/AllReviews";

import Category from "../Category/Category";
import HomePageBanner from "../HomePageBanner/HomePageBanner";

import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <Services></Services>

      <WhyWeSpecial />
      <Category></Category>
      <Gallery />
      <AllReviews></AllReviews>
    </div>
  );
};

export default Home;
