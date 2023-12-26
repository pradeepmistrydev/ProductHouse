import React from 'react';
import '../style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <>
            <div className='Login'>
                <div className="container">
                    <div className='loginform'>
                        <h2 className='text-center'>Login</h2>
                        <div className='input_form mt-3'>
                            <p>Your email address *</p>
                            <input type="text" />
                        </div>
                        <div className='input_form mt-3'>
                            <p>Password *</p>
                            <input type="text" />
                        </div>

                        <button className='btn btn-primary btn_login mt-4'>LOGIN</button>

                        <p className='mt-4'> Haven't Registered?
                            &nbsp;<Link to="/Register">Register Now</Link> </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;
