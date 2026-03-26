import AnimationHero from "./AnimationHero";
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
        </div>
    );
}

export default Home;