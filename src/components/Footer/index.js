import React from 'react';
import { Github, Instagram, Youtube } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer className="py-2">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 d-flex justify-content-center mb-3" style={{ gap: '1rem' }}>
                        <a href="https://github.com/MR-N43KS/ayo-ngaji" className="btn btn-sm btn-outline-success shadow-sm" target="_blank" rel="noreferrer">
                            <Github />
                        </a>
                    <div className="col-12">
                        <p className="text">Copyright 2022 - Ayo Ngaji By Intan</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
