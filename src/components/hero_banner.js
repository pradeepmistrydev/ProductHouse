import React from 'react';
import '../style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const HeroBanner = () => {
    return (
        <div>
            {
                <div className="hero_banner">
                    <img src="images/glares.webp" className="w-100 banner_img" alt="banner" />
                    <div className='banner_content'>
                        <h2>Fashion Changing Always</h2>
                        <button className='btn btn-primary shop_nowbtn'>Shop Now</button>
                    </div>

                </div>
            }
        </div >
    )
}

export default HeroBanner;
