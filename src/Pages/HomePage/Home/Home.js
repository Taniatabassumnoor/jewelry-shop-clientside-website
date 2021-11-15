import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Category from '../Category/Category';
import HomePageBanner from '../HomePageBanner/HomePageBanner';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <HomePageBanner></HomePageBanner>
            <Services></Services>
            <Category></Category>
            
            <Footer></Footer> 
        </div>
    );
};

export default Home;