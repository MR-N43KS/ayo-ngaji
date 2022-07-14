import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Surah from '../pages/Surah';
import Ayat from '../pages/Ayat';
import NotFound from '../pages/NotFound';

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/surah" element={<Surah />} />
            <Route exact path="/surah/:noSurah" element={<Ayat />} />
            <Route exact path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
