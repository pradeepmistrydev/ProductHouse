import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className="container">
            <div className="products">
                <Link to="/ProductCheckout">
                    <div className='product_item position-relative'>
                        <img src="images/clothes1.webp" className='w-100' alt="clothes" />
                        <img src="images/card_btn.webp" className='addbtn' alt="cart_btn" />
                        <div className="products_details" v>
                            <p>Knitted Jumper</p>
                            <h3>$30.00</h3>
                        </div>
                    </div>
                </Link>
                <div className='product_item position-relative'>
                    <img src="images/clothes2.webp" className='w-100' alt="clothes" />
                    <img src="images/card_btn.webp" className='addbtn' alt="cart_btn" />
                    <div className="products_details" v>
                        <p>Knitted Jumper</p>
                        <h3>$30.00</h3>
                    </div>
                </div>
                <div className='product_item position-relative'>
                    <img src="images/clothes3.webp" className='w-100' alt="clothes" />
                    <img src="images/card_btn.webp" className='addbtn' alt="cart_btn" />
                    <div className="products_details" v>
                        <p>Knitted Jumper</p>
                        <h3>$30.00</h3>
                    </div>
                </div>
                <div className='product_item position-relative'>
                    <img src="images/clothes4.webp" className='w-100' alt="clothes" />
                    <img src="images/card_btn.webp" className='addbtn' alt="cart_btn" />
                    <div className="products_details" v>
                        <p>Knitted Jumper</p>
                        <h3>$30.00</h3>
                    </div>
                </div>
                <div className='product_item position-relative'>
                    <img src="images/clothes5.webp" className='w-100' alt="clothes" />
                    <img src="images/card_btn.webp" className='addbtn' alt="cart_btn" />
                    <div className="products_details" v>
                        <p>Knitted Jumper</p>
                        <h3>$30.00</h3>
                    </div>
                </div>
                <div className='product_item position-relative'>
                    <img src="images/clothes6.webp" className='w-100' alt="clothes" />
                    <img src="images/card_btn.webp" className='addbtn' alt="cart_btn" />
                    <div className="products_details" v>
                        <p>Knitted Jumper</p>
                        <h3>$30.00</h3>
                    </div>
                </div>
                <div className='product_item position-relative'>
                    <img src="images/clothes7.webp" className='w-100' alt="clothes" />
                    <img src="images/card_btn.webp" className='addbtn' alt="cart_btn" />
                    <div className="products_details" v>
                        <p>Knitted Jumper</p>
                        <h3>$30.00</h3>
                    </div>
                </div>
                <div className='product_item position-relative'>
                    <img src="images/clothes8.webp" className='w-100' alt="clothes" />
                    <img src="images/card_btn.webp" className='addbtn' alt="cart_btn" />
                    <div className="products_details" v>
                        <p>Knitted Jumper</p>
                        <h3>$30.00</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;
