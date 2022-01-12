import React from 'react';

import Footer from '../../Shared/Footer/Footer';
import AllReviews from '../AllReviews/AllReviews';

import Category from '../Category/Category';
import HomePageBanner from '../HomePageBanner/HomePageBanner';


import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
             <HomePageBanner></HomePageBanner>
             <Services></Services>
             <Category></Category>
             <AllReviews></AllReviews>
      
        </div>
    );
};

export default Home;