import React from 'react';
import { Github, Instagram, Youtube } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer className="py-2">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 d-flex justify-content-center mb-3" style={{ gap: '1rem' }}>
                        <a href="https://github.com/zachriek" className="btn btn-sm btn-outline-success shadow-sm" target="_blank" rel="noreferrer">
                            <Github />
                        </a>
                        <a href="https://www.youtube.com/channel/UCFbzQWPGA17_gKzotx207jQ" className="btn btn-sm btn-outline-success shadow-sm" target="_blank" rel="noreferrer">
                            <Youtube />
                        </a>
                        <a href="https://www.instagram.com/zachriek/" className="btn btn-sm btn-outline-success shadow-sm" target="_blank" rel="noreferrer">
                            <Instagram />
                        </a>
                    </div>
                    <div className="col-12">
                        <p className="text">Copyright 2022 - Belajar Ngaji</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
