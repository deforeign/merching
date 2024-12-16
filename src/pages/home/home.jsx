import React, { useEffect, useRef } from 'react';
import HomeBackground from '../../components/homeBackground';
import MatrixBackground from '../../components/matrixBackground';
import LandingSection from './homeComponents/landingSection';
import ImageSection from './homeComponents/imageSection';

function Home() {
    return (
        <>
            <HomeBackground />
            <MatrixBackground />
            <LandingSection />
            <ImageSection />
        </>
    );
}

export default Home;