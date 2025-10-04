import gsap from "gsap";
import {ScrollTrigger , SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger,SplitText);
import react from 'react';
import Navbar from './components/Navbar.jsx'
import './index.css'
import Hero from "./components/Hero.jsx";

const App = () => {
    return (
        <>
        <main>
            <Navbar/>
            <Hero/>
            <div className='h-dvh bg-black'></div>
        </main>
        </>
    )
}
export default App;