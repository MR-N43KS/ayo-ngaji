// React
import React from 'react';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BaseLayout = ({ children, title }) => {
    document.title = `${title ? title : ''} - Belajar Ngaji`;

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default BaseLayout;
