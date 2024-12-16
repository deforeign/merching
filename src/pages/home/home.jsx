import HomeBackground from 'src/components/homeBackground.jsx';
import MatrixBackground from 'src/components/matrixBackground.jsx';
import LandingSection from 'src/pages/home/homeComponents/landingSection.jsx';
import ImageSection from 'src/pages/home/homeComponents/imageSection.jsx';

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