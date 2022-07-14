// React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import Loading from '../../components/Loading';

// Assets
import { NotFoundSVG } from '../../assets/images';

// CSS
import './index.css';

const NotFound = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(function () {
            setIsLoading(false);
        }, 400);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section id="not-found">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <img className="mb-5" src={NotFoundSVG} alt="not-found" width="450" />
                        <h1 className="text-dark mb-3">Halaman tidak ditemukan!</h1>
                        <Link to="/" className="btn btn-success shadow-sm">
                            Kembali ke Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
