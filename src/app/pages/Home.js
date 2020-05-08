import React from 'react';

import FeaturedProduct from '../components/FeaturedProducts';
const Home = () => {

    return (
        <div className="Home-container">
            <h1>Week offer</h1>
            <div className="featured-offertWeek">
                <FeaturedProduct />
                <FeaturedProduct />
                <FeaturedProduct />
            </div>

        </div>
    );
};

export default Home;
