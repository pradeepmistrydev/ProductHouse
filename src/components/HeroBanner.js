import React from 'react';
import { NavLink } from 'react-router-dom';

const HeroBanner = () => {
    return (
        <div className="hero_banner">
            <img src="images/glares.webp" className="w-100 banner_img" alt="banner" />
            <div className='banner_content'>
                <h2>Fashion Changing Always</h2>
                <NavLink to="/ProductsCategory">
                    <button className='btn btn-primary shop_nowbtn'>Shop Now</button>
                </NavLink>
            </div>
        </div>
    )
}

export default HeroBanner;
