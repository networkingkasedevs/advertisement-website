// App.js

import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import FeaturedAds from './components/FeaturedAds';
import Categories from './components/Categories';
import LatestAds from './components/LatestAds';
import Footer from './components/Footer';



const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <main>
        <FeaturedAds />
        <Categories />
        <LatestAds />
      </main>
      <Footer />
    </div>
  );
};

export default App;
