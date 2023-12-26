import React from 'react';
import '../style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Footer from './Footer';



const ProductCheckout = () => {
    return (
        <div>
            <Header />
            <div className='cartPage mt-4 mb-4'>
                <div className='container'>
                    <div className='productcheckout'>
                        <img src="images/3.jpg" alt="image_banner" className='image_product' />
                        <div className='productcheckout_details'>
                            <h2>Beige ring handle circle cross body bag</h2>
                            <h3>$56.00</h3>
                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.</p>
                            <div className='size_input'>
                                <p>Size:</p>
                                <select name="" id="">
                                    <option value="XL">XL</option>
                                </select>
                            </div>
                            <div className='size_input mt-4'>
                                <p>Qty:</p>
                                <input type="number" value={1} />
                            </div>
                            <button className='btn btn-primary mt-4'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default ProductCheckout;
