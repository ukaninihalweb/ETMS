/* eslint-disable react/prop-types */
import React from 'react'
import logo from '../images/logo.png'
import { memo } from 'react';


const Header = ({setScreen}) => {
    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
    }
    console.log("navbar");
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-tertiary fw-bold">
                <div className="container-fluid ">
                    <img className="me-5" src={logo} style={{height:"50px"}} />
                    {/* <a className="navbar-brand me-5"  href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item ">
                                <p className="nav-link active text-primary" aria-current="page" onClick={()=>setScreen("home")}>Home</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link text-primary"  onClick={()=>setScreen("aboutus")}>About-Us</p>
                            </li>
                            
                            <li className="nav-item">
                                <p className="nav-link text-primary" onClick={()=>setScreen("contactus")}>Contact-Us</p>
                            </li>
                        </ul>
                        <button onClick={handleClick} className='btn bg-primary fw-bold text-white'>Log-Out</button>
                                {/* <button className="btn btn-outline-tertiary bg-primary fw-bold me-3 text-primary" onClick={()=>setScreen("login")} >Log-in</button>
                                <button className="btn btn-outline-tertiary bg-primary fw-bold text-primary"  onClick={()=>setScreen("signup")}>Sign-up</button> */}
                    </div>
                </div>
            </nav>
        </div>
    )
    
}

export default  memo(Header)
