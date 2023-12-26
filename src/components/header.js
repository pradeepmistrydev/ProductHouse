import React from 'react';
import '../style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            {
                <nav className="navbar navbar-expand-lg navbar-light navbar_white">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Products House</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav navbar">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Products</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Contact</a>
                                </li>
                            </div>
                        </div>
                        <button className='btn btn-primary cart_detail'>
                            <img src="images/card.svg" alt="cart_icon" />
                            <p className='mb-0 line_height_0'>1</p>
                        </button>
                        <button className='btn btn-primary cart_detail'>
                            <img src="images/user.png" className='user_icon' alt="cart_icon" />
                            <p className='mb-0 line_height_0 text-white'>
                                <Link to='/Login'>Login / Register</Link>
                            </p>
                        </button>
                    </div>
                </nav>
            }
        </div >
    )
}

export default Header;
