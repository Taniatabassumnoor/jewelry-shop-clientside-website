import React from "react";
import Explore from "../Explore/Explore";
import GetAddProduct from "../GetAddProduct/GetAddProduct";
import ExploreBanner from "../ExploreBanner";
const ExploreHome = () => {
  return (
    <div>
      <ExploreBanner></ExploreBanner>
      <Explore></Explore>
      {/* <GetAddProduct></GetAddProduct> */}
    </div>
  );
};

export default ExploreHome;
