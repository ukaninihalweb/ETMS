import React from 'react'
import logo from '../images/logo.png'

const Footer = () => {
    return (
        <div>
            <div className="container-fluid mt-5 bg-primary">
                <div className="row ms-5">
                    <div className="col-md-4  mt-5 text-light">
                        <img className="mb-3" src={logo} alt='logo image' style={{height:"70px"}} />
                        <a className="fw-bolder mt-2 ms-3 text-light" href='#'>ETMS</a>
                        <h5 className="me-4">Employee Tracking <br/> Managment System</h5>
                    </div>
                    <div className = "col-md-4">
                        <ul className="navbar-nav text-light fw-bold mt-4 gap-3" style={{listStyle:"none"}} >
                            <li><a style={{color:"white"}} href="/Aboutus">Aboutus</a></li>
                            <li><a style={{color:"white"}} href="/Contactus">Contactus</a></li>
                            <li><a style={{color:"white"}} href="/">FAQ</a></li>
                            <li><a style={{color:"white"}} href="/">Help & Support</a></li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <ul className="navbar-nav text-light fw-bold mt-4 gap-3" style={{listStyle:"none"}} >
                            <li><a style={{color:"white"}} href="/Aboutus">Aboutus</a></li>
                            <li><a style={{color:"white"}} href="/Contactus">Contactus</a></li>
                            <li><a style={{color:"white"}} href="/">FAQ</a></li>
                            <li><a style={{color:"white"}} href="/">Help & Support</a></li>
                        </ul>
                    </div>
                      <div className='col-md-4'>
                        <ul className="navbar-nav text-light fw-bold mt-4 gap-3" style={{listStyle:"none"}} >
                            <li><a style={{color:"white"}} href="/Aboutus">Aboutus</a></li>
                            <li><a style={{color:"white"}} href="/Contactus">Contactus</a></li>
                            <li><a style={{color:"white"}} href="/">FAQ</a></li>
                            <li><a style={{color:"white"}} href="/">Help & Support</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer






