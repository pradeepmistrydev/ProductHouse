import React from 'react';
import '../style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import HeroBanner from './hero_banner';
import Products from './products';
import Footer from './Footer';



const CartPage = () => {
    return (
        <div>
            <Header />
            <div className='cartPage'>
                <div className='cartPage_banner'>
                    <h2>Shopping Cart</h2>
                </div>

                <div className='container'>
                    <div className='cartPage_main mt-5 mb-5'>
                        <div className='cartPage_product'>
                            <div className='table-responsive'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th className='text-center'>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='product_content d-flex align-items-center gap-3'>
                                                    <img src="images/product-1.jpg" alt="product" />
                                                    <p className='mb-0'>Beige knitted elastic runner shoes</p>
                                                </div>
                                            </td>
                                            <td>$84.00</td>
                                            <td>
                                                <div className='quantity_counter'>
                                                    <input type="number" name="" value={1} id="" />
                                                </div>
                                            </td>
                                            <td>$84.00</td>
                                            <td><span className='close_btn'>X</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='product_content d-flex align-items-center gap-3'>
                                                    <img src="images/product-2.jpg" alt="product" />
                                                    <p className='mb-0'>Blue utility pinafore denim dress</p>
                                                </div>
                                            </td>
                                            <td>$84.00</td>
                                            <td>
                                                <div className='quantity_counter'>
                                                    <input type="number" name="" id="" value={1} />
                                                </div>
                                            </td>
                                            <td>$84.00</td>
                                            <td><span className='close_btn'>X</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='cartPage_amt'>
                            <h3>Cart Total</h3>

                            <div className='subtotal'>
                                <p>Subtotal:</p>
                                <p className='price_amt'>$160.00</p>
                            </div>
                            <div className='shipping'>
                                <input type="radio" id='radio_text' /><label htmlFor="radio_text" className='m-2'>Free Shipping - $0</label>
                            </div>
                            <div className='total_amt subtotal'>
                                <p>Total:</p>
                                <p className='price_amt'>$160.00</p>
                            </div>
                            <button className='btn btn-primary d-block m-auto mt-3'>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default CartPage;
