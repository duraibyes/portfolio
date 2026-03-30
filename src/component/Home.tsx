import AnimationHero from "./AnimationHero";
import ContactSection from "./ContactSection";
import Navbar from "./layout/Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="App">
            <Navbar />
            <AnimationHero />
            <Skills />
            <Projects />
            <ContactSection />
        </div>
    );
}

export default Home;