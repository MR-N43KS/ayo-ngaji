// React
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import { Link, useLocation } from 'react-router-dom';

// CSS
import './index.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation();

    const stickyNavbar = () => {
        if (window.scrollY > 0) return setIsScrolled(true);
        return setIsScrolled(false);
    };

    useEffect(() => {
        stickyNavbar();
        window.addEventListener('scroll', () => stickyNavbar());
    }, []);

    return (
        <Fade top duration={1500}>
            <nav className={`navbar fixed-top ${isScrolled ? 'shadow-sm scrolled' : ''}`}>
                <ul className="navbar-nav">
                    <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className={`nav-item ${location.pathname.includes('/surah') ? 'active' : ''}`}>
                        <Link to="/surah" className="nav-link">
                            Surah
                        </Link>
                    </li>
                </ul>
            </nav>
        </Fade>
    );
};

export default Navbar;
