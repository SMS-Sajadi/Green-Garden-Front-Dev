import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
        {/* <!-- Navbar Start --> */}
        <header id="topnav" className="sticky" style={{background: "#219964d9", borderRadius: '0 0 12px 12px'}}>
            <div className="container">

                    <div>
                        <Link className="logo" to="/home">
                            {/* <img src="../assets/images/gg-logo.svg" className="l-dark" height="33" alt="G G logo"  /> */}
                            {/* <img src="../assets/images/gg-logo.svg" className="l-light" height="33" alt="G G loog" /> */}
                            Green Garden
                        </Link>
                    </div>                 
                    
                    <div className="menu-extras">
                        <div className="menu-item">
                            {/* <!-- Mobile menu toggle--> */}
                            <Link className="navbar-toggle" id="isToggle" >
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                            {/* <!-- End mobile menu toggle--> */}
                        </div>
                    </div>
            
                <div id="navigation">
 
                    <ul className="navigation-menu nav-light">
                        <li><Link to="/home" className="sub-menu-item">صفحه اصلی </Link></li>
        
                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#">پیشنهاد گیاه </Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className="has-submenu parent-menu-item"><Link to="#"> نمونه </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="account-profile.html" className="sub-menu-item">تست 1 </Link></li>
                                    </ul>  
                                </li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-menu-item">
                            <Link to="#">درباره ما </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </header>

        </div>
    );
};

export default Navbar;