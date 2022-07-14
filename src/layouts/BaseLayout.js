// React
import React from 'react';

// Components
import Navbar from '../components/Navbar';

const BaseLayout = ({ children, title }) => {
    document.title = `${title ? title : ''} - Belajar Ngaji`;

    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default BaseLayout;
