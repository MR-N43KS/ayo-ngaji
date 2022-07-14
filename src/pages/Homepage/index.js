// React
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

// Components
import BaseLayout from '../../layouts/BaseLayout';
import Loading from '../../components/Loading';

// Assets
import { HeroIMG } from '../../assets/images';

// CSS
import './index.css';

const Homepage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 400);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <BaseLayout title="Home">
            <section id="home">
                <div className="container">
                    <div className="row d-none d-md-flex">
                        <Fade left duration={1500} delay={700}>
                            <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
                                <h1 className="text-success mb-3">Belajar Ngaji</h1>
                                <p className="text mb-4">Belajar Ngaji adalah sebuah website untuk menampilkan surah al-quran serta terjemahannya.</p>
                                <Link to="/surah" className="btn btn-lg btn-success shadow-sm">
                                    Yuk Mulai
                                </Link>
                            </div>
                        </Fade>
                        <Fade right duration={1500} delay={1400}>
                            <div className="col-md-6 hero-img-wrapper">
                                <img className="img-fluid" src={HeroIMG} alt="hero-img" />
                            </div>
                        </Fade>
                    </div>
                    <div className="row d-md-none">
                        <Fade top duration={1500} delay={700}>
                            <div className="col-12 hero-img-wrapper mb-3">
                                <img className="img-fluid" src={HeroIMG} alt="hero-img" />
                            </div>
                        </Fade>
                        <Fade bottom duration={1500} delay={1400}>
                            <div className="col-12">
                                <h1 className="text-success mb-3">Belajar Ngaji</h1>
                                <p className="text mb-4">Belajar Ngaji adalah sebuah website untuk menampilkan surah al-quran serta terjemahannya.</p>
                                <Link to="/surah" className="btn btn-success shadow-sm">
                                    Yuk Mulai
                                </Link>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </BaseLayout>
    );
};

export default Homepage;
