import React from 'react';
import { Link } from 'react-router-dom';

const ProductCheckout = () => {
    return (
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
                        <button className='btn btn-primary btn_addtocart mt-4'>
                            <Link to="/CartPage">Add to Cart</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default ProductCheckout;
