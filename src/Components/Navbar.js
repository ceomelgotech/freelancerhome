import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/images/fhlogo1.png'


const Navbar = () => {
    const navstyle={
        maxWidth:"400px",
        borderRadius: "10px"
    }
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-light navigation">
                                <Link to='/'className="navbar-brand">
                                    <img style={navstyle} src={logo} alt="logo"/>
                                </Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto main-nav ">
                                        <li className="nav-item active">
                                            <Link to='/'className="nav-link">Home</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to='/category'className="nav-link">Categories</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to='/contact-us'className="nav-link">Contact Us</Link>
                                        </li>
                                        
                                    </ul>
                                    <ul className="navbar-nav ml-auto mt-10">
                                        <li className="nav-item">
                                            <Link to='/'className="nav-link login-button">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/'className="nav-link text-white add-button"><i className="fa fa-plus-circle"></i> Sign-Up</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar;
