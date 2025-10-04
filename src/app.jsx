import gsap from "gsap";
import {ScrollTrigger , SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger,SplitText);
import react from 'react';
import Navbar from './components/Navbar.jsx'
import './index.css'
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";

const App = () => {
    return (
        <>
        <main>
            <Navbar/>
            <Hero/>
            <Cocktails/>
            <About/>
        </main>
        </>
    )
}
export default App;