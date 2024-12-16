import HomeBackground from '../../components/homeBackground.jsx';
import MatrixBackground from '../../components/matrixBackground.jsx';
import LandingSection from './homeComponents/landingSection.jsx';
import ImageSection from './homeComponents/imageSection.jsx';

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