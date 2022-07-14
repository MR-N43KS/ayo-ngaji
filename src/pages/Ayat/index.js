// React
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PlayFill, Pause, StopFill } from 'react-bootstrap-icons';
import { Fade } from 'react-reveal';

// Components
import BaseLayout from '../../layouts/BaseLayout';
import Loading from '../../components/Loading';

// CSS
import './index.css';

const Ayat = () => {
    const [alafasyAyat, setAlafasyAyat] = useState([]);
    const [englishAyat, setEnglishAyat] = useState([]);
    const [indonesianAyat, setIndonesianAyat] = useState([]);
    const [isPlaySound, setIsPlaySound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { noSurah } = useParams();
    const navigate = useNavigate();

    const getSurah = async () => {
        try {
            let response = await fetch(`https://api.alquran.cloud/v1/surah/${noSurah}/editions/ar.alafasy,en.transliteration,id.indonesian`);
            let { data } = await response.json();
            setAlafasyAyat(data[0]);
            setEnglishAyat(data[1]);
            setIndonesianAyat(data[2]);
            setIsLoading(false);
        } catch (err) {
            console.error(err);
        }
    };

    const playSoundHandler = (id) => {
        setIsPlaySound(true);
        let audio = document.getElementById(`audio-${id}`);
        audio.play();
        setTimeout(() => {
            setIsPlaySound(false);
        }, audio.duration * 1000);
    };

    const pauseSoundHandler = (id) => {
        setIsPlaySound(false);
        let audio = document.getElementById(`audio-${id}`);
        audio.pause();
    };

    const stopSoundHandler = (id) => {
        setIsPlaySound(false);
        let audio = document.getElementById(`audio-${id}`);
        audio.pause();
        audio.currentTime = 0;
    };

    useEffect(() => {
        if (noSurah === undefined) return navigate('/surah');
        getSurah();
    }, [noSurah]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <BaseLayout title="Ayat">
            <section id="ayat">
                <div className="container">
                    <Fade top duration={1500} delay={500}>
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="heading">Surah {englishAyat?.englishName}</h2>
                                <h3 className="sub-heading">- {englishAyat?.numberOfAyahs} Ayat -</h3>
                            </div>
                        </div>
                    </Fade>
                    <Fade right duration={1500} delay={500}>
                        {alafasyAyat?.ayahs?.map((ayat, index) => (
                            <div className="row mt-5" key={ayat?.numberInSurah}>
                                <div className="col-2 d-flex align-items-center">
                                    <h6 className="text-success">{ayat?.numberInSurah}</h6>
                                </div>
                                <div className="col-10 text-right">
                                    <h3 className="mb-3" style={{ lineHeight: '3.4rem' }}>
                                        {ayat?.text}
                                    </h3>
                                    <p className="text">{indonesianAyat?.ayahs[index]?.text}</p>
                                </div>
                                <div className="col-12 d-flex justify-content-end" style={{ gap: '1rem' }}>
                                    <button className="btn btn-success shadow-sm" onClick={() => playSoundHandler(index)} disabled={isPlaySound}>
                                        <PlayFill />
                                    </button>
                                    <button className="btn btn-success shadow-sm" onClick={() => pauseSoundHandler(index)} disabled={!isPlaySound}>
                                        <Pause />
                                    </button>
                                    <button className="btn btn-success shadow-sm" onClick={() => stopSoundHandler(index)} disabled={!isPlaySound}>
                                        <StopFill />
                                    </button>
                                </div>
                                <audio id={`audio-${index}`} src={ayat?.audio}></audio>
                            </div>
                        ))}
                    </Fade>
                    <div className="row mt-5">
                        <div className="col-12 d-flex justify-content-end">
                            <Link to="/surah" className="btn btn-outline-success shadow-sm">
                                Kembali ke Daftar Surah
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </BaseLayout>
    );
};

export default Ayat;
