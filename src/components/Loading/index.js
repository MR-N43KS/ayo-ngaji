import React from 'react';
import './index.css';

const Loading = () => {
    return (
        <section id="loading">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                    margin: 'auto',
                    background: 'transparent',
                    display: 'block',
                    shapeRendering: 'auto',
                }}
                width="200px"
                height="200px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <rect x="17.5" y="30" width="15" height="40" fill="#28a745">
                    <animate
                        attributeName="y"
                        repeatCount="indefinite"
                        dur="0.6896551724137931s"
                        calcMode="spline"
                        keyTimes="0;0.5;1"
                        values="18;30;30"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-0.13793103448275862s"
                    ></animate>
                    <animate
                        attributeName="height"
                        repeatCount="indefinite"
                        dur="0.6896551724137931s"
                        calcMode="spline"
                        keyTimes="0;0.5;1"
                        values="64;40;40"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-0.13793103448275862s"
                    ></animate>
                </rect>
                <rect x="42.5" y="30" width="15" height="40" fill="#28a745">
                    <animate
                        attributeName="y"
                        repeatCount="indefinite"
                        dur="0.6896551724137931s"
                        calcMode="spline"
                        keyTimes="0;0.5;1"
                        values="20.999999999999996;30;30"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-0.06896551724137931s"
                    ></animate>
                    <animate
                        attributeName="height"
                        repeatCount="indefinite"
                        dur="0.6896551724137931s"
                        calcMode="spline"
                        keyTimes="0;0.5;1"
                        values="58.00000000000001;40;40"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-0.06896551724137931s"
                    ></animate>
                </rect>
                <rect x="67.5" y="30" width="15" height="40" fill="#28a745">
                    <animate
                        attributeName="y"
                        repeatCount="indefinite"
                        dur="0.6896551724137931s"
                        calcMode="spline"
                        keyTimes="0;0.5;1"
                        values="20.999999999999996;30;30"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                    ></animate>
                    <animate
                        attributeName="height"
                        repeatCount="indefinite"
                        dur="0.6896551724137931s"
                        calcMode="spline"
                        keyTimes="0;0.5;1"
                        values="58.00000000000001;40;40"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                    ></animate>
                </rect>
            </svg>
        </section>
    );
};

export default Loading;
