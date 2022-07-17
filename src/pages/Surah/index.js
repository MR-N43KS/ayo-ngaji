// React
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

// Components
import BaseLayout from '../../layouts/BaseLayout';
import Loading from '../../components/Loading';

// CSS
import './index.css';

const SurahTable = ({ data }) => {
    return (
        <div className="row mt-3">
            <div className="col-12">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Surah ke</th>
                                <th>Nama Surah</th>
                                <th>Jumlah Ayat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data?.map((surah) => (
                                    <tr key={surah.number}>
                                        <td>{surah.number}.</td>
                                        <td>
                                            <Link to={`/surah/${surah.number}`} className="text-success">
                                                {surah.englishName} ({surah.englishNameTranslation})
                                            </Link>
                                        </td>
                                        <td>{surah.numberOfAyahs} Ayat</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3">
                                        <div className="alert alert-danger" role="alert">
                                            Surah tidak ditemukan
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const Surah = () => {
    const [surah, setSurah] = useState([]);
    const [searchSurah, setSearchSurah] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getSurah = async () => {
        try {
            let response = await fetch('https://api.alquran.cloud/v1/surah');
            let { data } = await response.json();
            setSurah(data);
            setSearchSurah(data);
            setIsLoading(false);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSearchSurah = (e) => {
        const newSurah = searchSurah.filter((surah) => surah.englishName.toLowerCase().includes(e.target.value.toLowerCase()) || surah.number === Number(e.target.value));
        setSurah(newSurah);
    };

    useEffect(() => {
        getSurah();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <BaseLayout title="Surah">
            <section id="surah">
                <div className="container">
                    <Fade top duration={1500} delay={700}>
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="heading">Daftar Surah Al-Quran</h2>
                                <h3 className="sub-heading">- {surah.length} Surah -</h3>
                            </div>
                        </div>
                    </Fade>
                    <Fade top duration={1500} delay={2100}>
                        <div className="row justify-content-center mt-4">
                            <div className="col-lg-6 col-md-8 col-12">
                                <input type="text" class="form-control border-success shadow-success shadow-sm" placeholder="Cari nama surah atau nomor surah" onChange={handleSearchSurah} />
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom duration={1500} delay={1400}>
                        <SurahTable data={surah} />
                    </Fade>
                </div>
            </section>
        </BaseLayout>
    );
};

export default Surah;
