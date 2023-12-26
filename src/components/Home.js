import React from 'react';
import '../style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import HeroBanner from './hero_banner';
import Products from './products';
import Footer from './Footer';



const Home = () => {
    return (
        <div>
            <Header />
            <HeroBanner />
            <h2 className='new_arrival'>New Arrivals</h2>
            <Products />
            <Footer />
        </div >
    )
}

export default Home;
