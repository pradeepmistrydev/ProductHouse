import React from 'react';
import HeroBanner from './HeroBanner';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <h2 className='new_arrival'>New Arrivals</h2>
            <Products />
        </div >
    )
}

export default Home;